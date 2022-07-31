import { ApolloServer } from "apollo-server-micro";
// import { NextApiHandler } from "next";
import { GraphQLJSONObject } from "graphql-type-json";
import { ethers } from "ethers";
import {
  asNexusMethod,
  makeSchema,
  nonNull,
  nullable,
  list,
  objectType,
  stringArg,
  scalarType
} from "nexus";

import path from "path";
import cors from "micro-cors";
import prisma from "../../lib/prisma";

const verifyMessage = (msg, sig) => {};

const JSONScalar = scalarType({
  name: "JSON",
  asNexusMethod: "json",
  serialize: GraphQLJSONObject.serialize,
  parseValue: GraphQLJSONObject.parseValue,
  parseLiteral: GraphQLJSONObject.parseLiteral
});

const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("address");
  }
});

const Project = objectType({
  name: "Project",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("slug");
    t.json("metadata");
  }
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.field("projects", {
      type: "Project",
      resolve: (_, args) => {
        return prisma.project.findMany({
          orderBy: [
            {
              name: "asc"
            }
          ]
        });
      }
    });
    t.field("project", {
      type: "Project",
      args: {
        slug: stringArg()
      },
      resolve: async (_, { slug }) => {
        const project = await prisma.project.findUnique({
          where: { slug }
        });
        return project;
      }
    });
  }
});

const findOrCreateUser = async account => {
  const user = await prisma.user.findUnique({ where: { account } });
  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        account
      }
    });
    return newUser;
  } else {
    return user;
  }
};

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("createProject", {
      type: "Project",
      args: {
        message: stringArg(),
        signature: stringArg(),
        account: stringArg()
      },
      resolve: async (_, { message, signature, account }, ctx) => {
        const recoveredAddress = ethers.utils.recoverAddress(
          ethers.utils.hashMessage(message),
          signature
        );
        if (recoveredAddress === account) {
          // Check if user is already in the database

          const user = await findOrCreateUser(account);
          const parsedMessage = JSON.parse(message);
          console.log("parsedMessage", parsedMessage);

          console.log("parsedMessage.links", parsedMessage.links);

          console.log("after - user found or created", user);
        } else {
          return new Error("SIGNER_DOES_NOT_MATCH");
        }

        console.log("----- message------- ", message);
        console.log("----- signature -----", signature);
        console.log("--- account -----", account);
        console.log("--- recoveredAddress ---", recoveredAddress);
      }
    });
  }
});

export const schema = makeSchema({
  types: [Query, Mutation, Project, User, JSONScalar],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql")
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

const apolloServer = new ApolloServer({ schema });

let apolloServerHandler;

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: "/api"
    });
  }

  return apolloServerHandler;
}

const handler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  return apolloServerHandler(req, res);
};

export default cors()(handler);

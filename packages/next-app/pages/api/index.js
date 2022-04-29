import { ApolloServer } from "apollo-server-micro";
// import { NextApiHandler } from "next";
import { GraphQLJSONObject } from "graphql-type-json";

import {
  asNexusMethod,
  makeSchema,
  nonNull,
  nullable,
  objectType,
  stringArg,
  scalarType
} from "nexus";

import path from "path";
import cors from "micro-cors";
import prisma from "../../lib/prisma";

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
    t.string("website");
    t.string("twitter");
    t.string("discord");
    t.string("opensea");
    t.string("opensea");
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

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("createProject", {
      type: "Project",
      args: {
        name: stringArg()
      },
      resolve: async (_, { name }, ctx) => {
        console.log("----- ");
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

import { PROJECTS, PROJECT } from "../../data/queries";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apollo-client";
import Layout from "../../components/layout";
// import ListItem from "../../components/list-item";
import Card from "../../components/card";

export default function Project({ slug }) {
  const { loading, error, data } = useQuery(PROJECT, {
    variables: { slug: slug },
  });

  return <Layout>{data && <Card project={data.project} />}</Layout>;
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo(null);
  const { loading, error, data } = await apolloClient.query({
    query: PROJECTS,
  });
  const paths = data.projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths: paths || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo(null);
  await apolloClient.query({
    query: PROJECT,
    variables: { slug: params.slug },
  });
  return addApolloState(apolloClient, { props: { slug: params.slug } });
}

import List from "../components/list";
import { PROJECTS } from "../data/queries";
import { initializeApollo, addApolloState } from "../lib/apollo-client";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <List />
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   const apolloClient = initializeApollo(null);
//   await apolloClient.query({
//     query: PROJECTS
//   });
//   return addApolloState(apolloClient, { props: {} });
// }

import Head from "next/head";
import List from "../components/list";
import { PROJECTS } from "../data/queries";
import { initializeApollo, addApolloState } from "../lib/apollo-client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>wgmi</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D6RF6JTC14"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GDL78VBY4Q');
          `,
          }}
        />
      </Head>

      <main className="flex flex-col w-full flex-1 p-4 sm:px-20 sm:py-8">
        <div className="mb-4 flex flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row">
            <p className="text-4xl font-serif">
              wgmi<span className="text-4xl text-gray-300">.gg</span>
            </p>
            <p className="text-sm text-gray-500 self-end mb-1 sm:ml-2">
              official links for projects
            </p>
          </div>
          <a
            href="https://airtable.com/shrnnT4MVlDMaRO4I"
            target="_blank"
            className="text-sm text-gray-500 hover:text-purple-500 cursor-pointer"
          >
            send feedback
          </a>
        </div>

        <List />
      </main>

      <footer className="flex items-center justify-center w-full h-12 border-t">
        <p className="text-sm text-gray-400">
          created and mainted by{" "}
          <a
            target="_blank"
            href="https://twitter.com/piesrtasty"
            className="text-gray-700 hover:text-purple-500"
          >
            @piesrtasty
          </a>
        </p>
      </footer>
    </div>
  );
}
export async function getStaticProps() {
  const apolloClient = initializeApollo(null);
  await apolloClient.query({
    query: PROJECTS,
  });
  return addApolloState(apolloClient, { props: {} });
}

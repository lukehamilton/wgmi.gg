import Head from "next/head";
import List from "../components/list";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>wgmi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 py-8">
        <div className="mb-4 flex flex-row">
          <p className="text-4xl font-serif">
            wgmi<span className="text-4xl text-gray-300">.gg</span>
          </p>
          <p className="text-sm text-gray-500 self-end mb-1 ml-2">
            official links for projects
          </p>
        </div>

        <List />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
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

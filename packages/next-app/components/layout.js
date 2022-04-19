import Head from "next/head";
import nightwind from "nightwind/helper";

import Header from "./Header";
import SignMessage from "./SignMessage";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 py-2">
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
        `
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      <Header />
      <div className="flex w-full justify-center">
        <SignMessage />
      </div>

      <main className="flex flex-col w-full sm:max-w-4xl mx-auto flex-1 p-4 sm:px-20 sm:py-8">
        {children}
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
};

export default Layout;

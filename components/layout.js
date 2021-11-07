import Link from "next/link";
import Head from "next/head";
import nightwind from "nightwind/helper";
import ThemeToggle from "./theme-toggle";

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
        `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>

      <main className="flex flex-col w-full sm:max-w-4xl mx-auto flex-1 p-4 sm:px-20 sm:py-8">
        <div className="mb-8 flex flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row">
            <Link passHref href="/">
              <a className="text-4xl hover:text-indigo-500 font-serif">
                wgmi
                <span className="text-4xl text-gray-300">.gg</span>
              </a>
            </Link>
            <p className="text-sm text-gray-500 self-end mb-1 sm:ml-2">
              official links for projects
            </p>
          </div>
          <div className="flex flex-row items-center">
            <ThemeToggle size="h-7" />
            <a
              href="https://airtable.com/shrnnT4MVlDMaRO4I"
              target="_blank"
              className="ml-4 text-sm text-gray-500 hover:text-purple-500 cursor-pointer"
            >
              send feedback
            </a>
          </div>
        </div>
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

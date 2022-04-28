import Layout from "../../components/layout";
import LinkInput, { DEFAULT_LINKS } from "components/LinkInput";
import { useRouter } from "next/router";

export default function NewProject() {
  console.log("DEFAULT_LINKS", DEFAULT_LINKS);
  const router = useRouter();
  return (
    <Layout>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              {/* <h2 className="sm:text-2xl font-bold leading-7 text-gray-900 text-3xl sm:truncate">
                Add a project
              </h2> */}
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Tell us more about this project
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We’ll need its name and links.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="grid grid-cols-1 gap-y-6">
                  <div className="sm:col-span-1">
                    {" "}
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  {/* <div className="sm:col-span-1">
                    {" "}
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Slug
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      http://verifiedlinks.xyz/slug
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Links
              </h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {DEFAULT_LINKS.map(type => (
                <LinkInput type={type} className="sm:col-span-4" />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex justify-start">
            <button
              onClick={() => router.back()}
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

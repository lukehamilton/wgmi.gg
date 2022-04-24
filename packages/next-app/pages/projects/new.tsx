import Layout from "../../components/layout";

export default function NewProject() {
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
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    workcation.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <legend className="text-base font-medium text-gray-900">
                  By Email
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Comments
                      </label>
                      <p className="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-700"
                      >
                        Candidates
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Offers
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Push Notifications
                  </legend>
                  <p className="text-sm text-gray-500">
                    These are delivered via SMS to your mobile phone.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-email"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
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

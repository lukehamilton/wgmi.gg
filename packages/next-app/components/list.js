import { useState } from "react";
import { PROJECTS } from "../data/queries";
import { useQuery } from "@apollo/client";
import Card from "./card";

const List = () => {
  const [query, setQuery] = useState("");
  const { loading, error, data, fetchMore } = useQuery(PROJECTS);
  const items = data
    ? data.projects.filter((i) =>
        i.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  return (
    <>
      <div class="min-w-0">
        <div class="flex items-center mb-8 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
          <div class="w-full">
            <label for="search" class="sr-only">
              Search
            </label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class="block w-full bg-white border text-gray-900 border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                placeholder="Search"
                type="search"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:max-w-3xl mx-auto">
        {data && (
          <>
            <ul role="list" className="space-y-8 divide-y divide-gray-200">
              {items.map((project) => (
                <Card project={project} mainPage={true} key={project.slug} />
              ))}
            </ul>
            {items.length === 0 && (
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Didn't find what you're looking for?
                </p>
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfk76cB30oCWbW-E7EdVAxLfELBvyPFBhqtM2mxjVKEhSCmFg/viewform?usp=sf_link"
                  className="cursor-pointer text-lg text-gray-900 underline hover:text-indigo-500"
                >
                  Let us know what'd you like to see 😀
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default List;

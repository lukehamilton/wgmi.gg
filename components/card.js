import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBrowser,
  faShip,
  faExternalLink,
  faCode,
  faExchange,
  faMapMarker,
  faVoteYea,
  faWallet,
  faUserFriends,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faTwitter,
  faDiscord,
  faMedium,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  { key: "website", icon: faBrowser, name: "Website" },
  { key: "twitter", icon: faTwitter, name: "Twitter" },
  { key: "discord", icon: faDiscord, name: "Discord" },
  { key: "opensea", icon: faShip, name: "OpenSea" },
];

const icons = {
  medium: faMedium,
  opensea: faShip,
  instagram: faInstagram,
  contract: faCode,
  dex: faExchange,
  sandbox: faMapMarker,
  telegram: faTelegram,
  snapshot: faVoteYea,
  wallet: faWallet,
  team: faUserFriends,
};

export default function Card({ project, mainPage = false }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="w-full flex flex-row items-center pb-6">
        <div className="w-full flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="w-full">
            <img
              className="h-32 w-full object-cover lg:h-48"
              src={`/images/banners/${project.slug}.png`}
              alt=""
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="-mt-12 sm:-mt-10 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img
                    className="h-16 w-16 rounded-full ring-4 ring-white sm:h-16 sm:w-16"
                    src={`/images/projects/${project.slug}.png`}
                    alt=""
                  />
                </div>
                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                    {mainPage ? (
                      <Link passHref href={`/projects/${project.slug}`}>
                        <a className="text-2xl font-bold text-gray-900 hover:text-indigo-500 truncate">
                          {project.name}
                        </a>
                      </Link>
                    ) : (
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {project.name}
                      </h1>
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
                {mainPage ? (
                  <Link passHref href={`/projects/${project.slug}`}>
                    <a className="text-2xl font-bold text-gray-900 hover:text-indigo-500 truncate">
                      {project.name}
                    </a>
                  </Link>
                ) : (
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {project.name}
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          {links.map((link) => {
            if (project[link.key]) {
              return (
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="flex items-center text-sm font-medium text-gray-500">
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="mr-2 h-4 w-4 flex-shrink-0"
                    />
                    {link.name}
                  </dt>
                  <dd className="mt-1  sm:mt-0 sm:col-span-2 break-normal">
                    <a
                      href={project[link.key]}
                      target="_blank"
                      className="cursor-pointer text-sm text-gray-900 hover:text-indigo-500"
                    >
                      {project[link.key]}
                    </a>
                  </dd>
                </div>
              );
            }
          })}
          {Object.keys(project.metadata).map((key) => {
            if (key === "links") {
              return (
                <>
                  {project.metadata.links.map((link) => (
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="flex items-center text-sm font-medium text-gray-500">
                        <FontAwesomeIcon
                          icon={
                            icons.hasOwnProperty(link.type)
                              ? icons[link.type]
                              : faExternalLink
                          }
                          className="mr-2 h-4 w-4 flex-shrink-0"
                        />
                        {link.name}
                      </dt>
                      <dd className="mt-1  sm:mt-0 sm:col-span-2 break-all">
                        <a
                          href={link.value}
                          target="_blank"
                          className="cursor-pointer  text-sm text-gray-900 hover:text-indigo-500"
                        >
                          {link.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                </>
              );
            }
          })}
        </dl>
      </div>
    </div>
  );
}

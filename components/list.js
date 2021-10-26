import { useQuery } from "@apollo/client";
import { PROJECTS } from "../data/queries";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrowser, faShip } from "@fortawesome/pro-regular-svg-icons";
import {
  faTwitter,
  faDiscord,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  { key: "website", icon: faBrowser },
  { key: "twitter", icon: faTwitter },
  { key: "discord", icon: faDiscord },
  { key: "opensea", icon: faShip },
];

const icons = {
  medium: faMedium,
  opensea: faShip,
  instagram: faInstagram,
};

const List = () => {
  const { loading, error, data, fetchMore } = useQuery(PROJECTS);
  return (
    <div className="overflow-hidden sm:rounded-md">
      {data && (
        <ul role="list">
          {data.projects.map((p) => (
            <li className="text-left mb-4">
              <div className="flex flex-row mb-2">
                <img
                  src={`images/projects/${p.slug}.png`}
                  className="h-8 w-8 mr-2"
                />
                <h4 className="text-2xl">{p.name}</h4>
              </div>
              <ul className="">
                {links.map((link) => (
                  <li>
                    <a
                      target="_blank"
                      className="group relative inline-flex items-center text-sm font-medium rounded-md text-gray-700  hover:text-purple-500 focus:outline-none"
                      href={p[link.key]}
                    >
                      <FontAwesomeIcon icon={link.icon} className="mr-2" />
                      <span>{p[link.key]}</span>
                    </a>
                  </li>
                ))}
                {Object.keys(p.metadata).map((key) => (
                  <li>
                    <a
                      target="_blank"
                      className="group relative inline-flex items-center text-sm font-medium rounded-md text-gray-700  hover:text-purple-500 focus:outline-none"
                      href={p.metadata[key]}
                    >
                      {icons.hasOwnProperty(key) ? (
                        <FontAwesomeIcon icon={icons[key]} className="mr-2" />
                      ) : (
                        <span>{key.replace(/_/g, " ")} - </span>
                      )}
                      <span>{p.metadata[key]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;

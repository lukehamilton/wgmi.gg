import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBrowser,
  faShip,
  faExternalLink,
  faCode,
} from "@fortawesome/pro-regular-svg-icons";
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
  contract: faCode,
};

const ListItem = ({ project, mainPage = false }) => {
  return (
    <>
      <div className="flex flex-row mb-2">
        <img
          src={`/images/projects/${project.slug}.png`}
          className="h-8 w-8 mr-2"
        />
        {mainPage ? (
          <Link passHref href={`/projects/${project.slug}`}>
            <a className="text-2xl hover:text-purple-500 cursor-pointer">
              {project.name}
            </a>
          </Link>
        ) : (
          <h4 className="text-2xl">{project.name}</h4>
        )}
      </div>
      <ul className="">
        {links.map((link) => {
          if (project[link.key]) {
            return (
              <li>
                <a
                  target="_blank"
                  className="group relative inline-flex items-center text-sm font-medium rounded-md text-gray-700  hover:text-purple-500 focus:outline-none"
                  href={project[link.key]}
                >
                  <FontAwesomeIcon icon={link.icon} className="mr-2 h-4 w-4" />
                  <span>{project[link.key]}</span>
                </a>
              </li>
            );
          }
        })}
        {Object.keys(project.metadata).map((key) => {
          if (key === "links") {
            return (
              <>
                {project.metadata.links.map((link) => (
                  <li>
                    <a
                      target="_blank"
                      className="group relative inline-flex items-center text-sm font-medium rounded-md text-gray-700  hover:text-purple-500 focus:outline-none"
                      href={link.value}
                    >
                      <FontAwesomeIcon
                        icon={
                          icons.hasOwnProperty(link.type)
                            ? icons[link.type]
                            : faExternalLink
                        }
                        className="mr-2 h-4 w-4"
                      />
                      {link.value}
                      {link.name && (
                        <span className="text-sm font-medium">{`(${link.name})`}</span>
                      )}
                    </a>
                  </li>
                ))}
              </>
            );
          }
        })}
      </ul>
    </>
  );
};

export default ListItem;

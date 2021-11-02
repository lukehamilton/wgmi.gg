import { PROJECTS } from "../data/queries";
import { useQuery } from "@apollo/client";
import ListItem from "./list-item";

const List = () => {
  const { loading, error, data, fetchMore } = useQuery(PROJECTS);
  return (
    <div className="overflow-hidden sm:rounded-md">
      {data && (
        <ul role="list">
          {data.projects.map((project) => (
            <li className="text-left mb-4">
              <ListItem project={project} mainPage={true} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;

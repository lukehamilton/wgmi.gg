import { PROJECTS } from "../data/queries";
import { useQuery } from "@apollo/client";
import ListItem from "./list-item";
import Card from "./card";

const List = () => {
  const { loading, error, data, fetchMore } = useQuery(PROJECTS);
  return (
    <div className="overflow-hidden sm:rounded-md">
      {data && (
        <ul role="list" className="space-y-8">
          {data.projects.map((project) => (
            <Card project={project} mainPage={true} key={project.slug} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;

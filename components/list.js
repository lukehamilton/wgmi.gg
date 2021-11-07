import { PROJECTS } from "../data/queries";
import { useQuery } from "@apollo/client";
import ListItem from "./list-item";
import Card from "./card";

const List = () => {
  const { loading, error, data, fetchMore } = useQuery(PROJECTS);
  return (
    <div className="w-full sm:max-w-3xl mx-auto">
      {data && (
        <ul role="list" className="space-y-8 divide-y divide-gray-200">
          {data.projects.map((project) => (
            <Card project={project} mainPage={true} key={project.slug} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;

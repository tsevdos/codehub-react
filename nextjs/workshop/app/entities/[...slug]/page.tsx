import { fetchEntity } from "../../_helpers/fetchEntity";
// import UserCard from "@/components/UserCard";
// import type { User } from "@/types/Users";

type EntitiesProps = { params: { slug: string[] } };

// SSR rendering
const Entity = async ({ params }: EntitiesProps) => {
  const { slug } = params;
  const entityParams = { entity: slug[0], id: slug[1] };
  const apiEntity = await fetchEntity(entityParams);
  //   console.log(apiEntity);

  return (
    <>
      <h1 className="text-4xl mb-4">Users</h1>
      <code className="text-xl my-4">
        <pre>{JSON.stringify(apiEntity, null, 2)}</pre>
      </code>
      {/* <UserCard {...(apiEntity as User)} />; */}
    </>
  );
};

export default Entity;

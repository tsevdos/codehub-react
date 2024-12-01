type fetchEntityArgs = {
  entity: string;
  id: string;
};

export const fetchEntity = async ({ entity, id }: fetchEntityArgs): Promise<unknown> => {
  const res = await fetch(`https://swapi.dev/api/${entity}/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch users data");
  }

  return res.json();
};

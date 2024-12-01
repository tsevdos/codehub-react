export type User = {
  name: string;
  height: string; // Considering height is a string in the response, even though it represents a number.
  mass: string; // Same for mass.
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string; // URL to the homeworld.
  films: string[]; // Array of URLs to films.
  species: string[]; // Array of URLs to species.
  vehicles: string[]; // Array of URLs to vehicles.
  starships: string[]; // Array of URLs to starships.
  created: string; // ISO date string.
  edited: string; // ISO date string.
  url: string; // URL to the character's details.
};

export type UsersResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: User[];
};

import { create } from "zustand";

const useUser = create(() => ({
  JWT: "1234567890",
  username: "tsevdos",
  name: "John Tsevdos",
  admin: true,
  imgPath: "https://avatars1.githubusercontent.com/u/175707",
}));

export default useUser;

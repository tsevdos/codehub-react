import { jest } from "@jest/globals";
import User from "./User";
import UsersService from "../api/usersService";

describe("User", () => {
  let user;

  beforeEach(() => {
    user = new User(1);
  });

  afterEach(() => {
    user = null;
  });

  it("creates a user with the correct defaults properties", () => {
    expect(user.id).toBe(1);
    expect(user.profile).toBe(null);
    expect(user.posts).toBe(null);
  });

  it("correctly returns useID", () => {
    expect(user.getID()).toEqual(1);
  });

  it("correctly fetches and sets user profile", async () => {
    UsersService.fetchUserById = jest.fn().mockResolvedValue({
      id: 1,
      JWT: "1234567890",
      username: "tsevdos",
      name: "John Tsevdos",
      admin: true,
      imgPath: "https://avatars1.githubusercontent.com/u/175707",
    });

    await user.fetchUserProfile();

    expect(user.getProfile()).toEqual({
      JWT: "1234567890",
      admin: true,
      id: 1,
      imgPath: "https://avatars1.githubusercontent.com/u/175707",
      name: "John Tsevdos",
      username: "tsevdos",
    });
  });

  it("correctly fetches and sets user posts", async () => {
    UsersService.fetchUserById = jest.fn().mockResolvedValue({
      id: 1,
      JWT: "1234567890",
      username: "tsevdos",
      name: "John Tsevdos",
      admin: true,
      imgPath: "https://avatars1.githubusercontent.com/u/175707",
    });
    UsersService.fetchUserPosts = jest.fn().mockResolvedValue([
      {
        id: 1,
        user: "tsevdos",
        title: "React is great!",
        body: "Body text goes here",
        imgPath: "https://picsum.photos/800/300.jpg",
      },
      {
        id: 2,
        user: "tsevdos",
        title: "Next.js for SSR",
        body: "Body text goes here",
        imgPath: "https://picsum.photos/800/300.jpg",
      },
    ]);

    await user.fetchUserProfile();
    await user.fetchPosts();

    expect(user.getPosts()).toEqual([
      {
        id: 1,
        user: "tsevdos",
        title: "React is great!",
        body: "Body text goes here",
        imgPath: "https://picsum.photos/800/300.jpg",
      },
      {
        id: 2,
        user: "tsevdos",
        title: "Next.js for SSR",
        body: "Body text goes here",
        imgPath: "https://picsum.photos/800/300.jpg",
      },
    ]);
  });
});

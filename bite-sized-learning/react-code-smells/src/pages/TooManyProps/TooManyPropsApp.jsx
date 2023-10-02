import Post from "./Post";

const TooManyPropsApp = () => {
  return (
    <div>
      <h2>My Post</h2>
      <hr />
      <Post
        title="Learn React"
        date="1 / 10 / 2023"
        categories={["react", "JavaScript"]}
        tags={["react", "js", "state", "refactoring"]}
        imageUrl="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F2EP14mWkbx9sq03nWnRSGT%2Ff1d22d88bb5dde030275f9520c0f2e92%2FReact_YT_Thumbnail.png&w=1920&q=75&dpl=dpl_6mzijDzWQXRCmAJvwaFfyMYcMLqZ"
        body="Blog post body goes here..."
        author={{
          name: "John Tsevdos",
          imageUrl: "https://avatars1.githubusercontent.com/u/175707",
          bio: "Don't forget to visit https://tsevdos.me!",
        }}
      />
    </div>
  );
};

export default TooManyPropsApp;

const PostBody = ({ author }) => {
  const { imageUrl, name, bio } = author;

  return (
    <footer>
      <h2>Author</h2>
      <hr />
      <div>
        <img src={imageUrl} height="100px" />
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </footer>
  );
};

export default PostBody;

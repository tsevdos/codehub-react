const PostHeader = ({ title, date, categories, imageUrl }) => {
  return (
    <header>
      <h2>{title}</h2>
      <h6>
        {categories.map((category) => `${category} - `)} {date}
      </h6>
      <hr />
      <img src={imageUrl} height="200px" />
      <hr />
    </header>
  );
};

export default PostHeader;

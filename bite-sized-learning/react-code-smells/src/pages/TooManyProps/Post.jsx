const Post = ({ title, date, categories, tags, imageUrl, body, author }) => {
  return (
    <div>
      <header>
        <h2>{title}</h2>
        <h6>
          {categories.map((category) => `${category} - `)} {date}
        </h6>
        <hr />
        <img src={imageUrl} height="200px" />
        <hr />
      </header>
      <article>
        <p>{body}</p>
        <p>Tags: {tags.map((tag) => `${tag}, `)}</p>
      </article>
      <footer>
        <h2>Author</h2>
        <hr />
        <div>
          <img src={author.imageUrl} height="100px" />
          <h3>{author.name}</h3>
          <p>{author.bio}</p>
        </div>
      </footer>
    </div>
  );
};

export default Post;

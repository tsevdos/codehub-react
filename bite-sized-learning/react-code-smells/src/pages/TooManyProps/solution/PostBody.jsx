const PostBody = ({ body, tags }) => {
  return (
    <article>
      <p>{body}</p>
      <p>Tags: {tags.map((tag) => `${tag}, `)}</p>
    </article>
  );
};

export default PostBody;

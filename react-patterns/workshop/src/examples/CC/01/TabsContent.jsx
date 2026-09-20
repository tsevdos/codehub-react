const TabsContent = ({ index, title, content, isVisible }) => {
  return (
    <article id={`content-${index}`} className={`tab-content ${isVisible ? "is-visible" : ""}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default TabsContent;

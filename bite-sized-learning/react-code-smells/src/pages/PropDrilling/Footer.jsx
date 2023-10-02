const Footer = ({ user }) => {
  const { name } = user;

  return (
    <footer style={{ border: "2px solid green" }}>
      <p>My footer</p>
      <p>Legal terms for {name}</p>
    </footer>
  );
};

export default Footer;

import useUser from "./useUser";

const Footer = () => {
  const { name } = useUser();

  return (
    <footer style={{ border: "2px solid green" }}>
      <p>My footer</p>
      <p>Legal terms for {name}</p>
    </footer>
  );
};

export default Footer;

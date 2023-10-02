import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const PropDrillingApp = () => {
  const user = {
    JWT: "1234567890",
    username: "tsevdos",
    name: "John Tsevdos",
    admin: true,
    imgPath: "https://avatars1.githubusercontent.com/u/175707",
  };

  return (
    <div>
      <Header user={user} />
      <div style={{ display: "flex", border: "2px solid blue" }}>
        <Sidebar user={user} />
        <main> My main content</main>
      </div>
      <Footer user={user} />
    </div>
  );
};

export default PropDrillingApp;

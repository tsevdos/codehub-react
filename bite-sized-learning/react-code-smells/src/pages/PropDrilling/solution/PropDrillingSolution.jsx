import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const PropDrillingApp = () => (
  <div>
    <Header />
    <div style={{ display: "flex", border: "2px solid blue" }}>
      <Sidebar />
      <main> My main content</main>
    </div>
    <Footer />
  </div>
);

export default PropDrillingApp;

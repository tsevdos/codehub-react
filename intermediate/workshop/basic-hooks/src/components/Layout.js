import { Outlet } from "react-router-dom";
import { Header, Sidebar, Footer } from "./";

const Layout = () => (
  <>
    <Header />
    <Sidebar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;

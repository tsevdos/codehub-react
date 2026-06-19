import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { UserProvider, User } from "./UserContext";
import { AppConfigProvider, useAppConfig } from "./AppConfigContext";
import "./App.css";

export default function App() {
  const user: User = {
    JWT: "1234567890",
    username: "tsevdos",
    name: "John Tsevdos",
    admin: true,
    imgPath: "https://avatars1.githubusercontent.com/u/175707",
  };

  return (
    <AppConfigProvider>
      <UserProvider user={user}>
        <AppContent />
      </UserProvider>
    </AppConfigProvider>
  );
};

function AppContent() {
  const { theme, sidebarCollapsed } = useAppConfig();

  return (
    <div className={`app-layout ${theme}`}>
      <Header />
      <div className="app-main-container">
        {!sidebarCollapsed && <Sidebar />}
        <main className="app-main-content">My main content</main>
      </div>
      <Footer />
    </div>
  );
}

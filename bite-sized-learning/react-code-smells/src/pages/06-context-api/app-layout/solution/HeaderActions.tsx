import { useAppConfig } from "./AppConfigContext";
import Profile from "./Profile";

export default function HeaderActions() {
    const { theme, toggleTheme, toggleSidebar } = useAppConfig();

    return (
        <div className="app-header-actions">
            <button
                className="app-toggle-button"
                onClick={toggleSidebar}
                title="Toggle Sidebar"
            >
                ☰
            </button>
            <button
                className="app-toggle-button"
                onClick={toggleTheme}
                title="Toggle Theme"
            >
                {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <Profile />
        </div>
    );
}

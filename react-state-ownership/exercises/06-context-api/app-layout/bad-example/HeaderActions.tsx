import { User, Theme } from "./App";
import Profile from "./Profile";

type HeaderActionsProps = {
    user: User;
    theme: Theme;
    toggleTheme: () => void;
    toggleSidebar: () => void;
};

export default function HeaderActions({
    user,
    theme,
    toggleTheme,
    toggleSidebar,
}: HeaderActionsProps) {
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
            <Profile user={user} />
        </div>
    );
}

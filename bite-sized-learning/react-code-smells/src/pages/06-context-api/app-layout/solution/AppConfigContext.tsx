import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

type AppConfig = {
    // Static configuration
    applicationTitle: string;
    version: string;
    companyName: string;
    // Dynamic settings
    theme: Theme;
    sidebarCollapsed: boolean;
    // Setter functions
    toggleTheme: () => void;
    toggleSidebar: () => void;
};

const AppConfigContext = createContext<AppConfig | null>(null);

type AppConfigProviderProps = {
    children: ReactNode;
};

export function AppConfigProvider({ children }: AppConfigProviderProps) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const toggleSidebar = () => {
        setSidebarCollapsed((prev) => !prev);
    };

    const config: AppConfig = {
        // Static configuration
        applicationTitle: "DeliciousApp",
        version: "1.0.0",
        companyName: "Philomath Academy",
        // Dynamic settings
        theme,
        sidebarCollapsed,
        // Actions
        toggleTheme,
        toggleSidebar,
    };

    return (
        <AppConfigContext.Provider value={config}>
            {children}
        </AppConfigContext.Provider>
    );
}

export function useAppConfig() {
    const context = useContext(AppConfigContext);
    if (context === null) {
        throw new Error("useAppConfig must be used within an AppConfigProvider");
    }

    return context;
}

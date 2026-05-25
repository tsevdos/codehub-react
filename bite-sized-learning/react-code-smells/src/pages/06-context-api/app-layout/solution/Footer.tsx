import { useUser } from "./UserContext";
import { useAppConfig } from "./AppConfigContext";

export default function Footer() {
  const { name } = useUser();
  const { applicationTitle, version, companyName } = useAppConfig();

  return (
    <footer className="app-footer">
      <p>{applicationTitle} - v{version}</p>
      <p>&copy; 2026 {companyName}. All rights reserved.</p>
      <p>Legal terms for {name}</p>
    </footer>
  );
};

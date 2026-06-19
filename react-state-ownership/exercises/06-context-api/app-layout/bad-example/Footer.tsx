import { User } from "./App";

type FooterProps = {
  user: User;
  applicationTitle: string;
  version: string;
  companyName: string;
};

export default function Footer({
  user,
  applicationTitle,
  version,
  companyName,
}: FooterProps) {
  const { name } = user;

  return (
    <footer className="app-footer">
      <p>{applicationTitle} - v{version}</p>
      <p>&copy; 2026 {companyName}. All rights reserved.</p>
      <p>Legal terms for {name}</p>
    </footer>
  );
};

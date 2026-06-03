import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { routes } from "./routes";

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath: string) => {
    window.history.pushState(null, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0 });
  };

  if (path === routes.privacyPolicy) {
    return <PrivacyPolicyPage onBack={() => navigate(routes.home)} />;
  }

  return <HomePage onNavigatePrivacyPolicy={() => navigate(routes.privacyPolicy)} />;
}

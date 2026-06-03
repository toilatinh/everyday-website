import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { routes } from "./routes";

const getRoute = () => window.location.hash.replace(/^#/, "") || routes.home;

export default function App() {
  const [path, setPath] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => setPath(getRoute());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (nextPath: string) => {
    window.location.hash = nextPath;
    setPath(nextPath);
    window.scrollTo({ top: 0 });
  };

  if (path === routes.privacyPolicy) {
    return <PrivacyPolicyPage onBack={() => navigate(routes.home)} />;
  }

  return <HomePage onNavigatePrivacyPolicy={() => navigate(routes.privacyPolicy)} />;
}

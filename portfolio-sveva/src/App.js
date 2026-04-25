import { useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import WelcomePage from "./pages/WelcomePage";
import InlineContacts from "./components/InlineContacts";

function App() {
  const [projects, setProjects] = useState([]);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const contacts = [
    {
      label: "Phone",
      value: "+39 366 185 4456",
      href: "tel:+393661854456",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M6.6 3.8h3.1l1.2 4.2-1.8 1.8a14 14 0 0 0 5.1 5.1l1.8-1.8 4.2 1.2v3.1a1.7 1.7 0 0 1-1.9 1.7A16.5 16.5 0 0 1 4.9 5.7 1.7 1.7 0 0 1 6.6 3.8Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "sveva.contestabile@email.com",
      href: "mailto:sveva.contestabile@email.com",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M4 6.5h16v11H4z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m5 8 7 5 7-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "/in/svevacontestabile",
      href: "https://www.linkedin.com/in/svevacontestabile",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M7 9.5V18M7 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5 11.5v-4.7c0-1.7.9-2.8 2.4-2.8 1.4 0 2.1 1 2.1 2.8V18M12 12.2c.5-1 1.5-1.7 3-1.7 2.2 0 4 1.5 4 4.7V18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (path) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (currentPath === "/projects") {
      return <ProjectsPage projects={projects} />;
    }

    if (currentPath === "/about") {
      return <AboutPage />;
    }

    return <WelcomePage projects={projects} onNavigate={navigateTo} />;
  };

  return (
    <div className="container">
      <TopBar currentPath={currentPath} onNavigate={navigateTo} />
      {renderPage()}
      <InlineContacts
        title="Contacts"
        contacts={contacts}
      />
    </div>
  );
}

export default App;

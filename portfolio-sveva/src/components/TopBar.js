import "./TopBar.css";

function TopBar({ currentPath, onNavigate }) {
  const links = [
    { label: "Welcome", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About me", path: "/about" },
  ];

  return (
    <nav className="topbar" aria-label="Primary navigation">
      {links.map((link) => {
        const isActive = currentPath === link.path;

        return (
          <a
            key={link.path}
            href={link.path}
            className={`topbar__link${isActive ? " topbar__link--active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(link.path);
            }}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

export default TopBar;

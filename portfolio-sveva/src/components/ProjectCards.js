import "./ProjectCards.css";

function ProjectCards({ projects = [] }) {
  return (
    <div className="project-cards">
      {projects.map((project, index) => (
        <a
          key={`${project.title}-${index}`}
          className="project-card"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Apri il progetto ${project.title}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="project-card__image"
            />
          ) : (
            <div className="project-card__image project-card__image--placeholder" />
          )}

          <div className="project-card__content">
            <h3>{project.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ProjectCards;

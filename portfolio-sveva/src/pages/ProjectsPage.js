import ProjectCards from "../components/ProjectCards";

function ProjectsPage({ projects }) {
  return (
    <section className="page page--projects">
      <div className="section-heading">
        <span>Selected Works</span>
        <h2>Projects</h2>
      </div>

      <ProjectCards projects={projects} />
    </section>
  );
}

export default ProjectsPage;

import PortfolioHeader from "../components/PortfolioHeader";
import ProjectCards from "../components/ProjectCards";

function WelcomePage({ projects, onNavigate }) {
  return (
    <section className="page page--welcome">
      <PortfolioHeader
        title="Sveva Contestabile"
        subtitle="Fashion & luxury business student"
      />

      <div className="welcome-projects">
        <div className="section-heading">
          <span>Selected Works</span>
          <h2>Projects</h2>
        </div>

        <ProjectCards projects={projects} />

        <div className="welcome-projects__actions">
          <button
            type="button"
            className="welcome-projects__button"
            onClick={() => onNavigate("/projects")}
          >
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;

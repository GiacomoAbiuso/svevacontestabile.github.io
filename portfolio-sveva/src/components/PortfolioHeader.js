import "./PortfolioHeader.css";
import { useState } from "react";

function PortfolioHeader({
  title = "Portfolio UX/UI",
  subtitle = "Progetti di design focalizzati sull'esperienza utente",
  eyebrow = "Product Designer",
}) {
  const primaryProfileImage = `${process.env.PUBLIC_URL}/profile_ohiti.jpg`;
  const fallbackProfileImage = `${process.env.PUBLIC_URL}/profile_photo.jpg`;
  const [profileImage, setProfileImage] = useState(primaryProfileImage);

  return (
    <header className="portfolio-header">
      <div className="portfolio-header__content">
        <div className="portfolio-header__profile-wrap">
          <img
            src={profileImage}
            alt="Ritratto di Sveva Contestabile"
            className="portfolio-header__profile"
            onError={() => {
              if (profileImage !== fallbackProfileImage) {
                setProfileImage(fallbackProfileImage);
              }
            }}
          />
        </div>

        <div className="portfolio-header__text">
          <span className="portfolio-header__eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </header>
  );
}

export default PortfolioHeader;

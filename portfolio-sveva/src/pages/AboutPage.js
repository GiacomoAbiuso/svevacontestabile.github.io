import "./AboutPage.css";
import { useState } from "react";

function AboutPage() {
  const primaryProfileImage = `${process.env.PUBLIC_URL}/profile_ohiti.jpg`;
  const fallbackProfileImage = `${process.env.PUBLIC_URL}/profile_photo.jpg`;
  const [profileImage, setProfileImage] = useState(primaryProfileImage);

  return (
    <section className="page page--about">
      <div className="about-page">
        <div className="about-layout">
          <div className="about-main">
            <div className="about-top">
              <div className="about-top__content">
                <span className="about-top__eyebrow">Profile</span>
                <h1>About me</h1>
                <p className="about-top__intro">
                  Studentessa di Fashion & Luxury Business con un interesse
                  forte per estetica, brand identity e visual storytelling.
                </p>
                <div className="about-top__facts">
                  <span>Milan based</span>
                  <span>Fashion & luxury business student</span>
                  <span>Available for collaborations</span>
                </div>
              </div>

              <div className="about-top__image-wrap">
                <img
                  src={profileImage}
                  alt="Ritratto di Sveva Contestabile"
                  className="about-top__image"
                  onError={() => {
                    if (profileImage !== fallbackProfileImage) {
                      setProfileImage(fallbackProfileImage);
                    }
                  }}
                />
              </div>
            </div>

            <div className="about-flow">
              <div className="about-block">
                <h2>Short bio</h2>
                <p className="about-block__lead">
                  Mi interessa costruire progetti capaci di trasmettere
                  identita', desiderabilita' e cura del dettaglio, con un
                  linguaggio visivo pulito ma riconoscibile.
                </p>
                <p>
                  In questo portfolio racconto un percorso ancora in
                  evoluzione, fatto di studio, curiosita' e ricerca: dagli
                  immaginari del lusso alla presentazione di concept, brand e
                  progetti digitali pensati per comunicare in modo chiaro e
                  raffinato.
                </p>
                <p>
                  Mi piace lavorare su materiali visivi, presentazioni e
                  narrazioni che abbiano una direzione precisa, un tono
                  coerente e una forte sensibilita' estetica.
                </p>
              </div>

              <div className="about-block">
                <h2>My focus and skills</h2>
                <div className="about-focus">
                  <div className="about-focus__column">
                    <h3>My focus</h3>
                    <ul>
                      <li>Luxury and fashion brand storytelling</li>
                      <li>Visual research and aesthetic direction</li>
                      <li>Editorial presentation of projects and concepts</li>
                      <li>Clean communication with strong visual coherence</li>
                    </ul>
                  </div>

                  <div className="about-focus__column">
                    <h3>Skills</h3>
                    <div className="about-tags">
                      <span className="about-tag">Brand sensitivity</span>
                      <span className="about-tag">Visual storytelling</span>
                      <span className="about-tag">Creative research</span>
                      <span className="about-tag">Trend analysis</span>
                      <span className="about-tag">Presentation design</span>
                      <span className="about-tag">Luxury culture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

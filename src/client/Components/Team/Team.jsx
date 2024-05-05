import React from "react";
import "./Team.css";
import staff1 from "/assets/team/staff1.jpeg";
import staff2 from "/assets/team/staff2.jpeg";
import staff3 from "/assets/team/staff3.jpeg";
import staff4 from "/assets/team/staff4.jpeg";
import staff5 from "/assets/team/staff5.jpeg";
import staff6 from "/assets/team/staff6.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../HeaderComponent/Logo";
import TeamHeader from "./TeamHeader";

function Team() {
  return (
    <section className="team_container">
      <TeamHeader />
      <div className="team_box">
        <div className="our_team">
          <p>
            We're dedicated to tirelessly bringing you the essence of our
            vibrant city. Meet the faces behind the scenes:
          </p>
        </div>

        <div>
          <h3
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontFamily: "Russo One",
              color: "rgba(5, 61, 110, 0.827)",
              textShadow: " 2px 1px white",
            }}
          >
            Our Team
          </h3>
          <div className="teams">
            <figure>
              <img src={staff1} alt="Teniola Jacob" />
              <figcaption>Teniola Jacob</figcaption>
              <p className="team-member-description">
                With a passion for exploring every nook and cranny of Lagos,
                John is your go-to guide for discovering hidden gems and local
                treasures.
              </p>

              <div className="social_media">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </figure>

            <figure>
              <img src={staff2} alt="Teniola Jacob" />
              <figcaption>Jane Smith</figcaption>
              <p className="team-member-description">
                With a deep understanding of Lagos's history and culture, Jane
                brings the past to life, making your tour an unforgettable
                journey through time.
              </p>
              <div className="social_media">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>{" "}
            </figure>
            <figure>
              <img src={staff5} alt="Teniola Jacob" />
              <figcaption>Mike Johnson</figcaption>
              <p className="team-member-description">
                Mike's adventurous spirit and knowledge of Lagos's outdoor
                activities make him the perfect guide for thrill-seekers.
              </p>
              <div className="social_media">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>{" "}
            </figure>
            <figure>
              <img src={staff4} alt="Teniola Jacob" />
              <figcaption>Sanusi Abdullahi</figcaption>
              <p className="team-member-description">
                Aisha's deep appreciation for Lagos's diverse cultures and
                traditions enriches every tour, providing a unique insight into
                the city's heritage.
              </p>
              <div className="social_media">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>{" "}
            </figure>
            <figure>
              <img src={staff3} alt="Teniola Jacob" />
              <figcaption>Sara Adeogun</figcaption>
              <p className="team-member-description">
                Sara's keen eye for capturing the beauty of Lagos through her
                lens adds an extra dimension to your tour, creating lasting
                memories to cherish.
              </p>
              <div className="social_media">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>{" "}
            </figure>
          </div>
        </div>
      </div>
      <div className="team_footer">
        <div>
          <p>&copy; 2024 ExploreLagos. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Team;

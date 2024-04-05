import React from "react";
import "./Team.css";

import staff1 from '/assets/team/staff1.jpeg'
import staff2 from '/assets/team/staff2.jpeg'
import staff3 from '/assets/team/staff3.jpeg'
import staff4 from '/assets/team/staff4.jpeg'
import staff5 from '/assets/team/staff5.jpeg'
import staff6 from '/assets/team/staff6.jpeg'






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
          Our Team, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus fuga assumenda velit voluptates sit, quae reiciendis quo quod
        </div>
        <div className="teams">
          <figure>
            <img src={staff1} alt="Teniola Jacob" />
            <figcaption>Teniola Jacob</figcaption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque officia nemo atque temporibus iste, veniam rem vitae
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
            <figcaption>Teniola Jacob</figcaption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque officia nemo atque temporibus iste, veniam rem vitae
            </p>
            <div className="social_media">This is social media</div>
          </figure>
          <figure>
            <img src={staff3} alt="Teniola Jacob" />
            <figcaption>Teniola Jacob</figcaption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque officia nemo atque temporibus iste, veniam rem vitae
            </p>
            <div className="social_media">This is social media</div>
          </figure>
          <figure>
            <img src={staff4} alt="Teniola Jacob" />
            <figcaption>Teniola Jacob</figcaption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque officia nemo atque temporibus iste, veniam rem vitae
            </p>
            <div className="social_media">This is social media</div>
          </figure>
          <figure>
            <img src={staff5} alt="Teniola Jacob" />
            <figcaption>Teniola Jacob</figcaption>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque officia nemo atque temporibus iste, veniam rem vitae
            </p>
            <div className="social_media">This is social media</div>
          </figure>
        </div>
      </div>
      <div className="team_footer">
        <h3>Join us</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            numquam. Deleniti porro labore ea omnis recusandae distinctio
          </p>
          <p>Learn more</p>
        </div>
      </div>
    </section>
  );
}

export default Team;

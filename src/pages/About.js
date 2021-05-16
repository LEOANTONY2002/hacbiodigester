import React from "react";
import "../App.css";
import icon from "../images/icon.png";

function About() {
  return (
    <div id="pg1" className="pg1">
      <div className="img">
        <img src={icon} alt="HAC" />
      </div>
      <div className="pg1-desc">
        <h2>HAC BIODIGESTOR</h2>
        <p>
          Our company “HAC Bio digester” proves to be a savior by not only
          alleviating the problems of toilet waste disposal but also generates
          wealth out of it. The Sanitation and Waste Management system across
          the country is a stinking mess. Improper drainage disposal,
          inappropriate sewage wastes management and irregular cleaning of
          community toilets are the major areas of concern. Lack of power
          facilities in toilet also minimizes the usage of toilets among
          children and women. Hence cleaner and cost-effective system is the
          need of the hour. HAC Bio digester - Manufacturers and Installers of
          Bio digesters is in the process of developing many units to supply it
          in the market. We manufacture and provide huge range of Bio digester
          to all our customers- HAC bio digester is designed by our expert team
          in the process of architecture, laboratories, and bio-digester. We are
          providing various range of Bio digester, which is easy to install,
          cost-effective and eco-friendly. HAC bio-digester tanks can be made to
          cater any no. of users from small public toilet to huge community
          apartments, temples, malls, institutions etc... Our goal is to ensure
          proper waste management, sanitation & eradication of manual scavenging
          owing to Swatch Bharat Mission.
        </p>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "../App.css";
import c1 from "../images/c1.jpeg";
import c2 from "../images/c2.jpeg";
import c3 from "../images/c3.jpeg";
import c4 from "../images/c4.jpeg";
import c5 from "../images/c5.jpeg";
import c6 from "../images/c6.jpeg";
import c7 from "../images/c7.jpeg";
import c8 from "../images/c8.jpeg";
import ach from "../images/ach.png";

function Achieve() {
  return (
    <div id="pg5" className="pg5">
      <div className="ac-ic">
        <img src={ach} alt="" />
      </div>
      <div className="title5">
        <h2>ACHIEVEMENTS</h2>
      </div>
      <div className="ach">
        <div className="ach-cont">
          <img src={c1} alt="" />
          <p>
            Selected to next level in Tamil Nadu Student Innovators – 2020, TNSI
            2020 Stage III Three Days Bootcamp, to TNSI 2020 Stage IV Final
            Pitch, March 2021{" "}
          </p>
        </div>
        <div className="ach-cont">
          <img src={c2} alt="" />
          <p>
            The only team in Tiruchirappalli to be qualified in the second round
            of National Innovation Contest 2020 among the shortlisted 410 teams
            from 1498 teams all over India, Febuary, 2021{" "}
          </p>
        </div>

        <div className="ach-cont">
          <img src={c3} alt="" />
          <p>
            Won 3rd prize in Start-up Mania 5.0 with the cash award of Rs.10000.
            December, 2020
          </p>
        </div>
        <div className="ach-cont">
          <img src={c4} alt="" />
          <p>
            Finalist in Arambam 6th edition, state level competition conducted
            by Native lead. November, 2020{" "}
          </p>
        </div>
        <div className="ach-cont">
          <img src={c5} alt="" />
          <p>
            Won 1st place in CICSR conducted by Crescent Innovation and
            Incubation Council. March, 2020.{" "}
          </p>
        </div>
        <div className="ach-cont">
          <img src={c6} alt="" />
          <p>
            Successfully crossed two stages in National level competition,
            INNOVATION & ENTREPRENEURSHIP CONCLAVE - I-TEC at Reva University,
            Bangalore. January, 2020
          </p>
        </div>
        <div className="ach-cont">
          <img src={c7} alt="" />
          <p>
            Finalist in Smart India Internal Hackathon and crossed the first
            level in Smart India Hackathon 2019, Sepetember 2019.{" "}
          </p>
        </div>
        <div className="ach-cont">
          <img src={c8} alt="" />
          <p>
            One of the finalist in National level Innovation contest conducted
            by ITM-SIA Business school, Dombivli, Mumbai September, 2019.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achieve;

import React, { useState } from "react";
import "../App.css";
import ema from "../images/ema.png";

function Contact() {
  const [sub, setSub] = useState("");
  const [body, setBody] = useState("");

  const email = (e) => {
    e.preventDefault();
    window.open("mailto:hacbiopoopster@gmail.com");
  };
  const send = (e) => {
    e.preventDefault();
    window.open(`mailto:hacbiopoopster@gmail.com?subject=${sub}&body=${body}`);
  };

  return (
    <div id="pg6" className="pg6">
      <h2>CONTACT US</h2>
      <div className="contact">
        <div className="inp-cont">
          <div className="inps">
            <p>SUBJECT</p>
            <input type="text" onChange={(e) => setSub(e.target.value)} />
          </div>
          <div className="inps">
            <p>BODY</p>
            <textarea
              rows="3"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="inps">
            <button onClick={send}>SEND MAIL</button>
          </div>
        </div>
        <div className="ema" onClick={email}>
          <img src={ema} alt="" />
          <p>hacbiopoopster3@gmail.com</p>
        </div>
      </div>
      <div className="svg">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stop-color="rgba(19.818, 128.727, 46.919, 1)"
                offset="0%"
              ></stop>
              <stop stop-color="rgba(53.566, 255, 11, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,392L26.7,383.8C53.3,376,107,359,160,334.8C213.3,310,267,278,320,261.3C373.3,245,427,245,480,277.7C533.3,310,587,376,640,392C693.3,408,747,376,800,318.5C853.3,261,907,180,960,155.2C1013.3,131,1067,163,1120,187.8C1173.3,212,1227,229,1280,212.3C1333.3,196,1387,147,1440,147C1493.3,147,1547,196,1600,196C1653.3,196,1707,147,1760,179.7C1813.3,212,1867,327,1920,367.5C1973.3,408,2027,376,2080,359.3C2133.3,343,2187,343,2240,318.5C2293.3,294,2347,245,2400,196C2453.3,147,2507,98,2560,65.3C2613.3,33,2667,16,2720,16.3C2773.3,16,2827,33,2880,49C2933.3,65,2987,82,3040,114.3C3093.3,147,3147,196,3200,220.5C3253.3,245,3307,245,3360,204.2C3413.3,163,3467,82,3520,98C3573.3,114,3627,229,3680,261.3C3733.3,294,3787,245,3813,220.5L3840,196L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"
          ></path>
        </svg>
        <div className="founder">
          <div className="f-head">
            <p>INVENTERS</p>
            <p></p>
          </div>
          <div className="f-body">
            <p>Hafila Khairun S</p>
            <p>Alphin Punitha A</p>
            <p>Charithra Iswarya D</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

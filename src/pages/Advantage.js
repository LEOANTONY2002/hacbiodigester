import React from "react";
import "../App.css";
import fue from "../images/fue.png";
import dan from "../images/dan.png";
import sew from "../images/sew.png";
import com from "../images/com.png";

function Advantage() {
  return (
    <div id="pg4" className="pg4">
      <div className="banner">
        <div className="adv">
          <h2>ADVANTAGES</h2>
          <div>
            <img src={fue} alt="" />
            <p>Cheap production cost of fuel</p>
          </div>
          <div>
            <img src={com} alt="" />
            <p>Compost production</p>
          </div>
          <div>
            <img src={sew} alt="" />
            <p> No sewage handling</p>
          </div>
          <div>
            <img src={dan} alt="" />
            <p>No production of harmful secondary or by-products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;

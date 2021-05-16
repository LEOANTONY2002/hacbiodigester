import React from "react";
import "../App.css";
import hac from "../images/hac.png";
import com from "../images/com.png";
import ele from "../images/ele.png";
import fue from "../images/fue.png";
import lab from "../images/lab.png";
import med from "../images/med.png";
import ret from "../images/ret.png";
import san from "../images/san.png";
import sec from "../images/sec.png";
import wat from "../images/wat.png";
import vir from "../images/vir.png";

function Impact() {
  return (
    <div id="pg3" className="pg3">
      <h2>IMPACTS</h2>
      <div className="logo">
        <img src={hac} alt="" />
      </div>
      <div className="imp">
        <div>
          <div className="field">
            <img src={wat} alt="" />
            <p>
              Our invention cuts off the disposal of wastes into water resources{" "}
            </p>
          </div>
          <div className="field">
            <img src={san} alt="" />
            <p> Sanitation of toilets is achieved</p>
          </div>
          <div className="field">
            <img src={fue} alt="" />
            <p>Cheap production cost of fuel</p>
          </div>
          <div className="field">
            <img src={med} alt="" />
            <p>The medical expenditure can be reduced for treating diseases</p>
          </div>

          <div className="field">
            <img src={vir} alt="" />
            <p>
              The effluent obtained is free from germs and can be reused thereby
              conserving water resource
            </p>
          </div>
        </div>
        <div>
          <div className="field">
            <img src={ele} alt="" />
            <p>
              The large amount of electricity generated is sufficient to operate
              the electrical equipment
            </p>
          </div>
          <div className="field">
            <img src={sec} alt="" />
            <p> Safety and Security is assured to the users</p>
          </div>
          <div className="field">
            <img src={lab} alt="" />
            <p> Reduced labor</p>
          </div>
          <div className="field">
            <img src={com} alt="" />
            <p> Revenue generation through compost </p>
          </div>
          <div className="field">
            <img src={ret} alt="" />
            <p>It can be retrofitted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;

import React from "react";
import "../App.css";
import que from "../images/que.png";
import sol from "../images/sol.png";

function ProSol() {
  return (
    <div id="pg2" className="pg2">
      <div>
        <div className="top2">
          <img src={que} alt="?" />
          <h1>PROBLEM</h1>
        </div>
        <div className="prb">
          <p>
            • In today’s life, most people fail to flush the urinal system after
            using it. It creates bad odor and unpleasant environment especially
            in public restrooms.
          </p>
          <p>
            • Lack of power facilities in toilets is also the major factor which
            leads to the minimum usage of public toilets especially by women.
          </p>
          <p>
            • The disposal of toilet sewage in water bodies and poor conditions
            of public rest rooms leads to various diseases.
          </p>
          <p>
            • The wastage and pollution of excess water and water resources as
            well as the unpleasant conditions in the toilets is the threat to
            the environment.
          </p>
        </div>
      </div>
      <div>
        <div className="top2 st">
          <img src={sol} alt="?" />
          <h1>SOLUTION</h1>
        </div>
        <div className="sol">
          <p>
            • Our innovation SWACHATA SEWORMTRICITY can be a solution to the
            above-mentioned problems. The following objectives are met through
            our innovation.
          </p>
          <p>
            • This system could be applied to wastewater treatment, saving
            energy costs tremendously by effectively recovering energy during
            the process of treating sewage.
          </p>
          <p>
            • The generated electricity can be used, not only to light up the
            toilets but also to operate sensors used for the automated flushing.
          </p>
          <p>
            • It also provides the low-cost alternative for the pour flush
            toilets. Our motto is ‘WASTES ARE NOT MEANT TO WASTE’.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProSol;

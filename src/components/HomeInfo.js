import Paycom from "../images/paycom.png";
import Texas from "../images/UT.png";

import "../styles/HomePage.css";

export default function HomeInfo() {
  return (
    <div style={{ width: "maxContent" }}>
      <h1>Hello,</h1>
      <h2>I am Barnett Han</h2>
      <div style={{ marginTop: "15vh" }}>
        <h3>Junior CS student at UT Austin and currently a SWE intern at Paycom</h3>
        <div className="info-container">
          <div>
            <img src={Texas} alt="Texas logo" />
          </div>
          <div>
            <img src={Paycom} alt="Paycom logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

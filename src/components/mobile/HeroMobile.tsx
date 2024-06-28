import pp from "../../assets/images/pp.png";
import Maple from "../../assets/images/maple-leaf.svg";
import "../style/Hero.css";

function HeroMobile() {
  return (
    <>
      <div className="hero">
        <div className="heroText">
          Hey, I’m Mahmoud <img className="pp" src={pp} alt="pp" /> <br />
          a Software Engineering student <br /> at Concordia University based
          <br /> in Montreal, Quebec
          <img className="maple" src={Maple} alt="Maple Leaf" />
        </div>
      </div>
    </>
  );
}

export default HeroMobile;
``;

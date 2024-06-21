import pp from "../assets/images/pp.png";
import Maple from "../assets/images/maple-leaf.svg";
import "./style/Hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroText">
          Hey, I’m Mahmoud <img className="pp" src={pp} alt="Hero" /> <br />
          a Software Engineering student at Concordia <br /> University based in
          Montreal, Quebec
          <img className="maple" src={Maple} alt="Hero" />
        </div>
      </div>
    </>
  );
}

export default Hero;

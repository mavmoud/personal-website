import Plus from "../assets/images/plus.svg";
import "./style/TechStack.css";
function TechStack() {
  return (
    <>
      <div className="techStack">
        <div className="stackTitle">Tech Stack</div>
        <div className="stackColumns">
          <div className="columns">
            <div>
              <ul className="plusUl">
                <li className="plus">
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li className="plus">
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li className="plus">
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li className="plus">
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li className="plus">
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
              </ul>
            </div>
            <div className="columnSkills">
              <ul className="ul">
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <div className="columns">
            <div>
              <ul className="plusUl">
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
              </ul>
            </div>
            <div className="columnskills">
              <ul className="ul">
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>NodeJS</li>
                <li>ReactJS</li>
              </ul>
            </div>
          </div>
          <div className="columns">
            <div>
              <ul className="incompUl">
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                <li>
                  <img className="plus" src={Plus} alt="Hero" />
                </li>
                {/*<li><img className="plus" src={Plus} alt="Hero"/></li>*/}
                {/*<li><img className="plus" src={Plus} alt="Hero"/></li>*/}
              </ul>
            </div>
            <div className="columnskills">
              <ul className="ul">
                <li>MySQL</li>
                <li>Figma</li>
                <li>WordPress</li>
                {/*<li>HTML</li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;

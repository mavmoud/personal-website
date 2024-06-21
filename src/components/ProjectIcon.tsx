import { useState } from "react";
import "./style/ProjectIcon.css";

function ProjectIcon(props: {
  iconLink: string | URL | undefined;
  iconHov: string | undefined;
  iconDef: string | undefined;
}) {
  // function handleClick(url){
  //
  // }onClick={() => alert('You clicked me!')}
  const [hover, setHover] = useState(false);

  const handleMouseMove = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    window.open(props.iconLink);
  };

  return (
    <>
      <div
        className="iconDiv"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          cursor: "pointer",
        }}
      >
        {hover ? (
          <img className="icon" src={props.iconHov} alt="Hero" />
        ) : (
          <img className="icon" src={props.iconDef} alt="Hero" />
        )}
      </div>

      {/*</a>*/}
    </>
  );
}

export default ProjectIcon;

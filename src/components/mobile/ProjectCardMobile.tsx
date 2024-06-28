import { ReactElement, ReactNode, ReactPortal } from "react";
import ProjectIcon from "../ProjectIcon.tsx";
// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
import "../style/ProjectCard.css";

// const ROTATION_RANGE = 6;
// const HALF_ROTATION_RANGE = 6 / 2;

const ProjectCardMobile = (props: {
  link: string | URL | undefined;
  name:
    | string
    | number
    | boolean
    | ReactElement
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | ReactElement
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  iconDef: string | undefined;
  iconHov: string | undefined;
  iconLink: string | URL | undefined;
  video: string | undefined;
  image: string | undefined;
}) => {
  const handleClick = () => {
    window.open(props.link);
  };

  return (
    <div onClick={handleClick} className="MotionDiv">
      <div className="ProjectCard">
        <div className="CardImg">
          <img className="ProjectImg" src={props.image} alt="Project Image" />
        </div>
        <div className="ProjectDetails">
          <div className="ProjectInfo">
            <h1 className="ProjectName">{props.name}</h1>
            <p className="ProjectDescription">{props.description}</p>
          </div>
          <ProjectIcon
            iconDef={props.iconDef}
            iconHov={props.iconHov}
            iconLink={props.iconLink}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardMobile;

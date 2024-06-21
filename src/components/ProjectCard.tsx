import { ReactElement, ReactNode, ReactPortal, useRef, useState } from "react";
import ProjectIcon from "./ProjectIcon";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./style/ProjectCard.css";

const ROTATION_RANGE = 10;
const HALF_ROTATION_RANGE = 10 / 2;

const ProjectCard = (props: {
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
  const [hover, setHover] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(true);

    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    setHover(false);
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    window.open(props.link);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
        transform,
        cursor: "alias",
      }}
      className="MotionDiv"
    >
      <div
        className="ProjectCard"
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="ProjectDetails">
          <div
            className="ProjectInfo"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <h1 className="ProjectName">{props.name}</h1>
            <p className="ProjectDescription">{props.description}</p>
          </div>
          <ProjectIcon
            iconDef={props.iconDef}
            iconHov={props.iconHov}
            iconLink={props.iconLink}
          />
        </div>
        s
        <div
          className="CardImg"
          style={{
            transform: "translateZ(75px)",
          }}
        >
          {hover ? (
            <video className="ProjectImg" src={props.video} loop autoPlay />
          ) : (
            <img className="ProjectImg" src={props.image} alt="Hero" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
// export default ProjectCard;

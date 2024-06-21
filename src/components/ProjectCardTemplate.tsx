import ProjectIcon from "./ProjectIcon";
import "./style/ProjectCard.css";

function ProjectCardTemplate(props: {
  iconLink: string | URL | undefined;
  iconDef: string | undefined;
  iconHov: string | undefined;
}) {
  return (
    <>
      <div className="ProjectCard">
        <div className="ProjectInfo">
          <h1 className="ProjectName">
            Wellness — Designing an App for <br /> The Elderly
          </h1>
          <p className="ProjectDescription">
            This UX/UI case study focused on designing a mobile app to improve
            the quality of life for elderly individuals, particularly in
            response to the isolation caused by the COVID-19 pandemic. Using
            Figma, the app was designed to prioritize simplicity and
            accessibility.
          </p>
          <ProjectIcon
            iconLink={props.iconLink}
            iconDef={props.iconDef}
            iconHov={props.iconHov}
          />
        </div>
        <div className="CardImg">
          <img
            className="ProjectImg"
            src="/public/WellnessProjectCover.jpg"
            alt="Hero"
          />
          {/*<video className="WellnessVideo" preload="none" src="/public/WellnessVideo.mp4"  />*/}
        </div>
      </div>
    </>
  );
}

export default ProjectCardTemplate;

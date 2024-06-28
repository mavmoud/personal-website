import "../style/Education.css";
function EducationMobile() {
  return (
    <>
      <div className="education">
        <div className="educationTitle">Education</div>
        <div className="educationDescription">
          <div className="universityProgram">
            <p>
              Concordia University <br />{" "}
              <span className="greyEducation">BEng, Software Engineering</span>
            </p>
          </div>
          <div className="locationDuration">
            <p>
              Montreal, Quebec <br />{" "}
              <span className="greyEducation">2020-Now</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationMobile;

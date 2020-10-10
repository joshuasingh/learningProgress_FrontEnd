import React from "react";

var CoursesCard = ({ CourseDetails }) => {
  return (
    <>
      <div className="CoursesCardClass">
        <div className="CoursesHeading">{CourseDetails.courseName}</div>
        <div className="CoursesDescription">{CourseDetails.Description}</div>
      </div>
    </>
  );
};

export default CoursesCard;

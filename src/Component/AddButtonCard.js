import React from "react";
import { TiPlus } from "react-icons/ti";

var AddButtonCard = ({ actionVal }) => {
  return (
    <>
      <div className="CoursesCardClass" onClick={actionVal}>
        <div className="AddButtonConfig">
          <div>
            <TiPlus size="9rem" color="#C2EDFE" />
          </div>
        </div>
        <div className="AddButtonText">
          <div>Add A New Course</div>
        </div>
      </div>
    </>
  );
};

export default AddButtonCard;

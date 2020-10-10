import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import NumberPicker from "react-widgets/lib/NumberPicker";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import SpinnerComp from "../Component/SpinnerComp";
import { useAlert } from "react-alert";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};

  if (values.courseName.length === 0) {
    errors.courseName = "Course Name cannot be empty ";
  }

  if (values.courseName.length >= 15) {
    errors.courseName = "Course Name cannot exceed 15 Characters";
  }

  //check Description errors;
  if (values.courseDescription.length >= 240) {
    errors.courseDescription = "Description cannot be more than 240 characters";
  }

  return errors;
};

const CourseForm = ({ hideForm }) => {
  const [effortVal, setEffortVal] = useState(0);
  const [effortUnit, setEffortUnit] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const alert = useAlert();

  const { AllCourses } = useSelector((state) => ({
    ...state.CoursesReducer,
  }));

  const setCourses = useDispatch();

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      courseName: "",
      courseDescription: "",
      effortNumber: 0,
    },
    validate,
    onSubmit: () => {
      submitForm();
    },
  });

  useEffect(() => {
    console.log("form is rendered in courseForm", AllCourses);
  });

  var submitForm = () => {
    console.log(
      "submit values",
      formik.values.courseName,
      formik.values.courseDescription,
      effortVal,
      effortUnit
    );

    var data = {
      courseName: formik.values.courseName,
      Description: formik.values.courseDescription,
      TotalTime: effortVal,
      EffortUnit: effortUnit,
    };

    const url = process.env.REACT_APP_SERVER_ADDRESS + "/courses/AddCourse";

    //setting up the spinner
    setDataLoading(true);

    axios
      .post(url, data)
      .then((respond, err) => {
        if (err) {
          setDataLoading(false);
          alert.error("Error occured, Please try again in some time");
        } else {
          console.log("course is Added", respond.data);
          //set the updated course list in redux
          setDataLoading(false);
          setCourses({
            type: "InitiateList",
            payload: respond.data.result.Courses,
          });
          hideForm();
        }
      })
      .catch((e) => {
        setDataLoading(false);
        console.log("error occured in catch", e);
        alert.error("Problem connecting to the server, Please try again");
      });
  };

  return (
    <>
      <div className="formHolder">
        {dataLoading === true ? <SpinnerComp /> : null}
        <div className="CoursesFormClasses">
          <h1
            style={{
              textAlign: "center",
              color: "#293D00",
              textDecoration: "underline",
              marginTop: "18px",
            }}
          >
            Course Details:
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="FormRow FormRowMargin">
              <div className="FormTitles FontClass">
                <label>Course Name:</label>
              </div>
              <div className="FormFlieds">
                <input
                  id="courseName"
                  name="courseName"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.courseName}
                  style={{ width: "250px" }}
                />
              </div>
            </div>
            <div className="FormError">
              {" "}
              {formik.errors.courseName ? (
                <div>{formik.errors.courseName}</div>
              ) : null}
            </div>
            <div className="FormRow FormRowMargin">
              <div className="FormTitles FontClass">
                <label>Course Description:</label>
              </div>
              <div className="FormFlieds">
                <textarea
                  id="courseDescription"
                  name="courseDescription"
                  type="text"
                  placeholder="Maximum 240 characters allowed"
                  class="form-control"
                  aria-label="With textarea"
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  style={{ width: "250px" }}
                  rows={10}
                  value={formik.values.courseDescription}
                ></textarea>
              </div>
            </div>
            <div className="FormError">
              {formik.errors.courseDescription ? (
                <div>{formik.errors.courseDescription}</div>
              ) : null}
            </div>
            <div className="FormRow FontClass FormRowMargin">
              <label>Effort goal you think of Giving to this Course:</label>
            </div>
            <div className="NumberPickerRow">
              <NumberPicker
                id="EffortNumber"
                name="EffortNumber"
                defaultValue={effortVal}
                containerClassName={"NumberPickerClass"}
                style={{ display: "inline-block" }}
                min={0}
                onChange={(e) => {
                  setEffortVal(e);
                }}
              />
              <div
                style={{
                  display: "inline-block",
                  width: "120px",
                  textAlign: "center",
                }}
                className="FontClass"
              >
                hrs/{effortUnit}
              </div>
              <div
                className={
                  effortUnit === "day"
                    ? "EffortUnitSelector UnitSelected"
                    : "EffortUnitSelector"
                }
                onClick={() => {
                  setEffortUnit("day");
                }}
              >
                Day
              </div>
              <div
                className={
                  effortUnit === "week"
                    ? "EffortUnitSelector UnitSelected"
                    : "EffortUnitSelector"
                }
                onClick={() => {
                  setEffortUnit("week");
                }}
              >
                Week
              </div>
            </div>
            <div className="SubmitButton FormRowMargin ButtonMargin">
              <button className="btn btn-secondary" onClick={hideForm}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseForm;

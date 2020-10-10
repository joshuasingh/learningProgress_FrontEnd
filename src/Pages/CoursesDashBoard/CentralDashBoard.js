import React, { useState, useEffect } from "react";
import CoursesCard from "../../Component/CoursesCard";
import AddButtonCard from "../../Component/AddButtonCard";
import CourseForm from "../CourseForm";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import SpinnerComp from "../../Component/SpinnerComp";
import { useAlert } from "react-alert";

var CentralDashBoard = ({ history }) => {
  const [courses, setCourse] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [spinnerStat, changeSpinnerStat] = useState(true);

  const alert = useAlert();

  const { AllCourses } = useSelector((state) => ({
    ...state.CoursesReducer,
  }));

  const setCourses = useDispatch();

  var addCourse = () => {
    //history.push("/courses/Add_new_course");
    setShowForm(true);
    return;
  };

  var hideForm = () => {
    setShowForm(false);
  };

  var getAllCourses = () => {
    var data = {
      UserId: "5f62519eb8f27a2d8c2f1641",
    };

    axios
      .post(
        process.env.REACT_APP_SERVER_ADDRESS + "/courses/GetAllCourses",
        data
      )
      .then((response, err) => {
        if (err) {
          alert.error("Unable to fetch your courses, PLease try again...");
          changeSpinnerStat(false);
          console.log("error occured while fetching courses", err);
        } else {
          console.log(response.data.result[0].Courses);
          changeSpinnerStat(false);
          setCourses({
            type: "InitiateList",
            payload:
              response.data.result[0].Courses === undefined
                ? []
                : response.data.result[0].Courses,
          });
        }
      })
      .catch((e) => {
        alert.error("Unable to fetch your courses, PLease try again...");
        changeSpinnerStat(false);
        console.log("Unable to fetch courses");
      });
  };

  useEffect(() => {
    console.log("dashboard rendered", AllCourses);
    getAllCourses();
  }, []);

  return (
    <>
      {spinnerStat === true ? <SpinnerComp /> : null}
      <div className="DashboardClass">
        <AddButtonCard actionVal={addCourse} />
        {AllCourses.map((val, key) => {
          return <CoursesCard key={key} CourseDetails={val} />;
        })}
      </div>

      {showForm ? <CourseForm hideForm={hideForm} /> : null}
    </>
  );
};

export default CentralDashBoard;

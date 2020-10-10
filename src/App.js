import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EndPage from "./Pages/EndPage";
import StartPage from "./Pages/StartPage";
import MainPage from "./Pages/MainPage";
import CentralDashBoard from "./Pages/CoursesDashBoard/CentralDashBoard";
import CourseForm from "./Pages/CourseForm";
import ErrorAlert from "./Component/ErrorAlert";

function App(props) {
  const { Name } = useSelector((state) => ({
    ...state.TestReducer,
  }));
  const dispatch = useDispatch();

  console.log("in app", Name);

  // const { Name } = useSelector(state => state.TestReducer);

  useEffect(() => {
    console.log("in render of app", Name);
  }, []);

  function changeVal() {
    dispatch({ type: "updateName" });
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={CentralDashBoard} exact />
          <Route path="/courses/Add_new_course" component={CourseForm} exact />
          <Route path="/Pages/End" component={EndPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;

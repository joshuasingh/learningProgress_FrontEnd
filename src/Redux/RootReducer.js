import { combineReducers } from "redux";
import TestReducer from "../Reducers/TestReducer";
import CoursesReducer from "../Reducers/CoursesReducer";

const combineReducer1 = combineReducers({
  TestReducer,
  CoursesReducer,
});

export default combineReducer1;

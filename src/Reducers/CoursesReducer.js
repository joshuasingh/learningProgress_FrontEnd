const CoursesReducer = (state = { AllCourses: [] }, action) => {
  switch (action.type) {
    case "InitiateList":
      state.AllCourses = action.payload;
      return state;
    default:
      return state;
  }
};

export default CoursesReducer;

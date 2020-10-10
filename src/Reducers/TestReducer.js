const TestReducer = (
  state = {
    Name: "joshua",
  },
  action
) => {
  switch (action.type) {
    case "updateName":
      state = { Name: "singh" };
      break;
  }
  return state;
};

export default TestReducer;

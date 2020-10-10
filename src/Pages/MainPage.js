import React from "react";
import { useHistory } from "react-router-dom";

const MainPage = ({ history }) => {
  //let history = useHistory();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{ display: "inline-block" }}
          onClick={() => {
            history.push("/Pages/Start");
          }}
        >
          start
        </div>
        <div
          style={{ display: "inline-block" }}
          onClick={() => {
            history.push("/Pages/End");
          }}
        >
          end
        </div>
      </div>
    </>
  );
};

export default MainPage;

import React, { Fragment } from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ErrorAlert from "./ErrorAlert";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const ErrorWindow = () => {
  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <ErrorAlert />
      </Provider>
    </>
  );
};

export default ErrorWindow;

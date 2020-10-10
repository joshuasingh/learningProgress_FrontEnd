import React, { Fragment } from "react";
import { useAlert } from "react-alert";

const ErrorAlert = ({ message }) => {
  const alert = useAlert();

  //   return (
  //     <Fragment>
  //       <button
  //         onClick={() => {
  //           alert.show("Oh look, an alert!");
  //         }}
  //       >
  //         Show Alert
  //       </button>
  //       <button
  //         onClick={() => {
  //           alert.error(message);
  //         }}
  //       >
  //         Oops, an error
  //       </button>
  //       <button
  //         onClick={() => {
  //           alert.success("It's ok now!");
  //         }}
  //       >
  //         Success!
  //       </button>
  //     </Fragment>
  //   );

  return <></>;
};

export default ErrorAlert;

import React from "react";

var SpinnerComp = () => {
  return (
    <>
      <div className="spinnerStyle">
        <div
          class="spinner-border text-primary"
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default SpinnerComp;

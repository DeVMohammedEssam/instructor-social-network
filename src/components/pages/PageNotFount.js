import React from "react";
const PageNotFound = () => {
  return (
    <div
      style={{ position: "fixed", top: "0", bottom: "0" }}
      className="d-flex justify-content-center w-100 align-items-center text-danger "
    >
      <h2 className="display-4">404 ! </h2>

      <h4 className="display-4">Page Not Found</h4>
    </div>
  );
};

export default PageNotFound;

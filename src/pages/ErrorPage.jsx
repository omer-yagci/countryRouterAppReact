import React from "react";
import { BounceLoader } from "react-spinners";
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <BounceLoader
        color="#4525db"
        cssOverride={{}}
        loading
        size={80}
        speedMultiplier={1}
      />
    </div>
  );
};

export default ErrorPage;

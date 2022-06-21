import React from "react";
import { useLocation } from "react-router-dom";

const ShowSummary = () => {
  const { state } = useLocation();

  console.log("data ->", state);

  return <div>ShowSummary</div>;
};

export default ShowSummary;

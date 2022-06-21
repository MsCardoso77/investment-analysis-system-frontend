import React from "react";
import { useLocation } from "react-router-dom";

const ShowSummary = () => {
  const { state: tableResult } = useLocation();

  console.log("data ->", tableResult);

  return <div>ShowSummary</div>;
};

export default ShowSummary;

import React, { useEffect, useState } from "react";

const Poe = ({ data }) => {
  const [bestInvestment, setBestInvestment] = useState("");

  useEffect(() => {
    let highestValue = 0;
    data.forEach((row, index) => {
      if (highestValue < row[0]) {
        highestValue[index] = row[0]
      }
    });
  }, [data]);

  return <>{bestInvestment}</>;
};

export default Poe;

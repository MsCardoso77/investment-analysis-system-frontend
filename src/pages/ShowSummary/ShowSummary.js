import { React } from "react";
import { useLocation } from "react-router-dom";
import MakeEnvironment from "../../components/MakeEnvironment";

const ShowSummary = () => {
  const { state } = useLocation();

  return (
    <>
      <MakeEnvironment
        environment={state.environment}
        data={state.tableResult}
      />
    </>
  );
};

export default ShowSummary;

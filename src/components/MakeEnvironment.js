import RiskEnvironment from "./RiskEnvironment";
import UncertaintyEnvironment from "./UncertaintyEnvironment";

const MakeEnvironment = ({environment, data}) => {
  console.log('DADOS->', data)
  if (environment === "Risco") {
    return <RiskEnvironment data={data} />
  } else if (environment === "Incerteza") {
    return <UncertaintyEnvironment data={data} />
  }
}

export default MakeEnvironment
import { Table } from "react-bootstrap";

const CalculatorTable = ({numberOfScenarios, numberOfInvestments}) => {
  console.log(numberOfScenarios)
  console.log(numberOfInvestments)
  return (
    <>
      <Table striped bordered>
        <tbody>
        {Array(numberOfInvestments).map(() => {
          return (
            <tr>
            {Array(numberOfScenarios).map(() => {
              return (
                <td>TESTE</td>
              )
            }
            )}
          </tr>
          )
        }
        )}
        </tbody>
      </Table>
    </>
  )
}

export default CalculatorTable
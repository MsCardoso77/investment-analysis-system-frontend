import { React } from "react";
import { useLocation } from "react-router-dom";
import MakeEnvironment from "../../components/MakeEnvironment";
import {Button, Form} from 'react-bootstrap'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ShowSummary = () => {
  
  const navigate = useNavigate();
  const { state } = useLocation();

  const [name, setName] = useState('')

  const onChangeName = (e) => {
    const value = e.target.value
    setName(value)
    console.log("NAME->", name)
  }

  const saveSummary = async () => {
    if(name === '') {
      alert("Escolha um nome para salvamento")
      return
    } else {
      console.log("SALVOU")
      navigate("/");
    }
  }

  return (
    <>
        <MakeEnvironment 
        environment={state.environment}
        data={state.tableResult}
      />
      <Form className="d-flex flex-row bd-highlight mb-3 justify-content-end">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Nome para salvamento" onChange={onChangeName} />
        </Form.Group>
        <Button variant="dark" onClick={saveSummary}>
          Salvar
        </Button>
      </Form>
    </>

  )
  
}

export default ShowSummary;

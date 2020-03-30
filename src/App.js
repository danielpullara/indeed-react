import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/Homepage";
import CandidatesPage from "./component/CandidatesPage";
import CandidatesForm from "./component/CandidatesForm";
import CompanyPage from './pages/CompanyPage';
import { InputGroup, Row, Col, Form, Button, Container } from "react-bootstrap";

function App() {
    return (
      <div > 
      
       <h1>CandidatePage</h1>
      <div>
        <p><Link to="/guest" >Page Guest</Link></p>
        <p><Link to="/user" >User Guest</Link></p>
      </div>
      <Router>
        <Route path="/" exact component={HomePage} />
      </Router>
      <Router>
      <Route path="/candidates/:id" component={CandidatesPage} />
      <Container style={"unspecified"}>
        <Row>
          <Col>
            <CandidatesForm candidate={candidate} />
          </Col>
        </Row>
      </Container>
      </Router>
      <Router>
        <Route path="/Company" component={CompanyPage} />
      </Router>
      <Switch>
        <Route path="/guest" render={(props) => <Guest {...props} name={"Khoa"} />} />
        <ProtectedRoute path="/user" render={(props) => <User authenticated={false} {...props} />} />
      </Switch>
    </div>
  );
}

const Guest = (props) => {
  console.log(props)
  return <h1> This is the Guest Page </h1>
}
const User = () => {
  return <h1>This is the User Page</h1>
}


const ProtectedRoute = props => {
  if (props.authenticated) {
    return <Route {...props} />
  }
  else {
    return <Redirect to="guest" />
  }
}

export default App;

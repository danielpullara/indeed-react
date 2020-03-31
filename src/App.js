import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CompanyPage from './pages/CompanyPage';
import AllCandidates from "./pages/AllCandidates"
// /candidates to show all candidates
// /candidates/:id to show single candidate
// that makes sense so something like: is that Ok? kind of, but need fixing alot of things here
// let's start with simple thing first
// the naming here confuse me
function App() {
  return (
    <div >
      <h1>CandidatePage</h1>

      <div>
        <p><Link to="/guest" >Page Guest</Link></p>
        <p><Link to="/user" >User Guest</Link></p>
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/candidates" exact component={AllCandidates} />
        {/* <Route path="/candidates/:id" component={CandidatesPage} /> */}
        <Route path="/Company" component={CompanyPage} />
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

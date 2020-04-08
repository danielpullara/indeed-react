import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  Link,
  useHistory
} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyPage from './pages/CompanyPage';
import AllCandidates from "./pages/AllCandidates"
import { Button } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import SingleForm from './pages/SingleForm';
import Login from './pages/Login'
import {useSelector} from "react-redux"


function App() {
  let history = useHistory()
  let user = useSelector(state => state.user)

  
  return (
    <div >
      <h1>WELCOME!{user.email}</h1>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/candidates" exact component={AllCandidates} />
        <Route path="/candidates/:id" component={SingleForm} />
        <Route path="/Company" component={CompanyPage} />
        <Route path="/guest" render={(props) => <Guest {...props} name={"Khoa"} />} />
        <ProtectedRoute path="/user" render={(props) => <User authenticated={false} {...props} />} />
      </Switch>
      <div>
        <Button style={{ margin: "5px", backgroundColor: "white", fontWeight: 'bold' }}><Link to="/Company" >Our Company</Link></Button>
        <Button style={{ margin: "5px", backgroundColor: "white", fontWeight: 'bold' }}><Link to="/" >HomePage</Link></Button>
        <Button style={{ backgroundColor: "white", fontWeight: 'bold' }}><Link to="/candidates" >CandidatesPage</Link></Button>
        <Button onClick={() => history.push('/login')}>Login</Button>
      </div>
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
  }else {
    return <Redirect to="guest" />
  }
}

export default App;

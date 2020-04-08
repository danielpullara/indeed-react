import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

let initialState = {
  user: { email: '', password: '', authenticate: false }
}

function indeedReducer(state = initialState, action) {
  if(action.type === 'LOGIN'){
    state.user = action.payload
    state.user.authenticatice=true;
    console.log("login succesfully", state.user)
  }
  return state
}

const store = createStore(indeedReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

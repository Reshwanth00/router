import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from "./form"
import Preview from './preview';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import App from './Jotform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/form" component={Form} />
      <Route path="/preview" component={Preview} />
    </Switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

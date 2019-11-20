import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="TechStack">
          <p>
            React App Integrated with Travis for CI/CD to AWS ElasticBeanStalk
          </p>
          <ul>
            <li>React</li>
            <li>Travis CI</li>
            <li>AWS Elastic BeanStalk</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function sumParams(...params) {
  return params.reduce((acc, curr) => acc + curr, 0);
}

const myObj = {
  d: 'fuu',
  c: 'foo',
  b: 'bar',
  a: 'baz',
};

const { a, b, ...rest } = myObj;

const newObj = {
  ...rest,
  d: 'fuh',
};

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        KeepCoding
      </h1>
    </header>
    <div className="App-intro">
      <p>
        {`${a} ${b} ${JSON.stringify(rest)}`}
      </p>
      <p>
        {JSON.stringify(newObj)}
      </p>
      <p>
        {JSON.stringify(rest)}
      </p>
      <p>
        {sumParams(1, 2, 3, 4)}
      </p>
    </div>
  </div>
);

export default App;

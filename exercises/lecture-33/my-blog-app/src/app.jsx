import './App.css';
import React from 'react';

const jsxElement = <h1>I am a JSX element</h1>;

const header = (
  <div>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </div>
);

const jsxFragment = (
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);

const footer = <p>Copyright &copy; 2024</p>;

function App() {
  return (
    <div className="App">
 
      {jsxElement}

      {header}

      {jsxFragment}

      {footer}

    </div>
  );
}

export default App;
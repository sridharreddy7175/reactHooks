import React from 'react';
import './App.css';
import Counter from './Counter';
import Account from './Account';
import Todos from './Todos';
import Library from './Library';
import Register from './Register';
import Users from './Users';
import Movies from './Movies';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hooks</h1>
      </header>
      <Library/>
     
    </div>
  );
}

export default App;

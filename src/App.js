import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fashionista Knitting Co.</h1>
      </header>
      <nav className="category-navigation">
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Yarn</h2>
        </a>
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Fiber</h2>
        </a>
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Patterns</h2>
        </a>
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Needles</h2>
        </a>
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Notions</h2>
        </a>
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Buttons</h2>
        </a>
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Shawl Pins</h2>
        </a>
        <a className="category-link" href="#">
          <h2 className="category-link__heading">Cashmere</h2>
        </a>
      </nav>
    </div>
  );
}

export default App;

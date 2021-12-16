import "./App.scss";
import React from 'react'
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="App-card">
        <h3>Movie Night.</h3>
        <p>2021-12-10</p>
      </section>

      <section className="App-card">
        <h3>Car meetup</h3>
        <p>2021-12-14</p>
      </section>

      <section className="App-card">
        <h3>Cooking class.</h3>
        <p>2021-12-20</p>
      </section>
    </div>
  );
}

export default App;

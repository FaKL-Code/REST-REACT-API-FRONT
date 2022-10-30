import logo from './logo.svg';
import './App.css';
import ListaCursos from './components/listaCursos';
import Footer from './components/footer';
import React from 'react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Cursos</h1>
      </header>
      <ListaCursos/>
      <Footer/>
    </div>
  );
}

export default App;

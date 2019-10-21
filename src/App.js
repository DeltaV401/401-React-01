import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Logo from './components/Logo';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Logo />
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
};

export default App;

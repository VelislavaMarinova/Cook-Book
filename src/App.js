import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/home/Home';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';



function App() {
  return (
    <div id="container">
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          

          {/* Dashboard Page ( for Guests and Users ) */}

        </Routes>
      </Main>

      <Footer />
    </div>

  );
}

export default App;

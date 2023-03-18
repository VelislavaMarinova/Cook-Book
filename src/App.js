import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/home/Home';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import CreatePage from './components/forms/CreatePage';



function App() {
  return (
    <div id="container">
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="/create" element={<CreatePage />} />
          

          {/* Dashboard Page ( for Guests and Users ) */}

        </Routes>
      </Main>

      <Footer />
    </div>

  );
}

export default App;

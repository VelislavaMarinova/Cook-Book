
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';



function App() {
  return (
    <div id="container">
      <Header />
      {/* Main Content */}
      <Main>
        {/* Dashboard Page ( for Guests and Users ) */}
        <Home />

      </Main>

      <Footer />
    </div>

  );
}

export default App;

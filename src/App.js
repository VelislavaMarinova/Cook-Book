import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import  AuthContext  from './contexts/AuthContext';
import  DataContext  from './contexts/DataContext';

import Home from './components/home/Home';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import CreatePage from './components/forms/CreatePage';
import { useEffect, useState } from 'react';

import useFetchRecipes from './hooks/useFetchRecipes';
import DetailsPage from './components/detailsPage/DetailsPage';
import Catalog from './components/Catalog/Catalog';
// import {useFetchRecipes} from './hooks/useFetchRecipes'

const baseUrl = 'http://localhost:3030/data/recipes'
// const urlLatestRecipes=`http://localhost:3030/data/recipes?sortBy=_createdOn%20desc&distinct=category`

// const useRecipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetch(baseUrl)
//       .then(res => res.json())
//       .then(result => {
//         // console.log(result);
//         setRecipes(result)

//       })
//     console.log(recipes);
//   }, []);
//   return recipes;
// }

function App() {
  const [auth, setAuth] = useState({})


  const navigate = useNavigate()

  const recipes = useFetchRecipes()
 

  const onFormClose = () => {
    navigate('/')
  }

  const detectKeyDown = (e) => {
    if (e.key === 'Escape') {
      onFormClose()
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [detectKeyDown]);



  const onLoginSubmit = async (data) => {
    console.log(data);
  }

  return (
    <AuthContext.Provider value={{ onLoginSubmit }}>
      <DataContext.Provider value={recipes}>

        <div id="container">
          <Header />

          <Main>
            <Routes>
              <Route path="/" element={<Home recipes={recipes} />} />
              <Route path="/login" element={<Login onClose={onFormClose} />} />
              <Route path="/register" element={<Register onClose={onFormClose} />} />
              <Route path="/create" element={<CreatePage onClose={onFormClose} />} />
              <Route path="/catalog" element={<Catalog recipes={recipes} />} />
              <Route path="/catalog/:recipeId" element={<DetailsPage />} />


              {/* Dashboard Page ( for Guests and Users ) */}

            </Routes>
          </Main>

          <Footer />
        </div>
      </DataContext.Provider>

    </AuthContext.Provider>

  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';
import DataContext from './contexts/DataContext';
import { authServiceFactory } from './services/authService'

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
import Catalog from './components/catalog/Catalog';
import Logout from './components/forms/Logout';

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
  const authService = authServiceFactory(auth.accessToken)

  const navigate = useNavigate()

  const recipes = useFetchRecipes()

  const onFormClose = () => {
    console.log('close');
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

    // console.log(data);
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate('/catalog');
    } catch (error) {
      alert('incorrect Email or Password')
      // console.log('There is a problem');
    }
    // 1. Before useForm Hook,to try if it works
    // e.preventDefault();
    // console.log(Object.fromEntries((new FormData(e.target))));

  }
  const onRegisterSubmit = async (data) => {
    console.log(data);
    const { confirmPass, ...registerData } = data;
    if (confirmPass !== registerData.password) {
      alert('Password and Repaet Password don\'t match!');
      return;
    }
    try {
      const result = await authService.register(registerData)
      console.log(result);
      setAuth(result);
      navigate('/catalog');
    } catch (error) {
      alert('problem')
    }
  };

  const onLogout = async () => {
    // await authService.logout()
    setAuth({})
  }
  const authContextData = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken

  }

  return (
    <AuthContext.Provider value={authContextData}>
      <DataContext.Provider value={recipes}>

        <div id="container">
          <Header />

          <Main>
            <Routes>
              <Route path="/" element={<Home recipes={recipes} />} />
              <Route path="/login" element={<Login onFormClose={onFormClose} />} />
              <Route path="/logout" element={<Logout onFormClose={onFormClose} />} />
              <Route path="/register" element={<Register onFormClose={onFormClose} />} />
              <Route path="/create" element={<CreatePage onFormClose={onFormClose} />} />
              <Route path="/catalog" element={<Catalog recipes={recipes} />} />
              <Route path="/catalog/:recipeId" element={<DetailsPage />} />
            </Routes>
          </Main>

          <Footer />
        </div>
      </DataContext.Provider>

    </AuthContext.Provider>

  );
}

export default App;

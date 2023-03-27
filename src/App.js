import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AuthProvider } from './contexts/AuthContext'
import DataContext from './contexts/DataContext';
import { recipeServiceFactory } from './services/recipeService';


import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import CreatePage from './components/forms/CreatePage';
import DetailsPage from './components/detailsPage/DetailsPage';
import Catalog from './components/catalog/Catalog';
import Logout from './components/forms/Logout';



function App() {
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([]);

  const localData=JSON.parse(localStorage.getItem('auth'));
  let token=''
  if(localData){
  token= localData.accessToken
  
  // console.log(token);

}
const recipeService = recipeServiceFactory(token);//auth.accessToken

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result)
      })
  }, []);




  const onFormClose = () => {
    console.log('close');
    navigate('/')
  }



  const onCreateSubmit = async (data) => {
    // console.log(data);
    const newRecipe = await recipeService.create(data);
    // console.log(newRecipe);

    setRecipes(state => [newRecipe,...state, ]);
  console.log(recipes);  

    navigate('/catalog');
  }

  return (
    <AuthProvider>
      <DataContext.Provider value={recipes}>

        <div id="container">
          <Header />

          <Main>
            <Routes>
              <Route path="/" element={<Home recipes={recipes} />} />
              <Route path="/login" element={<Login onFormClose={onFormClose} />} />
              <Route path="/logout" element={<Logout onFormClose={onFormClose} />} />
              <Route path="/register" element={<Register onFormClose={onFormClose} />} />
              <Route path='/create-recipe' element={<CreatePage onFormClose={onFormClose} onCreateSubmit={onCreateSubmit} />} />
              {/* <Route path="/create" element={<CreatePage onFormClose={onFormClose} />} /> */}
              <Route path="/catalog" element={<Catalog recipes={recipes} />} />
              <Route path="/catalog/:recipeId" element={<DetailsPage />} />
            </Routes>
          </Main>

          <Footer />
        </div>
      </DataContext.Provider>

    </AuthProvider>

  );
}

export default App;





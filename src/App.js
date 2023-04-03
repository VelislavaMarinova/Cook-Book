import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext';
import DataContext from './contexts/DataContext';
// import {create,edit } from './services/recipeService';


import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import CreatePage from './components/forms/CreatePage';
import EditPage from './components/editPage/EditPage';
import DeleteRecipe from './components/delete/DeleteRecipe';
import DetailsPage from './components/detailsPage/DetailsPage';
import Catalog from './components/catalog/Catalog';
import Logout from './components/forms/Logout';
import RouteProtected from './components/common/RouteProtected';
import RecypesByCategory from './components/Categories/RecypesByCategory';



function App() {

  // const recipeserviseAuth = useService(recipeServiceFactory)
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   recipeService.getAll()
  //     .then(result => {
  //       setRecipes(result)
  //     })
  // }, []);

  // const localData = JSON.parse(localStorage.getItem('auth'));
  // let token = ''
  // if (localData) {
  //   token = localData.accessToken;
  // }
  // const recipeService = recipeServiceFactory(token);//auth.accessToken


  return (
    <AuthProvider>
      <DataProvider>

        <div id="container">
          <Header />

          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />

              <Route path='/create' element={
                <RouteProtected>
                  <CreatePage />
                </RouteProtected>} />
              <Route path="/recipes/:recipeId/edit" element={
                <RouteProtected>
                  <EditPage />
                </RouteProtected>} />
                <Route path="/recipes/:recipeId/delete" element={<DeleteRecipe />} />


              {/* <Route path="/create" element={<CreatePage onFormClose={onFormClose} />} /> */}
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/main-dishes" element={<RecypesByCategory />} />
              <Route path="/catalog/desserts" element={<RecypesByCategory category='desserts'/>} />
              <Route path="/catalog/drinks" element={<RecypesByCategory />} />
              <Route path="/catalog/salads" element={<RecypesByCategory category='salads' />} />
              <Route path="/catalog/healthy-recipes" element={<RecypesByCategory />} />
              <Route path="/catalog/quick-recipes" element={<RecypesByCategory />} />
              
              <Route path="/catalog/:recipeId" element={<DetailsPage />} />
            </Routes>
          </Main>

          <Footer />
        </div>
      </DataProvider>

    </AuthProvider>

  );
}

export default App;





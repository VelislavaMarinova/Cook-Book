import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext';


import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import CreatePage from './components/forms/CreatePage';
import DetailsPage from './components/details/DetailsPage';
import Catalog from './components/catalog/Catalog';
import Logout from './components/forms/Logout';
import RouteProtected from './components/common/RouteProtected';
import RecypesByCategory from './components/categories/RecypesByCategory';
import MyRecipes from './components/myRecipes/MyRecipes';
import DeletePage from './components/forms/DeletePage';
import PageNotFound from './components/notFound/NotFound';

function App() {
  const categories = [
    "main-dishes",
    "desserts",
    "drinks",
    "salads",
    "healthy-recipes",
    "quick-recipes",
    "soups"
  ]

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
                </RouteProtected>}
              />
              <Route path="/recipes/:recipeId/delete" element={
                <RouteProtected>
                  <DeletePage />
                </RouteProtected>}
              />
              <Route path="/myRecipes" element={
                <RouteProtected>
                  <MyRecipes />
                </RouteProtected>}
              />
              <Route path="/catalog" element={<Catalog />} />
              {categories.map(categry => <Route key = {categry} path={`/catalog/${categry}`} element={<RecypesByCategory category={categry} />} />)}
              <Route path="/catalog/:recipeId" element={<DetailsPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;





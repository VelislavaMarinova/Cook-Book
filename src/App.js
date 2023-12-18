import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext'
import { DataProvider, useDataContext } from './contexts/DataContext';


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
import useGetAllCategories from './hooks/useGetAllCategories';
import Loading from './components/loading/Loading';

function App() {

  const { categories, loading } = useGetAllCategories();
  if (loading) {
    return <Loading />
  }

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
                  <CreatePage categories={categories} />
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
              <Route path="/catalog" element={
                <RouteProtected>
                  <Catalog />
                </RouteProtected>
              } />
              {categories.map(categry => <Route key={categry._id} path={`/catalog/${categry.value}`} element={<RecypesByCategory category={categry.value} />} />)}
              <Route path="/catalog/:recipeId" element={<DetailsPage categories={categories} />} />
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





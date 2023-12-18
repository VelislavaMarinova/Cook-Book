import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import useGetAllRecipes from '../hooks/useGetAllRecipes';
import { recipeServiceFactory } from '../services/recipeService';
import { useAuthContext } from './AuthContext';
import useGetAllCategories from '../hooks/useGetAllCategories';

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const { token } = useAuthContext();
    const { recipes, setRecipes, loading } = useGetAllRecipes();
    const { categories, setCategories, loading: loadingCattegories } = useGetAllCategories();
    const recipeService = recipeServiceFactory(token);

    const onFormClose = () => {
        navigate('/');
    };

    const onCreateSubmit = async (data) => {
        const dataIngredints = data.ingredients.split("||")
        const dataMethods = data.method.split("||")
        data.ingredients = dataIngredints;
        data.method = dataMethods
        const newRecipe = await recipeService.create(data);

        setRecipes(state => [newRecipe, ...state,]);

        navigate(`/catalog/${data.category}`)
    };

    const onEditSubmit = async (data) => {
        const dataIngredints = data.ingredients.split("||")
        const dataMethods = data.method.split("||")
        data.ingredients = dataIngredints;
        data.method = dataMethods

        await recipeService.edit(data._id, data);
    };

    const onLikeRecipe = async (recipeId) => {
        await recipeService.postLikeRecipe({"recipeId":recipeId})

    }

    const deleteRecipeFromState = (recipeId) => {
        setRecipes(state => state.filter(x => x._id !== recipeId));
    };


    const contextValues = {
        recipes,
        categories,
        loadingCattegories,
        loading,
        onCreateSubmit,
        onEditSubmit,
        onFormClose,
        deleteRecipeFromState,
        onLikeRecipe,
    };

    return (
        <DataContext.Provider value={contextValues}>
            {children}
        </DataContext.Provider>
    );
}
export const useDataContext = () => {
    const context = useContext(DataContext);

    return context;
};
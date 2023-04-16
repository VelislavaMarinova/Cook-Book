import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import useGetAllRecipes from '../hooks/useGetAllRecipes';
import { recipeServiceFactory } from '../services/recipeService';
import {  useAuthContext } from './AuthContext';

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const { token } = useAuthContext();
    // console.log(`DataContext: ${token}`);
    const {recipes, setRecipes,loading} = useGetAllRecipes();
    const recipeService = recipeServiceFactory(token);

    const onFormClose = () => {
        navigate('/');
    };

    const onCreateSubmit = async (data) => {
        // console.log(data);
        const dataIngredints = data.ingredients.split("||")
        const dataMethods = data.method.split("||")
        data.ingredients=dataIngredints;
        data.method=dataMethods
        // console.log(data);
        const newRecipe = await recipeService.create(data);
        // console.log(newRecipe);

        setRecipes(state => [newRecipe, ...state,]);
        // console.log(recipes);

        navigate('/catalog');
    };

    const onEditSubmit = async (data) => {
         console.log("onEditSubmit",data);
        const dataIngredints = data.ingredients.split("||")
        const dataMethods = data.method.split("||")
        data.ingredients=dataIngredints;
        data.method=dataMethods
    
        await recipeService.edit(data._id, data);
        navigate(`/catalog/${data._id}`);
        
    };

    const deleteRecipeFromState = (recipeId) => {
        setRecipes(state => state.filter(x => x._id !== recipeId));
    };

    const contextValues = {
        recipes,
        loading,
        onCreateSubmit,
        onEditSubmit,
        onFormClose,
        deleteRecipeFromState,
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
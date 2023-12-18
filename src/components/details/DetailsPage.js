import './DetailsPage.css'
import { useParams } from "react-router-dom"
import useGetOneRecipe from '../../hooks/useGetOneRecipe';
import { useState } from 'react';
import DetailsInfo from './DetailsInfo';
import EditPage from '../forms/EditPage';
import Loading from '../loading/Loading';
import PageNotFound from '../notFound/NotFound';

const DetailsPage = () => {
    const [isEditable, setIsEditable] = useState(false)
    const { recipeId } = useParams();
    const { oneRecipe, setOneRecipe, loading, error } = useGetOneRecipe(recipeId);

    const startEditingHandler = () => {
        setIsEditable(true)
    }
    const stopEditingHandler = () => {
        setIsEditable(false)
    }
    if(error){
       return <PageNotFound/>
    }

    if (loading) {
        return <Loading />
    }

    if (!isEditable) {
        return <DetailsInfo data={oneRecipe} onEdit={startEditingHandler} />
    }
    const recipeInfo = { ...oneRecipe }


    const ingredients = recipeInfo.ingredients.join('||');
    recipeInfo.ingredients = ingredients;
    const method = recipeInfo.method.join('||');
    recipeInfo.method = method;

    return <EditPage
        dataForEdit={recipeInfo}
        setIsEditable={setIsEditable}
        setOneRecipe={setOneRecipe}
        onCloseEdit={stopEditingHandler}
    />
};

export default DetailsPage;


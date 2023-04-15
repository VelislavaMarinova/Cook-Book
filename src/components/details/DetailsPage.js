import './DetailsPage.css'
import { useParams } from "react-router-dom"
import useGetOneRecipe from '../../hooks/useGetOneRecipe';
import { useState } from 'react';
import DetailsInfo from './DetailsInfo';
import EditPage from '../forms/EditPage';
import Loading from '../loading/Loading';

const DetailsPage = () => {
    const [isEditable, setIsEditable] = useState(false)
    const { recipeId } = useParams();
    // console.log(recipeId);
    const { selectedRecipe, loading } = useGetOneRecipe(recipeId);
    console.log("before", selectedRecipe, loading);
    if (loading) {
        return <Loading />
    }
    if (!isEditable) {
        // console.log(isEditable, "detailPage");
        return <DetailsInfo data={selectedRecipe} setIsEditable={setIsEditable} />
    }
    const recipeInfo = { ...selectedRecipe }

    const ingredients = recipeInfo.ingredients.join('||');
    recipeInfo.ingredients = ingredients;
    const method = recipeInfo.method.join('||');
    recipeInfo.method = method;

    //console.log(recipeInfo);
    return <EditPage
        dataForEdit={recipeInfo}
        setIsEditable={setIsEditable}
    />
};

export default DetailsPage;


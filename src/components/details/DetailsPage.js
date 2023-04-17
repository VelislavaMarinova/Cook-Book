import './DetailsPage.css'
import { useParams } from "react-router-dom"
import useGetOneRecipe from '../../hooks/useGetOneRecipe';
import { useState } from 'react';
import DetailsInfo from './DetailsInfo';
import EditPage from '../forms/EditPage';
import Loading from '../loading/Loading';

const DetailsPage = () => {
    const [isEditable, setIsEditable] = useState(false)
    console.log(setIsEditable,"setIsEditable");
    const { recipeId } = useParams();
    // console.log(recipeId);
    const {oneRecipe,setOneRecipe, loading } = useGetOneRecipe(recipeId);
    console.log("before", oneRecipe, loading);
    if (loading) {
        return <Loading />
    }
    if (!isEditable) {
        // console.log(isEditable, "detailPage");
        return <DetailsInfo data={oneRecipe} setIsEditable={setIsEditable} />
    }
    const recipeInfo = { ...oneRecipe }

    const ingredients = recipeInfo.ingredients.join('||');
    recipeInfo.ingredients = ingredients;
    const method = recipeInfo.method.join('||');
    recipeInfo.method = method;

    //console.log(recipeInfo);
    return <EditPage
        dataForEdit={recipeInfo}
        setIsEditable={setIsEditable}
        setOneRecipe={setOneRecipe}
    />
};

export default DetailsPage;


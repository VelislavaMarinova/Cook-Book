import './DetailsPage.css'
import { Link, useParams } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext";
import useSelectRecipe from "../../hooks/useSelectRecipe";
import { useState } from 'react';
import DetailsInfo from './DetailsInfo';
import EditPage from '../forms/EditPage';

const DetailsPage = () => {
    const [isEditable,setIsEditable]=useState(false)
    const { isAuthenticated, userId } = useAuthContext();
    const { recipeId } = useParams();
    // console.log(recipeId);
    const { selectedRecipe,setSelectedRecipe, loading } = useSelectRecipe(recipeId);
    console.log("before",selectedRecipe, loading);
    if (loading) {
        return <div>Lodading...</div>
    }
    if(!isEditable){
     console.log(isEditable, "detailPage");
        return <DetailsInfo data={selectedRecipe} setIsEditable={setIsEditable}/>
    }
    const recipeInfo = {...selectedRecipe}

    const ingredients = recipeInfo.ingredients.join('||');
    recipeInfo.ingredients = ingredients;
    const method = recipeInfo.method.join('||');
    recipeInfo.method = method;

    // recipeInfo.ingredients=recipeInfo.ingredients.join('||')
    console.log(recipeInfo);
// console.log("INFO",recipeInfo.ingredients.join('||'));
    return <EditPage dataForEdit={recipeInfo} setIsEditable={setIsEditable} setSelectedRecipe={setSelectedRecipe}/>

    console.log("after",selectedRecipe, loading);
    // console.log(`und: ${selectedRecipe.ingredients}`);
    // console.log(selectedRecipe);

    // const [selectedRecipe, setSelectedRecipe] = useState({});
    // const recipeService = useService(recipeServiceFactory)


    // useEffect(() => {
    //     recipeService.getOne(recipeId)
    //     .then(result => {
    //         setSelectedRecipe(result);
    //     })
    // }, [recipeId]);

    // if (selectedRecipe === undefined) {
    //     // console.log('und');
    // } else (
    //     // console.log(`ingr ${selectedRecipe.ingredients}`)
    //     // selectedRecipe.ingredients?.map(x => console.log(x))
    //     // console.log('ok')

    // )
    //or getOne
    // const selectedRecipe = recipes.find(x => x._id === recipeId)
    // console.log(selectedRecipe);

    //  if (selectedRecipe._id) {
    // console.log('selected');
    // console.log(selectedRecipe);
   
    //    const split= selectedRecipe.ingredients.split(', ')
    // console.log(`selected: ${selectedRecipe}`);
    // let ingredientsArr = JSON.parse(selectedRecipe.ingredients);
    // console.log(ingredientsArr)
    // console.log(isOwner)
    // console.log(loggedUserNotOwner);
  

};
// }
export default DetailsPage;


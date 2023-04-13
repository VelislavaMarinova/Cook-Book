import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";
import { useService } from "./useService";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";


const baseUrl = 'http://localhost:3030/data/recipes'
const sort = '?sortBy=_createdOn%20desc';
const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';


export const useGetByCategory = (category) => {
 
    const [recypesByCategory, setRecypesByCategory] = useState([]);


    

    // const{token}=useContext(AuthContext)
const recipeService = recipeServiceFactory('',category)
// console.log(`recipeServiceFactory No token`);

    useEffect(() => {
        recipeService.getByCategory()
            .then(res => {
                // console.log(res);
                setRecypesByCategory(res)
            })

    }, []);

 
    return recypesByCategory;
}

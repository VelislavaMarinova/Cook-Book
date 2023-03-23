// import { useState,useEffect } from "react";


// const baseUrl = 'http://localhost:3030/data/recipes';
// const selection='?select=_id%2CName%2Curl%2CDescription'

// const useFetchRecipes=()=>{
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//       fetch(`${baseUrl}${selection}`)
//         .then(res => res.json())
//         .then(result => {
//           // console.log(result);
//           setRecipes(result)
  
//         })
//     //   console.log(recipes);
//     }, []);
//     return recipes;
// }
// export default useFetchRecipes;
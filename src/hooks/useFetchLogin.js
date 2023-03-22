// import { useState, useEffect } from "react";

// const baseUrl = 'http://localhost:3030/users';

// const useFetchLogin = (data) => {
//     const [auth, setAuth] = useState([]);

//     useEffect(() => {
//         fetch(`${baseUrl}/login`, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body:JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 console.log(result);
//                 // setRecipes(result)

//             })
       
//     }, [data]);
//     // return result;
// }
// export default useFetchLogin;
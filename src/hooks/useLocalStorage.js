// import { useState } from "react"

// const useLocalStorage=(key,initialValue)=>{
//       const [state, setState]=useState(()=>{
//         const persistedStateSerialized=localStorage.getItem(key);
//         if(persistedStateSerialized){
//             const persistedState=JSON.parse(persistedStateSerialized);

//             return persistedState;
//         }
//         return initialValue;
//       });

//       const setLocalStorageState=(value)=>{
//         setState(value);
//         localStorage.setItem(key, JSON.stringify(value))
//        }

//       return[
//         state,
//         setLocalStorageState,
//       ]
// };
import { useState } from 'react';

 const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? JSON.parse(storedData) : defaultValue;
    });

    const setLocalStorageValue = (newValue) => {
        console.log(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));

        setValue(newValue);
    };

    return [
        value,
        setLocalStorageValue,
    ];
};

export default useLocalStorage;
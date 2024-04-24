import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
    

const MainContext = createContext({
    CurrentUser:'',
    CurrentPage:'',
    setCurrentPage:()=>{},
})

export const MainProvider =({children})=>{
    const [CurrentUser ,setCurrentUser]= useState('Admin');
    const [CurrentPage , setCurrentPage] =useState('')

    useEffect(() => {
        <Navigate to="/" />
    }, [CurrentUser]);

    return (
        <MainContext.Provider value={{
            CurrentUser,
            setCurrentUser,
            CurrentPage,
            setCurrentPage
         }}>
            {children}
        </MainContext.Provider>
    )
}


export const MainData =()=>{
    return useContext(MainContext)
}
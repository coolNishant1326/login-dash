import React, { useState } from "react";
const Context = React.createContext();


const wait = (time) =>{
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    })
}

export function AuthContext({children}){
    const [loggedIn,setLoggedIn]=useState(false)
    const [loading,setLoading]=useState(false)
    const logger ={
        loggedIn:loggedIn,
        loading:loading,
        login:()=>{
            setLoading(true)
            wait(1000).then(()=>{
                setLoggedIn(true)
                setLoading(false)
            })
        },
        logout:()=>{
            setLoading(true)
            wait(1000).then(()=>{
                setLoggedIn(false)
                setLoading(false)
            })
        },
        
    }
    return(
        <Context.Provider value={logger}>
            {children}
        </Context.Provider>
    );
}

export default Context;

import React, { createContext, useState } from 'react'

let appContext=createContext();

const Context = (props) => {
  let storedToken=localStorage.getItem("idToken");
    const [isLoggedin, setIsLoggedIn] = useState(storedToken);
    const [token, setToken] = useState(null);

  return (
    <appContext.Provider value={{isLoggedin:isLoggedin,setIsLoggedIn:setIsLoggedIn,token:token,setToken:setToken}}>
      {props.children}
    </appContext.Provider>
  )
}

export default Context;
export {appContext}

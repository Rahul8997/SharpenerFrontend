import React, { createContext, useState } from 'react'

let appContext=createContext();

const Context = (props) => {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

  return (
    <appContext.Provider value={{isLoggedin:isLoggedin,setIsLoggedIn:setIsLoggedIn,token:token,setToken:setToken}}>
      {props.children}
    </appContext.Provider>
  )
}

export default Context;
export {appContext}

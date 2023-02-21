import React, { createContext, useState } from 'react'

let appContext=createContext();

const Context = (props) => {
    const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <appContext.Provider value={{isLoggedin:isLoggedin,setIsLoggedIn:setIsLoggedIn,token:null}}>
      {props.children}
    </appContext.Provider>
  )
}

export default Context;
export {appContext}

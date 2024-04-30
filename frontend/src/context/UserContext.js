import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const UserContext = createContext(null)

export default ({children}) => {
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
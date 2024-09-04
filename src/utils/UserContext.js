import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState({
        loggedInUser: "default User"
    })
    return(
        <UserContext.Provider value={{userDetails, setUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
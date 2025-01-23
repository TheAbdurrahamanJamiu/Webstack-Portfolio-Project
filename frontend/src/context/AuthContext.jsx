import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState, useContext } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

// authPrrovider

export const AuthProvide = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // registeer a user
    const registerUser = async (email,password) => {
        return await createUserWithEmailAndPassword(auth, email, password); 

    }



    const value = {
        currentUser,
        loading,
        registerUser
    }
    return (
        <AuthContext.Provider value= {value}>
            {children}
        </AuthContext.Provider>

        )
}
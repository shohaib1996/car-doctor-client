import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { PropTypes } from 'prop-types';
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            const user = { email: currentUser?.email }
            if (currentUser) {
                axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .then(error => {
                        console.error(error);
                    })
            } else {
                axios.post("http://localhost:5000/logout", user , { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                })
                .then(error => {
                    console.log(error);
                })
            }

        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user, createUser, signInUser, logOut, loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;
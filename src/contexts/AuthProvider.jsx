import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.Config";
import { useEffect, useState } from "react";



const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loding, setLoding]= useState(true)
    const provider = new GoogleAuthProvider();

    const signUpUser = (email, password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }

    const signOutUser =()=>{
        setLoding(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoding(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        user,
        loding,
        signUpUser,
        signInUser,
        googleSignIn,
        signOutUser

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
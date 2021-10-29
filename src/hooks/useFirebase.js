import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    onAuthStateChanged, signOut, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, updateProfile
} from 'firebase/auth'

initializeAuthentication();

const useFirebase = () => {

    //setting state
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInUsingEmail = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       
    }
    // create new user with email and password
    const createNewUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //adding user's profile name
    const updateUserProfileName = (name) => {
        setIsLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })

    }

    //getting current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //setting the user
                setUser(user);

            } else {
                //user is not signed in
            }
            setIsLoading(false)
        });
        return unsubscribe;
    }, [auth])

    // logOut function 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                console.log("signed out successfully")
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        signInUsingGoogle,
        signInUsingEmail,
        createNewUser,
        updateUserProfileName,
        logOut

    }
}

export default useFirebase;
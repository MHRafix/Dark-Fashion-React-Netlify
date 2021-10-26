import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../FirebaseInfo/Firebase.init";

initializeAuthentication(); // Firebse Authentication Initialization
const useFirebase = () => {
    // Use state for signin method 
    const [user, setUser] = useState({});
    
    // Take auth and provider 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider(); // Create google provider
    const githubProvider = new GithubAuthProvider(); // Create github provider
    
    // Handle Google signin button and error after clicking
    const handleGoogleSignin = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            console.log(res.user);
        }).catch((error) => {
           const errorMessage = error.message;
           console.log(errorMessage);
        });
    }
    
    // Handle Github signin method
    const handleGithubSignin = () => {
          signInWithPopup(auth, githubProvider)
          .then(res => {
              const user = res.user;
              setUser(user);
              console.log(user);
          })
    }

    // Handle signout button and error after clicking 
    const handleSignOut = () => {
          signOut(auth)
          .then(() => {
           setUser({});
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
               setUser(user);
            }
        });
    }, [])

    return {
        user, 
        handleGoogleSignin,
        handleGithubSignin,
        handleSignOut
    }
}

export default useFirebase;
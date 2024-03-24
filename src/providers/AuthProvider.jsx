import React, { createContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile
} from "firebase/auth";
import  app  from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);

    
// create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
// sign in with google
const googleSignIn = async () => {
  setLoading(true);
  try {
      await signInWithPopup(auth, googleProvider);
  } catch (error) {
      console.error("Google Sign-In Error:", error);
  } finally {
      setLoading(false);
  }
};

    

    const updateUserProfile = (name, photo, email) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, email: email
        });
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setLoading(true);
    //         setUser(currentUser);
    //         console.log('current user', currentUser);
            
    //         // get and set token
    //         if(currentUser){
    //             axios.post('https://summer-camp-server-beige.vercel.app/jwt', {email: currentUser.email})
    //             .then(data =>{
    //                 // console.log(data.data.token)
    //                 localStorage.setItem('access-token', data.data.token)
    //                 // setLoading(false);
    //             })
    //         }
    //         else{
    //             localStorage.removeItem('access-token')
    //         }

            
    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [])



  // user monitoring
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User:", currentUser);
      setLoading(true);
      setUser(currentUser);
      if (currentUser) {
        
        if (currentUser.displayName) {
          fetch("https://summer-camp-server-beige.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: currentUser?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("access-token", data?.token);
          });
          const savedUser = {
            name: currentUser.displayName || "",
            email: currentUser.email,
            role: "student",
            image: currentUser.photoURL,
          };
          fetch("https://summer-camp-server-beige.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {});
        }
      } else {
        setUser(null);
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [control]);

  // user logout
  const logOut = () => {
    return signOut(auth);
}




    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile,
        setControl,
        control,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
import initializeAuth from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updatePassword,
  signInWithEmailLink,
  isSignInWithEmailLink,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

initializeAuth();
const useHooks = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [forgetEmail, setForgetEmail] = useState("");
  const auth = getAuth();

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const actionCodeSettings = {
    url: "http://localhost:3000/confirmed-email",
    handleCodeInApp: true,
  };

  const AuthEmailSend = (email) => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const AuthEmailLogin = () => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          setUser(result.user);
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSub;
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };
  const UpdatePass = () => {
    const user = auth.currentUser;
    const newPassword = password;
    updatePassword(user, newPassword)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const ForgetPassword = () => {
    sendPasswordResetEmail(auth, forgetEmail)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    logout,
    error,
    AuthEmailSend,
    UpdatePass,
    setPassword,
    AuthEmailLogin,
    loginUser,
    ForgetPassword,
    setForgetEmail
  };
};

export default useHooks;

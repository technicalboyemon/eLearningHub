import initializeAuth from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  updatePassword,
  signInWithEmailLink,
  isSignInWithEmailLink,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import io from "socket.io-client";

initializeAuth();
const useHooks = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [forgetEmail, setForgetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [realTime, setRealTime] = useState(null);
  const [instructor, setInstructor] = useState({});
  const [admin, setAdmin] = useState({});

  const auth = getAuth();

  useEffect(() => {
    const socket = io("http://localhost:5000/");
    setRealTime(socket);
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users/account?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setInstructor(data[0]?.isInstructor));
  }, [user.email]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/account?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data[0]?.isAdmin));
  }, [user.email]);

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const actionCodeSettings = {
    url: "http://localhost:3000/confirmed-email",
    handleCodeInApp: true,
  };

  const AuthEmailSend = (email) => {
    setIsLoading(true);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const AuthEmailLogin = () => {
    setIsLoading(true);
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
        })
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSub;
  }, []);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  const UpdatePass = () => {
    setIsLoading(true);
    const user = auth.currentUser;
    const newPassword = password;
    updatePassword(user, newPassword)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const ForgetPassword = () => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, forgetEmail)
      .then(() => {
        // Password reset email sent!
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    instructor,
    logout,
    error,
    AuthEmailSend,
    UpdatePass,
    setPassword,
    AuthEmailLogin,
    loginUser,
    ForgetPassword,
    setForgetEmail,
    realTime,
    isLoading,
  };
};

export default useHooks;

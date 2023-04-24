import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDbB7GXx64nZJoWvwF_sRn9SpB0NTFWehc",

  authDomain: "nextchat-282d4.firebaseapp.com",

  projectId: "nextchat-282d4",

  storageBucket: "nextchat-282d4.appspot.com",

  messagingSenderId: "893881672600",

  appId: "1:893881672600:web:12ab6c843e428a973881ed"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//functions 
function register(email: string, password: string) {
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      return (user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default register
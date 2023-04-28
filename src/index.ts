import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as dotenv from 'dotenv'
dotenv.config()

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.apiKey,

  authDomain: process.env.authDomain,

  projectId: process.env.projectId,

  storageBucket: process.env.storageBucket,

  messagingSenderId: process.env.messagingSenderId,

  appId: process.env.appId,

  measurementId: process.env.measurementId

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
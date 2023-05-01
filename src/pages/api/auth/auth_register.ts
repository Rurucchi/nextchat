import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);


export default function register(email: string, password: string) {
  let success = false;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      
      const user = userCredential.user;
      console.log(user);
      success = true;
    })
    .catch((error) => {
      console.error(error);
      // ..
    });
    return success;
}
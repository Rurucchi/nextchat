import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);


export default function register(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.error(error);
      // ..
    });
}
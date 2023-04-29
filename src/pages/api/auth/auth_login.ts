import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);


export default function login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.error(error);
      // ..
    });
}
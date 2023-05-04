import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);

export default async function login(email: string, password: string) {
  let success = false;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user);
      success = true;
    })
    .catch((error) => {
      console.error(error);
    });
  return success;
}

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import firebaseApp from "@/firebaseconfig";
const auth = getAuth(firebaseApp);

export default async function register(email: string, password: string) {
  let success = false;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      // console.log(user);
      success = true;
    })
    .catch((error) => {
      console.error(error);
      // ..
    });
  return success;
}

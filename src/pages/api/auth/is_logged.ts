import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);

export default async function isLogged() {
  let res = false;
  try {
    const user = await auth.currentUser;
    if (user) {
      res = true;
    }
  } catch (error) {
    console.log(error);
  }
  return res;
}

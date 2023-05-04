import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);

export default async function getCurrentUser() {
  let res = null;
  try {
    const user = auth.currentUser;

    let signinProvider;
    let providerUID;
    let displayName;
    let email;
    let photoURL;
    if (user !== null) {
      user.providerData.forEach((profile) => {
        signinProvider = profile.providerId;
        providerUID = profile.uid;
        displayName = profile.displayName;
        email = profile.email;
        photoURL = profile.photoURL;
      });
      res = {
        signinProvider: signinProvider,
        providerUID: providerUID,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      };
    }
  } catch (error) {
    console.log(error);
  }
  return res;
}

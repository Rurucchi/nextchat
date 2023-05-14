import { createUserWithEmailAndPassword, getAuth, User } from "firebase/auth";

import firebaseApp from "@/firebaseconfig";
const auth = getAuth(firebaseApp);

export default function getCurrentUser(user: User | null) {
  let res = null;
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
  return res;
}

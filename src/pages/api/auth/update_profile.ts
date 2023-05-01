import { updateProfile, getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);

export default function updateUserProfile(
  displayName: string,
  photoURL: string
) {
  let success = false;
  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        success = true;
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }
  return success;
}

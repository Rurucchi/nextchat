import { updateProfile, getAuth } from "firebase/auth";
import firebaseApp from "@/firebaseconfig";
const auth = getAuth(firebaseApp);

export default function updateUserProfile(
  displayName: string,
  photoURL: string | null
) {
  let success = false;
  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        success = true;
        console.log("success");
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }
  return success;
}

import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/firebaseconfig";

const db = getFirestore(firebaseApp);

export default async function sendMessage(
  email: string,
  displayName: string,
  pfpUrl: string | null,
  content: string,
  time: number
) {
  try {
    const messageRef = doc(db, "chat", displayName + "-" + time);
    await setDoc(messageRef, { email, displayName, pfpUrl, content, time });
  } catch (error) {
    console.error(error);
  }
}

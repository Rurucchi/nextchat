import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/firebaseconfig";

const db = getFirestore(firebaseApp);

export default async function sendMessage(
  content: string,
  time: number,
  user: string
) {
  try {
    const messageRef = doc(db, "chat", user + "-" + time);
    await setDoc(messageRef, { content, time, user });
  } catch (error) {
    console.error(error);
  }
}

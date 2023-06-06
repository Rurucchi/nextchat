import {
  collection,
  getDocs,
  getFirestore,
  query,
  onSnapshot,
} from "firebase/firestore";
import firebaseApp from "@/firebaseconfig";

const db = getFirestore(firebaseApp);

export default async function getMessageHistory(history: Array<object>) {
  const querySnapshot = await getDocs(collection(db, "chat"));
  querySnapshot.forEach((doc) => {
    history.push(doc.data());
  });
  return history;
}

import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import firebaseApp from "@/firebaseconfig";

const db = getFirestore(firebaseApp);

export default async function socketMessage(history: Array<object>) {
  const q = query(collection(db, "chat"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      history.push(doc.data());
    });
  });
  console.log(history);
  return history;
}

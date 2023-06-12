import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import firebaseApp from "@/firebaseconfig";

const db = getFirestore(firebaseApp);

export default async function getMessageHistory() {
  let history: object[] = [];
  const querySnapshot = await getDocs(
    query(collection(db, "chat"), orderBy("time", "desc"))
  );
  querySnapshot.forEach((doc) => {
    history.push(doc.data());
  });
  return history;
}

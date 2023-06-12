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
    query(collection(db, "chat"), orderBy("time"))
  );
  querySnapshot.forEach((doc) => {
    history.push(doc.data());
  });

  // onsnapshot will query the last element, thats why we delete it here so it won't be returned twice
  history.pop();

  return history;
}

// import {
//   collection,
//   query,
//   orderBy,
//   onSnapshot,
//   limit,
//   getFirestore,
// } from "firebase/firestore";
// import firebaseApp from "@/firebaseconfig";

// const db = getFirestore(firebaseApp);

// export default async function socketMessage(history: Array<object>) {
//   const q = query(collection(db, "chat"), orderBy("time"), limit(1));
//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       history.push(doc.data());
//     });
//   });
//   console.log(history);
//   return history;
// }

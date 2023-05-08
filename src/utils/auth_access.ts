//// ----------- NOT WORKING, HARDCODED IN EVERY PAGE FOR NOW

// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { useRouter } from "next/navigation";

// import firebaseApp from "@/firebaseconfig";
// const auth = getAuth(firebaseApp);

// export default async function AuthAccess(url: string, loggedState: boolean) {
//   const router = useRouter();
//   try {
//     const user = await auth.currentUser;
//     if (loggedState) {
//       if (user) {
//         router.push(url);
//       }
//     } else {
//       if (!user) {
//         router.push(url);
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

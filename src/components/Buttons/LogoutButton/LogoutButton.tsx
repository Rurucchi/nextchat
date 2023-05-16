import { Logout } from "react-iconly";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// firebase
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "@/firebaseconfig";
import { FirebaseError } from "firebase/app";

//css
const css = require("./styles.module.css");
const auth = getAuth(firebaseApp);

export default function LogoutButton() {
  function handleclick() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className={css.position}>
      <Button
        color="error"
        auto
        icon={<Logout set="light" primaryColor="white" />}
        onPress={() => handleclick()}
      />
    </div>
  );
}

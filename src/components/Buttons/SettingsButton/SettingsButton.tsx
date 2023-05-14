import { Setting } from "react-iconly";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const css = require("./styles.module.css");

export default function SettingsButton() {
  return (
    <Link href="/settings" className={css.position}>
      <Button auto icon={<Setting set="curved" primaryColor="white" />} />
    </Link>
  );
}

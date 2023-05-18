import { ArrowLeftSquare } from "react-iconly";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const css = require("./styles.module.css");

export default function GoBackButton() {
  return (
    <Link href="/chat" className={css.position}>
      <Button auto icon={<ArrowLeftSquare set="bold" primaryColor="white" />} />
    </Link>
  );
}

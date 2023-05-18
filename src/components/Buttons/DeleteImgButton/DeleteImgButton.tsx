import { Delete } from "react-iconly";
import { Button } from "@nextui-org/react";

const css = require("./styles.module.css");

interface Callback {
  onPress: Function;
}

export default function DeleteImgButton(
  props: React.PropsWithChildren<Callback>
) {
  let { onPress } = props;
  return (
    <Button
      light
      auto
      icon={<Delete set="bold" primaryColor="white" />}
      onPress={() => {
        onPress();
      }}
    />
  );
}

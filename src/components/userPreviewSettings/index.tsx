import { Image, Text } from "@nextui-org/react";
import React from "react";
const css = require("./styles.module.css");

interface User {
  username: string;
  imgUrl: string | null | undefined;
}

export default function UserPreview(props: React.PropsWithChildren<User>) {
  let { username, imgUrl } = props;

  if (!username) {
    username = "anon";
  }

  return (
    <div className={css.previewContainer}>
      {imgUrl && (
        <Image
          className={css.img}
          showSkeleton
          src={imgUrl}
          maxDelay={10000}
          height={125}
          width={125}
          objectFit="cover"
          alt="profile picture"
        />
      )}
      {!imgUrl && (
        <Image
          className={css.img}
          showSkeleton
          src="/anonPfp/default_pfp.png"
          maxDelay={10000}
          height={125}
          width={125}
          objectFit="cover"
          alt="profile picture"
        />
      )}
      <Text h2>{username}</Text>
    </div>
  );
}

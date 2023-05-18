import { Image, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import React from "react";
const css = require("./styles.module.css");

// components
import DeleteImgButton from "../Buttons/DeleteImgButton/DeleteImgButton";

interface User {
  username: string;
  imgUrl: string | null | undefined;
  callback: Function;
}

export default function UserPreview(props: React.PropsWithChildren<User>) {
  let { username, imgUrl, callback } = props;

  if (!username) {
    username = "anon";
  }

  return (
    <div className={css.previewContainer}>
      <div>
        {imgUrl && (
          <div>
            <div className={css.resetPhoto}>
              <DeleteImgButton onPress={callback} />
            </div>
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
          </div>
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
      </div>
      <Text h2>{username}</Text>
    </div>
  );
}

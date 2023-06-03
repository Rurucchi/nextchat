import { Card, Grid, Text, Tooltip } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const css = require("./styles.module.css");

// ts types
type MessageProps = {
  username: string;
  content: string;
  imgUrl: string | null;
  date: number;
};

export default function Message({
  username,
  imgUrl,
  content,
  date,
}: MessageProps) {
  let time = new Date(date);

  if (!imgUrl) {
    imgUrl = "/anonPfp/default_pfp.png";
  }

  return (
    <div className={css.messageContainer}>
      <Card css={{ p: "$6", mw: "400px" }} isHoverable variant="bordered">
        <Card.Header>
          <div className={css.info}>
            <Avatar squared src={imgUrl} />
            <Text h4 css={{ lineHeight: "$xs" }}>
              {username}
            </Text>
            <Text h6 css={{ color: "$accents8" }} suppressHydrationWarning>
              {time.toLocaleTimeString("en-US")}
            </Text>
          </div>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <p className={css.messageBody}>{content}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

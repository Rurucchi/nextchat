import { Card, Grid, Text, Tooltip } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// ts types
type MessageProps = {
  username: string;
  content: string;
  uid: number;
  date: number;
};

export default function Message({
  username,
  content,
  uid,
  date,
}: MessageProps) {
  let time = new Date(date);
  return (
    <Card css={{ p: "$6", mw: "400px" }} isHoverable>
      <Card.Header>
        <Avatar squared src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={8.3}>
            <Tooltip content={uid}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {username}
              </Text>
            </Tooltip>
          </Grid>
          <Grid>
            <Text h5 css={{ color: "$accents8" }} suppressHydrationWarning>
              {time.toLocaleTimeString("en-US")}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{content}</Text>
      </Card.Body>
    </Card>
  );
}

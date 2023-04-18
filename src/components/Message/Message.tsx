import { Card, Grid, Text, Link } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Message() {
  return (
    <Card
      css={{ p: "$6", mw: "400px" }}
      className={inter.className}
      isHoverable
    >
      <Card.Header>
        <Avatar squared src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next UI
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>nextui.org</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
  );
}

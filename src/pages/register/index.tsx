import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Input,
  Spacer,
  Grid,
  Button,
  Tooltip,
  normalColors,
  NormalColors,
} from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// css stuff
const css = require("./styles.module.css");
const inter = Inter({ subsets: ["latin"] });

// utils
import validateEmail from "../../utils/check_email";

type InputColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

// requests to firebase
import register from "../api/auth/auth_register";

// internal auth stuff
import getCurrentUser from "../api/auth/get_current_user";

export default function Register() {
  //hooks
  const router = useRouter();

  // data
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  //------------- component handling

  const [isDisabled, setIsDisabled] = useState(true);

  // colors
  const [usernameInputColor, setUsernameInputColor] =
    useState<InputColor>("error");
  const [mailInputColor, setMailInputColor] = useState<InputColor>("error");
  const [passwordInputColor, setPasswordInputColor] =
    useState<InputColor>("error");

  const [usernameTooltipText, setUsernameTooltipText] = useState(
    "Username must not be empty"
  );
  const [mailTooltipText, setMailTooltipText] = useState("Email not valid");
  const [passwordTooltipText, setPasswordTooltipText] =
    useState("Password not valid");

  // components useEffect
  useEffect(() => {
    if (username) {
      setUsernameInputColor("success");
      setUsernameTooltipText("✓");
    } else {
      setUsernameInputColor("error");
      setUsernameTooltipText("Username must not be empty");
    }
  }, [username]);

  // states colors & text
  useEffect(() => {
    if (validateEmail(mail)) {
      setMailInputColor("success");
      setMailTooltipText("✓");
    } else {
      setMailInputColor("error");
      setMailTooltipText("Email not valid");
    }
  }, [mail]);

  useEffect(() => {
    if (password.length > 5) {
      setPasswordInputColor("success");
      setPasswordTooltipText("✓");
    } else {
      setPasswordInputColor("error");
      setPasswordTooltipText("Password not valid");
    }
  }, [password]);

  // component enabled
  useEffect(() => {
    if (validateEmail(mail) && password.length > 5 && username) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [mail, password]);

  // RUN ONCE USE EFFECT

  useEffect(() => {
    async function isLogged() {
      let user = await getCurrentUser();
      if (user) {
        router.push("/chat");
      }
    }
    isLogged();
  }, []);

  // Handleclick
  async function handleClick(mail: string, password: string) {
    if (username && mail && password) {
      const request = await register(mail, password);
      if (request) {
        router.push("/chat");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={css.body}>
        <h1 className={inter.className}>Register</h1>
        <Grid.Container gap={3} justify="center" className={inter.className}>
          <Grid>
            <Tooltip
              content={usernameTooltipText}
              trigger="hover"
              color={usernameInputColor}
            >
              <Input
                color={usernameInputColor}
                labelPlaceholder="Username"
                width="250px"
                clearable
                underlined
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip
              content={mailTooltipText}
              trigger="hover"
              color={mailInputColor}
            >
              <Input
                color={mailInputColor}
                labelPlaceholder="Mail"
                width="250px"
                clearable
                underlined
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip
              content={passwordTooltipText}
              trigger="hover"
              color={passwordInputColor}
            >
              <Input.Password
                color={passwordInputColor}
                labelPlaceholder="Password"
                width="250px"
                clearable
                underlined
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Tooltip>
          </Grid>
        </Grid.Container>
        <Spacer y={0.25} />
        <Button
          color="gradient"
          onPress={() => {
            handleClick(mail, password);
          }}
          disabled={isDisabled}
        >
          Register
        </Button>
        <Spacer y={0.5} />
        <p className={inter.className}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </main>
    </>
  );
}

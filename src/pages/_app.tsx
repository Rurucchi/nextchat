import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

// Theming
const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      text: "#ffffff",
    },
    space: {},
    fonts: {},
  },
});

// font
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

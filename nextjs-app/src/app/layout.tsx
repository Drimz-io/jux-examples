"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@jux/dui";
import { useFonts } from "../lib/jux/fonts";
import { juxTheme } from "../lib/jux/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useFonts([
    "Alegreya",
    "Alegreya Sans",
    "Cardo",
    "Inter",
    "Open Sans",
    "Poppins",
  ]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={juxTheme} current="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import "./globals.css";
import type { Metadata } from "next";
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
  useFonts(["Open Sans"]);

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

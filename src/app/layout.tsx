import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: ["/logo.svg"],
  title: "Project Palestine",
  description: "A way for us to boycott the occupation and it’s supporters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lilita+One&display=swap');
        </style>
      </head>
      <ChakraProvider>
        <body className={inter.className}>{children}</body>
      </ChakraProvider>
    </html>
  );
}

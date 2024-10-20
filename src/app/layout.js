import localFont from "next/font/local";

import "./globals.css";

const passionRegular = localFont({
  src: "./fonts/PassionOne-Regular.ttf",
  variable: "--font-PassionOne-Regular",
  weight: "100 900",
});

const passionBold = localFont({
  src: "./fonts/PassionOne-Bold.ttf",
  variable: "--font-PassionOne-Bold",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "git instructor",
  description: "CODED Instructor memory game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${passionRegular.className} ${passionBold.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

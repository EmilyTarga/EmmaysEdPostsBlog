import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

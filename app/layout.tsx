import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fowler Academy — Where Every Student Is Known, Valued, and Empowered to Grow",
  description:
    "Discover an educational community where learning, character, respect, and individual growth work together to help every student build a brighter future.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

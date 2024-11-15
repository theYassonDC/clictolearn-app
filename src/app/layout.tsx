import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clic to learn",
  description: "Aprende a como usar un computador desde 0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

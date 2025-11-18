import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orage Studio",
  description: "Directors & post-production studio based in Paris",
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

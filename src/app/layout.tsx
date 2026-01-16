import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "../components/layouts/MainLayout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxonis OAK 4 D",
  description:
    "Discover the power of Luxonis OAK 4, the next-generation AI and depth sensing device designed for advanced computer vision applications. Explore its cutting-edge features, robust build, and unparalleled performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`min-h-screen flex flex-col ${inter.className}`}>
          <Navbar />
          <div className="flex-1 flex">
            <div className="w-full">{children}</div>
          </div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}

import { AppProps } from "next/app";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex-grow">
        <Component {...pageProps} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </main>
      <Footer />
    </div>
  );
}

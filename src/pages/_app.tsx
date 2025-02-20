import { AppProps } from "next/app";
import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <main className="flex-grow">
          <Component {...pageProps}/>
        </main>
      </Layout>
    </div>
  );
}

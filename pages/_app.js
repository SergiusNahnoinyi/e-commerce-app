import { Toaster } from "react-hot-toast";

import Layout from "@/components/Common/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  );
}

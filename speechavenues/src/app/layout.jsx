import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Speech Avenues",
  description: "Speech and Occupational Therapy Services located in Rockledge, Florida.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="h-full">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

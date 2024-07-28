import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Speech Avenues Therapy - Home",
  description:
    "Speech Avenues Therapy Co offers speech therapy and occupational therapy services in Rockledge Florida. SATC offers an array of speech and communication services with a focus on Autism Spectrum Disorder (ASD), Downs Syndrome and Cerebral Palsy in both adults and children.",
  keywords: [
    "speech therapy",
    "occupational therapy",
    "satc",
    "school for autism",
    "autism",
    "cerebral palsy",
    "downs syndrome",
    "child with autism",
    "adult with autism",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

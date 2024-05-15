import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export const metadata = {
  title: "Speech Avenues",
  description: "Speech and Occupational Therapy Services located in Rockledge, Florida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

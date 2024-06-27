import Image from "next/image";
import Navbar from "./components/page_components/Navbar";
import Hero from "./components/page_components/Hero";
import Focus from "./components/page_components/Focus";
import Blogs from "./components/page_components/Blogs";
import Footer from "./components/page_components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Hero />
      <Focus />
      <Blogs />
      <Footer />
    </main>
  );
}

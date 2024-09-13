import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuBar from "@/components/MenuBar";
import Reservation from "@/components/Reservation";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <MenuBar />
      <Reservation />
      <About />
      <Footer />
    </main>
  );
}

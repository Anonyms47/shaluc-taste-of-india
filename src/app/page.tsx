import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Cuisine } from "@/components/sections/Cuisine";
import { Spices } from "@/components/sections/Spices";
import { Menu } from "@/components/sections/Menu";
import { Place } from "@/components/sections/Place";
import { DakarIndia } from "@/components/sections/DakarIndia";
import { Reviews } from "@/components/sections/Reviews";
import { Visit } from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Story />
        <Cuisine />
        <Spices />
        <Menu />
        <Place />
        <DakarIndia />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}

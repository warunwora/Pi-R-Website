import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Products from "@/components/Products";
import Academy from "@/components/Academy";
import Partners from "@/components/Partners";
import Articles from "@/components/Articles";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Appear from "@/components/Appear";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Appear><Clients /></Appear>
      <Appear><Products /></Appear>
      <Appear><Academy /></Appear>
      <Appear><Partners /></Appear>
      <Appear><Articles /></Appear>
      <Appear><FAQ /></Appear>
      <Appear><Footer /></Appear>
    </>
  );
}

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import WhyChooseCardy from "./components/WhyChooseCardy";
import DownloadCTA from "./components/DownloadCTA";


export default function Home() {
  return (
  <div>
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <WhyChooseCardy />
    <DownloadCTA />
    <Footer />
  </div>
  );
}

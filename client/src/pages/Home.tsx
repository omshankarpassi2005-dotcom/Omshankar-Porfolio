import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-background min-h-screen text-foreground overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </motion.div>
  );
}

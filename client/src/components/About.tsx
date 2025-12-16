import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// @ts-ignore - vanta has no types
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import wireframeImg from "@assets/generated_images/colorful_digital_glass_texture.png";
// @ts-ignore - import docx as URL so Vite serves a downloadable path
import cvFile from "../assets/Omshankar CV.docx?url";
import Model3D from "./Model3D";

export default function About() {
  const cards = [
    { icon: <Code className="w-6 h-6 text-cyan-400" />, title: "Development", desc: "Building robust web solutions" },
    { icon: <Palette className="w-6 h-6 text-pink-400" />, title: "Design", desc: "Crafting visual identities" },
    { icon: <Sparkles className="w-6 h-6 text-purple-400" />, title: "Strategy", desc: "Driving digital growth" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Vanta background scoped to About section */}
      <VantaBackground />
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left: 3D model (replaces previous static image) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* subtle background glow behind the model container (made transparent per request) */}
          <div className="absolute inset-0 rounded-3xl bg-transparent" aria-hidden />

          <div className="relative rounded-3xl overflow-hidden bg-transparent border-0 shadow-none w-full h-[640px] md:h-[760px]">
            <Model3D src="/stylized student 3d model.glb" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-background border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 z-10"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="font-bold text-sm">Open to Work</span>
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Omshankar?</span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              I’m a tech-savvy Digital Marketing and Web Development professional with hands-on experience in <span className="text-white font-bold">SEO, social media strategy, content creation, and website management</span>I believe in building visually engaging, fast, and SEO-optimized digital experiences that bridge creativity with performance. From strategy to execution, I focus on delivering measurable growth for brands and businesses.
            </p>

            <div className="grid gap-4 mb-8">
              {cards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg">{card.icon}</div>
                  <div>
                    <h3 className="font-bold text-white">{card.title}</h3>
                    <p className="text-sm text-white/50">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a 
              href={cvFile}
              download="Omshankar_CV.docx"
              className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Download CV <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VantaBackground() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && ref.current) {
      setVantaEffect(
        NET({
          el: ref.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff0052,
          backgroundColor: 0x130631,
          points: 12.0,
          maxDistance: 22.0,
          spacing: 18.0,
        })
      );
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
      aria-hidden
    />
  );
}

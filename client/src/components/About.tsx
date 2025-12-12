import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code, Palette } from "lucide-react";
import wireframeImg from "@assets/generated_images/colorful_digital_glass_texture.png";

export default function About() {
  const cards = [
    { icon: <Code className="w-6 h-6 text-cyan-400" />, title: "Development", desc: "Building robust web solutions" },
    { icon: <Palette className="w-6 h-6 text-pink-400" />, title: "Design", desc: "Crafting visual identities" },
    { icon: <Sparkles className="w-6 h-6 text-purple-400" />, title: "Strategy", desc: "Driving digital growth" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left: Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-3xl blur-2xl opacity-40 animate-pulse" />
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl">
            <img 
              src={wireframeImg} 
              alt="Creative Process" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
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
              I'm a tech-savvy Digital Marketing & Web Development professional who believes in the power of <span className="text-white font-bold">colorful, engaging, and functional</span> design. I bridge the gap between aesthetic creativity and technical performance.
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
              href="/attached_assets/Omshankar_CV_1765536846586.docx"
              target="_blank"
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

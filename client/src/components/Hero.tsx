import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@assets/generated_images/vibrant_liquid_iridescent_3d_gradient_shapes.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/30 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Parallax Content */}
      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 font-bold uppercase tracking-widest text-xs">
              Portfolio 2025
            </span>
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            <span className="text-white">Creative</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Developer
            </span>
          </h1>

          <p className="font-sans text-lg text-white/70 leading-relaxed max-w-lg mb-10">
            I craft immersive digital experiences by blending technical expertise in web development with creative marketing strategies.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white font-bold uppercase tracking-wider"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side Visual */}
        <motion.div 
          style={{ y }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 relative"
        >
           {/* Glass Card containing the image */}
           <div className="relative z-10 rounded-3xl overflow-hidden glass-panel p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroBg} 
                alt="Abstract 3D Art" 
                className="rounded-2xl w-full object-cover shadow-2xl"
              />
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/50 rounded-full blur-3xl" />
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/50 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

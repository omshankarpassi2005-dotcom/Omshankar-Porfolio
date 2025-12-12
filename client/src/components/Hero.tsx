import { motion, useScroll, useTransform } from "framer-motion";
import userImage from "@assets/DP_1765537446420.jpg";

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

        {/* Right Side Visual - User Image with Cyber Effect */}
        <motion.div 
          style={{ y }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 relative flex justify-center md:justify-end"
        >
           {/* Cyber Frame Container */}
           <div className="relative z-10 w-full max-w-md aspect-[3/4] group">
              {/* Animated Border Gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              
              {/* Glass Card */}
              <div className="relative h-full w-full bg-black/40 backdrop-blur-sm rounded-[2rem] p-2 overflow-hidden border border-white/10">
                {/* Image Mask/Container */}
                <div className="h-full w-full rounded-[1.5rem] overflow-hidden relative">
                   {/* Duotone/Overlay Effect */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-cyan-900/20 mix-blend-overlay z-10 pointer-events-none" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                   
                   <img 
                     src={userImage} 
                     alt="Omshankar Passi" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-[0.8] contrast-125 group-hover:saturate-100"
                   />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-black/80 border border-white/20 backdrop-blur-md p-4 rounded-xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                  <span className="font-bold text-sm text-white">Online & Creative</span>
                </div>
              </motion.div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl pointer-events-none" />
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

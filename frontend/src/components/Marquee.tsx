import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden py-6 bg-background border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">
              Digital Marketing
            </span>
            <span className="text-2xl text-accent">★</span>
            <span className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">
              social Management
            </span>
            <span className="text-2xl text-accent">★</span>
            <span className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">
              Web Development
            </span>
            <span className="text-2xl text-accent">★</span>
            <span className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">
              Multimidia & Graphic Designer
            </span>
            <span className="text-2xl text-accent">★</span>
            <span className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">
              Artist
            </span>
            <span className="text-2xl text-accent">★</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

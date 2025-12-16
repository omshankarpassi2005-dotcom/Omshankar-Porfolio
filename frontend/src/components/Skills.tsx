import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Digital Strategy",
    color: "bg-pink-500",
    items: ["SEO (Technical & On-Page)", "Social Media Management", "Branding Strategy", "Market Research", "Marketing Automation", "Content Creation"]
  },
  {
    title: "Creative Tools",
    color: "bg-cyan-500",
    items: ["Canva", "GIMP", "CapCut", "Graphic Design", "Video Editing"]
  },
  {
    title: "Development",
    color: "bg-purple-500",
    items: ["WordPress", "Front-end Technologies", "Google Analytics", "Jira", "MS Office Suite"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-current"
              style={{ borderColor: idx === 0 ? '#ec4899' : idx === 1 ? '#06b6d4' : '#a855f7' }}
            >
              <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${category.color} shadow-[0_0_10px_currentColor]`} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/90 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

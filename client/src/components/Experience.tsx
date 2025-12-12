import { motion } from "framer-motion";

const experiences = [
  {
    role: "Digital Marketing Intern",
    company: "L4RG",
    period: "Jul 2025 – Oct 2025",
    color: "from-pink-500 to-rose-500",
    description: "Led revenue generation initiatives through targeted digital strategies. Conducted comprehensive market research."
  },
  {
    role: "SEO Intern",
    company: "MyCaptain",
    period: "Feb 2025 – Jun 2025",
    color: "from-purple-500 to-indigo-500",
    description: "Managed WordPress infrastructure and optimized content for search engines. Enhanced brand visibility."
  },
  {
    role: "Live Project Intern",
    company: "CareerCarve",
    period: "Nov 2024 – Jan 2025",
    color: "from-cyan-500 to-blue-500",
    description: "Designed digital creatives and managed social media platforms. Collaborated on live marketing campaigns."
  },
  {
    role: "Retail Salesperson",
    company: "Max Fashion",
    period: "Nov 2024 – Feb 2025",
    color: "from-emerald-500 to-teal-500",
    description: "Provided exceptional customer service and sales support in a fast-paced retail environment."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent uppercase tracking-widest font-bold text-sm">Career Path</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">Work Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Gradient Border/Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500`} />
              
              <div className="relative h-full glass-panel p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/80">{exp.period}</span>
                  </div>
                  <h4 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${exp.color} mb-4`}>
                    {exp.company}
                  </h4>
                  <p className="text-white/70 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

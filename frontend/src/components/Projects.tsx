import { motion } from "framer-motion";
import project1 from "@assets/generated_images/abstract_dashboard_data_visualization_glowing.png";
import project2 from "@assets/generated_images/seo_search_digital_network_glowing.png";
import project3 from "@assets/generated_images/social_media_creative_collage_abstract.png";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Revenue Growth Dashboard",
    category: "Data Strategy",
    image: project1,
    description: "Implemented digital strategies for L4RG resulting in measurable revenue uptake.",
    tags: ["Analytics", "Strategy", "Growth"]
  },
  {
    title: "SEO Infrastructure",
    category: "Web Development",
    image: project2,
    description: "Optimized WordPress architecture for MyCaptain, boosting organic traffic.",
    tags: ["SEO", "WordPress", "Optimization"]
  },
  {
    title: "Digital Brand Campaign",
    category: "Social Media",
    image: project3,
    description: "Executed high-engagement social campaigns for CareerCarve.",
    tags: ["Branding", "Content", "Design"]
  }
];

export default function Projects() {
  return (
    <section className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="text-accent uppercase tracking-widest font-bold text-sm block mb-2">Selected Works</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-right md:text-left">
            A selection of projects where strategy meets design and execution.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-video">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5 space-y-6">
                <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">0{index + 1} / {project.category}</span>
                <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight">{project.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-accent transition-colors group/btn">
                    View Case Study <ArrowUpRight className="w-5 h-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

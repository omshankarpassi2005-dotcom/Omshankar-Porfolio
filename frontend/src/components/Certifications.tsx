import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Cpu,
  TrendingUp,
  Eye,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

// Certificate images
// @ts-ignore
import aiCertUrl from "@assets/WhatsApp Image 2025-12-14 at 8.08.54 PM.jpeg?url";
// @ts-ignore
import itCertUrl from "@assets/WhatsApp Image 2025-12-11 at 8.03.35 PM.jpeg?url";
// @ts-ignore
import spmCertUrl from "@assets/WhatsApp Image 2025-12-11 at 8.03.35 PM (2).jpeg?url";
// @ts-ignore
import finCertUrl from "@assets/WhatsApp Image 2025-12-11 at 8.03.35 PM (1).jpeg?url";
// @ts-ignore
import dmCertUrl from "@assets/Omshankar_complition_certificate.png?url";

const certifications = [
  {
    title: "Digital Marketing Course",
    issuer: "Tutedude",
    date: "Nov 2025",
    shortDescription:
      "Hands-on training in SEO, social media marketing, and data-driven digital strategies.",
    fullDescription:
      "This comprehensive Digital Marketing certification strengthened my expertise in SEO, social media marketing, content strategy, and performance analytics. I gained practical experience in keyword research, on-page and off-page SEO, social media algorithms, audience targeting, and campaign optimization. The course emphasized data-driven decision-making to improve brand visibility, engagement, and lead generation across multiple digital platforms.",
    icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
    image: dmCertUrl
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "Lenovo Leap NextGen Scholar",
    date: "2025",
    shortDescription:
      "Practical exposure to artificial intelligence and machine learning fundamentals.",
    fullDescription:
      "This internship provided hands-on exposure to artificial intelligence and machine learning concepts, including real-world applications of AI models in modern technology ecosystems. I worked with data handling, automation workflows, and intelligent system logic, strengthening my analytical thinking and understanding of AI-driven digital solutions.",
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
    image: aiCertUrl
  },
  {
    title: "Information Technology",
    issuer: "Manipal Institute of Computer Education",
    date: "2022 – 2023",
    shortDescription:
      "Strong foundation in computer systems, software development, and IT infrastructure.",
    fullDescription:
      "This certification built a solid foundation in computer systems, software development life cycles, and IT infrastructure management. I developed technical proficiency in system operations, application workflows, and technology support processes essential for modern web applications and enterprise environments.",
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50",
    image: itCertUrl
  },
  {
    title: "Software Project Management",
    issuer: "Short-Term Course",
    date: "2024 – 2025",
    shortDescription:
      "Learned agile methodologies and project tracking for efficient delivery.",
    fullDescription:
      "This course focused on software project planning, agile methodologies, and project tracking tools. I learned how to manage timelines, allocate resources, monitor progress, and collaborate effectively with development teams to deliver projects within scope and deadlines.",
    icon: <BadgeCheck className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    image: spmCertUrl
  },
  {
    title: "Financial Literacy Achievement",
    issuer: "MES Vasant Joshi College",
    date: "2024",
    shortDescription:
      "Fundamentals of financial planning, budgeting, and investment awareness.",
    fullDescription:
      "This certification enhanced my understanding of financial planning, investment fundamentals, budgeting strategies, and economic awareness. The knowledge supports better decision-making in business environments and strengthens my understanding of financial responsibility in professional settings.",
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50",
    image: finCertUrl
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
        setShowDesc(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setSelectedCert(null);
      setShowDesc(false);
    }
  };

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent uppercase tracking-widest font-bold text-sm block mb-4">
            Credentials & Learning
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase">
            Certifications
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => {
                setSelectedCert(cert);
                setShowDesc(false);
              }}
              role="button"
              tabIndex={0}
              className={`group relative p-8 rounded-2xl glass-panel border border-white/10 hover:bg-white/5 transition-all cursor-pointer ${cert.border}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit border border-white/10">
                  {cert.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-white/60 text-sm font-bold uppercase mb-4">
                  {cert.issuer}
                </p>

                <p className="text-white/70 text-sm mb-6 flex-grow">
                  {cert.shortDescription}
                </p>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-white/40">
                    Issued: {cert.date}
                  </span>
                  <BadgeCheck className="w-4 h-4 text-green-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 max-w-3xl w-full p-6 rounded-2xl bg-black/70 ring-1 ring-white/10"
            >
              <button
                onClick={() => {
                  setSelectedCert(null);
                  setShowDesc(false);
                }}
                className="absolute top-4 right-4 p-2 bg-black/40 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate`}
                  className="max-w-[380px] rounded-md object-contain"
                  loading="lazy"
                />

                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-4">
                    {selectedCert.issuer} — {selectedCert.date}
                  </p>

                  <button
                    onClick={() => setShowDesc((p) => !p)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-md text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    {showDesc ? "Hide Description" : "View Description"}
                  </button>

                  {showDesc && (
                    <p
                      itemProp="description"
                      className="mt-4 text-sm leading-relaxed text-white/80"
                    >
                      {selectedCert.fullDescription}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}

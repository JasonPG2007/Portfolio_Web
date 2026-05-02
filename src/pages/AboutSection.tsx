import { motion } from "framer-motion";
import { Cpu, Globe, Layout } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="relative z-10 w-full py-32 border-t border-white/5"
      >
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky Header */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-center gap-4 mb-6"
                >
                  <span className="text-accent-teal font-paragraph text-sm">
                    01.
                  </span>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
                    System <br />
                    <span className="text-muted-text">Overview</span>
                  </h2>
                </motion.div>
                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-accent-teal/30 to-transparent mt-8" />
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="prose prose-invert max-w-none"
              >
                <p className="text-2xl md:text-3xl font-heading leading-tight text-foreground mb-8">
                  Backend-focused Software Developer experienced in{" "}
                  <span className="text-accent-teal">
                    ASP.NET Core (.NET 8)
                  </span>
                  , <span className="text-accent-teal">SQL Server</span>, and
                  building scalable APIs.
                </p>
                <p className="text-lg text-muted-text leading-relaxed font-paragraph">
                  I specialize in architecting robust, production-ready systems
                  that solve complex real-world problems. My engineering
                  philosophy centers on performance, scalability, and creating
                  seamless integrations between advanced AI models and
                  traditional backend infrastructure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "AI-Powered Systems",
                    desc: "LLM agents, function calling, image search with CLIP embeddings.",
                    icon: <Cpu className="w-6 h-6 text-accent-rock-blue" />,
                  },
                  {
                    title: "Real-Time Architecture",
                    desc: "Low-latency coordination and synchronization using SignalR.",
                    icon: <Globe className="w-6 h-6 text-accent-teal" />,
                  },
                  {
                    title: "Accessible Development",
                    desc: "Strict adherence to WCAG compliance and inclusive design.",
                    icon: <Layout className="w-6 h-6 text-accent-rock-blue" />,
                  },
                  {
                    title: "Open Source",
                    desc: "Active contributor to ABP Framework (14k+ stars).",
                    icon: <FaGithub className="w-6 h-6 text-accent-teal" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 border border-white/10 bg-card-background/20 backdrop-blur-sm hover:border-accent-teal/30 transition-colors group"
                  >
                    <div className="mb-4 p-3 bg-white/5 inline-block rounded-lg group-hover:bg-accent-teal/10 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-text font-paragraph">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

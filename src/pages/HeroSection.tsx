import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

export default function HeroSection() {
  // --- Scroll Tracking for Parallax ---
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative z-10 w-full min-h-screen flex items-center justify-center pt-20"
      >
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Right Column: Profile Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="lg:col-span-4 relative h-auto flex items-center justify-center order-first lg:order-last"
            >
              <div className="relative w-full flex items-center justify-center">
                {/* Profile Info Container */}
                <div className="relative w-full p-8 border-2 border-accent-teal/30 clip-diagonal bg-card-background/20 backdrop-blur-md overflow-hidden group">
                  <div className="space-y-6">
                    {/* Status */}
                    <div className="flex justify-between items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-terminal w-8 h-8 text-accent-teal opacity-50"
                      >
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" x2="20" y1="19" y2="19"></line>
                      </svg>
                      <div className="text-xs text-accent-teal/50 font-paragraph">
                        STATUS: ONLINE
                      </div>
                    </div>

                    {/* Core Focus */}
                    <div>
                      <p className="text-xs text-muted-text uppercase tracking-widest font-paragraph mb-2">
                        Core Focus
                      </p>
                      <p className="text-base font-paragraph text-foreground">
                        Backend & AI Integration
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-accent-teal/30 to-transparent" />

                    {/* Primary Stack */}
                    <div>
                      <p className="text-xs text-muted-text uppercase tracking-widest font-paragraph mb-2">
                        Primary Stack
                      </p>
                      <p className="text-base font-paragraph text-foreground">
                        .NET 8 | SQL Server
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-accent-rock-blue/60 to-transparent" />

                    {/* Experience */}
                    <div>
                      <p className="text-xs text-muted-text uppercase tracking-widest font-paragraph mb-2">
                        Experience
                      </p>
                      <p className="text-base font-paragraph text-foreground">
                        Freelance & Open Source
                      </p>
                    </div>

                    {/* Internship Badge */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded">
                        <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                        <span className="text-xs text-accent-teal font-paragraph uppercase tracking-widest font-semibold">
                          Available for Internship
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent-teal/30" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-rock-blue/30" />
              </div>
            </motion.div>

            {/* Left Column: Typography & CTA */}
            <div className="lg:col-span-8 flex flex-col justify-center order-last lg:order-first">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12 bg-accent-teal" />
                <span className="text-accent-teal font-paragraph text-sm tracking-widest uppercase">
                  System Architect
                </span>
                <div className="flex items-center gap-2 text-muted-text text-sm ml-4">
                  <MapPin className="w-4 h-4" />
                  Lawrenceville, GA
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] tracking-tighter mb-6"
              >
                QUOC BAO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-text">
                  AN NGUYEN
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="font-paragraph text-xl md:text-2xl text-accent-teal mb-8 max-w-2xl"
              >
                Software Engineer | Backend Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-lg md:text-xl text-muted-text mb-8 max-w-3xl leading-relaxed border-l-2 border-accent-rock-blue/30 pl-6"
              >
                Building scalable backend systems and AI-powered applications
                with real-world impact. Passionate about AI orchestration and
                performance optimization. Open source contributor to the ABP
                Framework (14k+ stars).
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="mb-12 inline-flex items-center gap-3 px-6 py-3 border border-accent-teal/40 bg-accent-teal/5 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                <span className="text-accent-teal font-paragraph text-sm uppercase tracking-widest font-semibold">
                  OPEN SOURCE CONTRIBUTOR @ ABP FRAMEWORK (14k+ ⭐)
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-6"
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group relative px-8 py-4 bg-accent-teal text-primary-foreground font-heading font-bold uppercase tracking-wider overflow-hidden clip-diagonal transition-transform hover:scale-105 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Now <ArrowUpRight className="w-5 h-5" />
                  </span>
                </button>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/JasonPG2007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-accent-teal/20 text-foreground hover:text-accent-teal hover:border-accent-teal/50 transition-colors clip-diagonal-reverse bg-card-background/30 backdrop-blur-sm"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/quoc-bao-an-nguyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-accent-teal/20 text-foreground hover:text-accent-teal hover:border-accent-teal/50 transition-colors clip-diagonal-reverse bg-card-background/30 backdrop-blur-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:baoandng07@gmail.com"
                    className="p-4 border border-accent-teal/20 text-foreground hover:text-accent-teal hover:border-accent-teal/50 transition-colors clip-diagonal-reverse bg-card-background/30 backdrop-blur-sm"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="https://dev.to/jasonpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-accent-teal/20 text-foreground hover:text-accent-teal hover:border-accent-teal/50 transition-colors clip-diagonal-reverse bg-card-background/30 backdrop-blur-sm"
                    aria-label="Dev.to"
                  >
                    <SiDevdotto className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-text tracking-widest uppercase">
            Scroll to explore
          </span>
          <button
            onClick={() => scrollToSection("about")}
            className="text-accent-teal hover:text-white transition-colors cursor-pointer"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </section>
    </>
  );
}

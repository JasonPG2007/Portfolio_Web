import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
  ArrowUpRight,
  Terminal,
  Database,
  Code2,
  Cpu,
  Layout,
  Server,
} from "lucide-react";
import type { Skills } from "@/entities/skills";
import { skillsData } from "@/entities";
import type { Projects } from "@/entities/projects";
import { projectsData } from "@/entities";
import type { Experience } from "@/entities/experience";
import { experienceData } from "@/entities";
import type { Education } from "@/entities/education";
import { educationData } from "@/entities";
import type { Certifications } from "@/entities/certifications";
import { certificationsData } from "@/entities";
import type { OpenSourceContributions } from "@/entities/opensource";
import { openSourceContributionsData } from "@/entities";
import type { TechWriting } from "@/entities/techwriting";
import { techWritingData } from "@/entities";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

// --- Scoped Custom Styles ---
const customStyles = `
  .tech-grid-bg {
    background-image: 
      linear-gradient(to right, rgba(0, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 4rem 4rem;
    mask-image: radial-gradient(circle at center, black, transparent 80%);
  }
  
  .clip-diagonal {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%);
  }

  .clip-diagonal-reverse {
    clip-path: polygon(0 0, calc(100% - 2rem) 0, 100% 2rem, 100% 100%, 0 100%);
  }

  .text-glow-teal {
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  }
`;

export default function HomePage() {
  // --- Canonical Data Sources ---
  const [skills, setSkills] = useState<Skills[]>([]);
  const [projects, setProjects] = useState<Projects[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<Certifications[]>([]);
  const [openSource, setOpenSource] = useState<OpenSourceContributions[]>([]);
  const [techWriting, setTechWriting] = useState<TechWriting[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Scroll Tracking for Parallax ---
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 2000], [0, 500]);

  useEffect(() => {
    setSkills(skillsData);
    setProjects(projectsData);
    setExperiences(experienceData);
    setEducation(educationData);
    setCertifications(certificationsData);
    setOpenSource(openSourceContributionsData);
    setTechWriting(techWritingData);
    setIsLoading(false);
  }, []);

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skills[]>,
  );

  // Helper to get an icon based on category string
  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("language")) return <Code2 className="w-5 h-5" />;
    if (cat.includes("framework")) return <Layout className="w-5 h-5" />;
    if (cat.includes("database")) return <Database className="w-5 h-5" />;
    if (cat.includes("cloud") || cat.includes("tool"))
      return <Server className="w-5 h-5" />;
    if (cat.includes("concept")) return <Cpu className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph selection:bg-accent-teal/30 selection:text-accent-teal overflow-clip">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-20">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-rock-blue/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent-teal/10 blur-[150px]" />
        </motion.div>
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
      </div>

      {/* --- HERO SECTION --- */}
      <HeroSection></HeroSection>

      {/* --- ABOUT SECTION (Sticky Side Layout) --- */}
      <AboutSection></AboutSection>

      {/* --- SKILLS SECTION (Data-Driven Grid) --- */}
      <section
        id="skills"
        className="relative z-10 w-full py-32 bg-card-background/40 border-y border-white/5"
      >
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div>
              <span className="text-accent-teal font-paragraph text-sm mb-4 block">
                02.
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
                Technical <span className="text-muted-text">Skills</span>
              </h2>
            </div>
            <div className="text-muted-text font-paragraph text-sm max-w-md">
              A comprehensive breakdown of languages, frameworks, and tools
              utilized in production environments.
            </div>
          </motion.div>

          <div
            className={`transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
          >
            {skills.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(groupedSkills).map(
                  ([category, categorySkills], idx) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative p-8 border border-white/10 bg-background/50 backdrop-blur-md overflow-hidden group hover:border-accent-teal/40 transition-colors"
                    >
                      {/* Background Glow on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-white/5 rounded text-accent-teal">
                            {getCategoryIcon(category)}
                          </div>
                          <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">
                            {category}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map((skill) => (
                            <span
                              key={skill._id}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 text-sm text-[#a0a0a0] font-paragraph hover:text-accent-teal hover:border-accent-teal/30 transition-colors cursor-default"
                            >
                              {skill.skillName}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border border-dashed border-white/20">
                <span className="text-muted-text font-paragraph">
                  Awaiting skill data...
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (Vertical Sticky Narrative) --- */}
      <section id="projects" className="relative z-10 w-full py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-teal font-paragraph text-sm mb-4 block">
              03.
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
              Featured <span className="text-muted-text">Deployments</span>
            </h2>
          </motion.div>
        </div>

        <div
          className={`relative w-full transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
        >
          {projects.length > 0 ? (
            <div className="space-y-32 md:space-y-0">
              {projects.map((project, idx) => (
                <div
                  key={project._id}
                  className="md:sticky md:top-0 md:h-screen w-full flex items-center justify-center overflow-hidden bg-background"
                  style={{ zIndex: idx + 10 }}
                >
                  {/* Project Background Overlay to separate stacked cards */}
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none" />
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent md:hidden" />

                  <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      {/* Project Info */}
                      <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-accent-rock-blue font-paragraph text-sm font-bold">
                            [{String(idx + 1).padStart(2, "0")}]
                          </span>
                          <div className="h-px flex-grow bg-white/10" />
                        </div>

                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                          {project.title}
                        </h3>

                        <p className="text-muted-text font-paragraph text-base md:text-lg mb-8 leading-relaxed">
                          {project.description}
                        </p>

                        {project.technologies && (
                          <div className="mb-8">
                            <div className="text-xs text-accent-teal uppercase tracking-widest mb-3 font-paragraph">
                              Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies
                                .split(",")
                                .map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-accent-teal/10 text-accent-teal text-xs font-paragraph border border-accent-teal/20"
                                  >
                                    {tech.trim()}
                                  </span>
                                ))}
                            </div>
                          </div>
                        )}

                        {project.achievements && (
                          <div className="mb-10">
                            <div className="text-xs text-accent-rock-blue uppercase tracking-widest mb-3 font-paragraph">
                              Key Metrics & Features
                            </div>
                            <ul className="space-y-3">
                              {project.achievements
                                .split("\n")
                                .filter((a) => a.trim())
                                .map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-foreground font-paragraph"
                                  >
                                    <div className="w-1.5 h-1.5 bg-accent-rock-blue rounded-full mt-1.5 flex-shrink-0" />
                                    <span className="leading-relaxed">
                                      {achievement.trim()}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-4">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-foreground hover:bg-white/5 hover:border-accent-teal/50 transition-all font-paragraph text-sm uppercase tracking-wider"
                            >
                              <FaGithub className="w-4 h-4" /> Source Code
                            </a>
                          )}
                          {project.liveDemoLink && (
                            <a
                              href={project.liveDemoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-teal/10 text-accent-teal border border-accent-teal/30 hover:bg-accent-teal hover:text-foreground transition-all font-paragraph text-sm uppercase tracking-wider"
                            >
                              <ExternalLink className="w-4 h-4" /> Live Site
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Image / Visual */}
                      <div className="lg:col-span-7 order-1 lg:order-2 relative">
                        <div className="aspect-video md:aspect-[4/3] lg:aspect-video relative overflow-hidden border border-white/10 bg-card-background/50 group">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title || "Project Visual"}
                              width={1200}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                          ) : (
                            // Fallback structural image if CMS data is missing image
                            <img
                              src="https://static.wixstatic.com/media/bd17b4_ef8b1b091aa04f72abd3a1666a7369a1~mv2.png?originWidth=1152&originHeight=640"
                              alt="Project Placeholder"
                              width={1200}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
                            />
                          )}

                          {/* Tech Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                          <div className="absolute top-4 right-4 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border border-white/5 pointer-events-none hidden md:block" />
                        <div className="absolute -inset-8 border border-white/5 pointer-events-none hidden lg:block" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full max-w-[120rem] mx-auto px-6 h-64 flex items-center justify-center border border-dashed border-white/20">
              <span className="text-muted-text font-paragraph">
                Awaiting project data...
              </span>
            </div>
          )}
        </div>
      </section>

      {/* --- EXPERIENCE SECTION (Timeline) --- */}
      <section
        id="experience"
        className="relative z-10 w-full py-32 bg-card-background/40 border-y border-white/5"
      >
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-accent-teal font-paragraph text-sm mb-4 block">
              04.
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
              Operational <span className="text-muted-text">History</span>
            </h2>
          </motion.div>

          <div
            className={`max-w-4xl mx-auto transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
          >
            {experiences.length > 0 ? (
              <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
                {/* Central Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-[-5px] md:left-1/2 top-0 w-2.5 h-2.5 bg-accent-teal rounded-full transform md:-translate-x-1/2 mt-2 md:mt-6 shadow-[0_0_10px_rgba(226,163,41,0.5)]" />

                    {/* Content Box */}
                    <div
                      className={`w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}
                    >
                      <div className="p-6 border border-white/10 bg-background/50 backdrop-blur-sm hover:border-accent-teal/30 transition-colors group">
                        <div className="text-accent-teal font-paragraph text-sm mb-2">
                          {exp.startDate &&
                            new Date(exp.startDate).toLocaleDateString(
                              "en-US",
                              { month: "short", year: "numeric" },
                            )}
                          {" — "}
                          {exp.endDate
                            ? new Date(exp.endDate).toLocaleDateString(
                                "en-US",
                                { month: "short", year: "numeric" },
                              )
                            : "Present"}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                          {exp.jobTitle}
                        </h3>
                        <div className="text-muted-text font-paragraph mb-6">
                          @ {exp.companyName}
                        </div>

                        {exp.achievements && (
                          <ul
                            className={`space-y-2 text-sm text-foreground font-paragraph ${idx % 2 === 0 ? "md:inline-block md:text-right" : ""}`}
                          >
                            {exp.achievements
                              .split("\n")
                              .filter((a) => a.trim())
                              .map((achievement, i) => (
                                <li
                                  key={i}
                                  className={`flex items-start gap-2 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                >
                                  <div className="w-1 h-1 bg-accent-rock-blue rounded-full mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">
                                    {achievement.trim()}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="h-32 flex items-center justify-center border border-dashed border-white/20">
                <span className="text-muted-text font-paragraph">
                  Awaiting experience data...
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS (Split Layout) --- */}
      <section id="education" className="relative z-10 w-full py-32">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Education Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="text-accent-teal font-paragraph text-sm mb-2 block">
                  05.
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider">
                  Academic <span className="text-muted-text">Foundation</span>
                </h2>
              </motion.div>

              <div
                className={`space-y-8 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                {education.length > 0 ? (
                  education.map((edu, idx) => (
                    <motion.div
                      key={edu._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-8 border border-white/10 bg-card-background/30 relative overflow-hidden group"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-rock-blue/50 group-hover:bg-accent-rock-blue transition-colors" />
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        {edu.institutionName}
                      </h3>
                      <p className="!text-accent-teal font-paragraph text-sm mb-4">
                        {edu.degreeProgram}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm font-paragraph text-muted-text mb-4">
                        {edu.graduationDate && (
                          <div>
                            <span className="block text-xs uppercase opacity-50">
                              Graduation
                            </span>
                            {edu.graduationDate}
                          </div>
                        )}
                        {edu.honorsGPA && (
                          <div>
                            <span className="block text-xs uppercase opacity-50">
                              GPA/Honors
                            </span>
                            {edu.honorsGPA}
                          </div>
                        )}
                        {edu.location && (
                          <div className="col-span-2">
                            <span className="block text-xs uppercase opacity-50">
                              Location
                            </span>
                            {edu.location}
                          </div>
                        )}
                      </div>

                      {edu.additionalDetails && (
                        <p className="text-sm text-foreground font-paragraph pt-4 border-t border-white/10">
                          {edu.additionalDetails}
                        </p>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <div className="p-8 border border-dashed border-white/20 text-center text-muted-text font-paragraph">
                    No data
                  </div>
                )}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="text-accent-teal font-paragraph text-sm mb-2 block">
                  06.
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider">
                  Verified <span className="text-muted-text">Credentials</span>
                </h2>
              </motion.div>

              <div
                className={`space-y-6 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                {certifications.length > 0 ? (
                  certifications.map((cert, idx) => (
                    <motion.div
                      key={cert._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col sm:flex-row gap-6 p-6 border border-white/10 bg-card-background/30 hover:border-accent-teal/30 transition-colors group"
                    >
                      {cert.image && (
                        <div className="w-full sm:w-32 h-24 flex-shrink-0 overflow-hidden border border-white/10">
                          <img
                            src={cert.image}
                            alt={cert.certificationName || "Cert"}
                            width={200}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                          />
                        </div>
                      )}
                      <div className="flex-grow flex flex-col justify-center">
                        <h3 className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-accent-teal transition-colors">
                          {cert.certificationName}
                        </h3>
                        <p className="text-muted-text font-paragraph text-sm mb-2">
                          {cert.issuingOrganization}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                          {cert.issueDate && (
                            <span className="text-xs text-muted-text font-paragraph">
                              {new Date(cert.issueDate).toLocaleDateString(
                                "en-US",
                                { month: "short", year: "numeric" },
                              )}
                            </span>
                          )}
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-accent-teal font-paragraph uppercase tracking-wider hover:text-white flex items-center gap-1"
                            >
                              Verify <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-8 border border-dashed border-white/20 text-center text-muted-text font-paragraph">
                    No data
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OPEN SOURCE & WRITING (Grid Layout) --- */}
      <section
        id="contributions"
        className="relative z-10 w-full py-32 bg-card-background/40 border-t border-white/5"
      >
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Open Source */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="text-accent-teal font-paragraph text-sm mb-2 block">
                  07.
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider">
                  Open <span className="text-muted-text">Source</span>
                </h2>
              </motion.div>

              <div
                className={`grid gap-6 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                {openSource.length > 0 ? (
                  openSource.map((os, idx) => (
                    <motion.div
                      key={os._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 border border-white/10 bg-background/50 hover:border-accent-teal/40 transition-colors group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-accent-teal transition-colors">
                          {os.projectName}
                        </h3>
                        <FaGithub className="w-5 h-5 text-muted-text group-hover:text-accent-teal transition-colors" />
                      </div>
                      {os.contributionDescription && (
                        <p className="text-sm text-muted-text font-paragraph mb-4 leading-relaxed">
                          {os.contributionDescription}
                        </p>
                      )}
                      {os.outcome && (
                        <div className="p-3 bg-accent-teal/5 border border-accent-teal/10 text-sm text-foreground font-paragraph mb-4">
                          <span className="text-accent-teal font-bold mr-2">
                            Outcome:
                          </span>
                          {os.outcome}
                        </div>
                      )}
                      <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                        {os.projectUrl && (
                          <a
                            href={os.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent-teal font-paragraph uppercase hover:text-white flex items-center gap-1"
                          >
                            Repository <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {os.pullRequestUrl && (
                          <a
                            href={os.pullRequestUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent-rock-blue font-paragraph uppercase hover:text-white flex items-center gap-1"
                          >
                            Pull Request <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-8 border border-dashed border-white/20 text-center text-muted-text font-paragraph">
                    No data
                  </div>
                )}
              </div>
            </div>

            {/* Tech Writing */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="text-accent-teal font-paragraph text-sm mb-2 block">
                  08.
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider">
                  Technical <span className="text-muted-text">Writing</span>
                </h2>
              </motion.div>

              <div
                className={`grid gap-6 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                {techWriting.length > 0 ? (
                  techWriting.map((article, idx) => (
                    <motion.a
                      key={article._id}
                      href={article.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="block p-6 border border-white/10 bg-background/50 hover:border-accent-rock-blue/40 transition-colors group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent-rock-blue transition-colors pr-8">
                          {article.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-text group-hover:text-accent-rock-blue transition-colors flex-shrink-0" />
                      </div>
                      {article.shortDescription && (
                        <p className="text-sm text-muted-text font-paragraph mb-6 leading-relaxed">
                          {article.shortDescription}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs font-paragraph text-muted-text pt-4 border-t border-white/5">
                        <span className="uppercase tracking-wider text-accent-teal">
                          {article.platform}
                        </span>
                        {article.publicationDate && (
                          <span>
                            {new Date(
                              article.publicationDate,
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>
                    </motion.a>
                  ))
                ) : (
                  <div className="p-8 border border-dashed border-white/20 text-center text-muted-text font-paragraph">
                    No data
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

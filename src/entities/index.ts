/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file
 */

/**
 * Collection ID: certifications
 * Interface for Certifications
 */
export interface Certifications {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  certificationName?: string;
  /** @wixFieldType text */
  issuingOrganization?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType date */
  issueDate?: Date | string;
  /** @wixFieldType url */
  credentialUrl?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
}

export const certificationsData: Certifications[] = [
  {
    _id: "1",
    certificationName: "Prompt Engineering for ChatGPT",
    issuingOrganization: "Vanderbilt University",
    description:
      "Validated expertise in designing and deploying scalable systems on AWS.",
    issueDate: "2026-03-03",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/7TV4LQOOK4LC",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7TV4LQOOK4LC/CERTIFICATE_LANDING_PAGE~7TV4LQOOK4LC.jpeg",
  },
  {
    _id: "2",
    certificationName: "Programming in Python",
    issuingOrganization: "Meta",
    description:
      "Validated expertise in designing and deploying scalable systems on AWS.",
    issueDate: "2026-03-03",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/6XMAOE9C7WAT",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6XMAOE9C7WAT/CERTIFICATE_LANDING_PAGE~6XMAOE9C7WAT.jpeg",
  },
];

/**
 * Collection ID: education
 * Interface for Education
 */
export interface Education {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  institutionName?: string;
  /** @wixFieldType text */
  degreeProgram?: string;
  /** @wixFieldType text */
  graduationDate?: string;
  /** @wixFieldType text */
  honorsGPA?: string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType text */
  additionalDetails?: string;
}

export const educationData: Education[] = [
  {
    _id: "1",
    institutionName: "Discovery High School",
    degreeProgram: "High School Diploma",
    graduationDate: "May 2026",
    honorsGPA:
      "Founding Charter Member of the Computer Science Honor Society (CSHS)",
    location: "Lawrenceville, Georgia, USA",
    additionalDetails:
      "Relevant coursework: AP Computer Science A, AP Computer Science Principles.",
  },
  {
    _id: "2",
    institutionName: "Aptech Computer Education (Global IT Training)",
    degreeProgram: "Advanced Diploma in Software Engineering (ADSE)",
    graduationDate: "Nov 2024",
    honorsGPA: "3.83/4.00, Dean's List",
    location: "Da Nang, Vietnam",
    additionalDetails:
      "Credential issued by Aptech India, rigorous 2-year enterprise-level software engineering program focused on full-stack development (Java EE, .NET Core, SQL Server).",
  },
];

/**
 * Collection ID: experience
 * Interface for Experience
 */
export interface Experience {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  jobTitle?: string;
  /** @wixFieldType text */
  companyName?: string;
  /** @wixFieldType date */
  startDate?: Date | string;
  /** @wixFieldType date */
  endDate?: Date | string;
  /** @wixFieldType text */
  achievements?: string;
}

export const experienceData: Experience[] = [
  {
    _id: "1",
    jobTitle: "Freelance Web Developer",
    companyName: "Nail Salon Parisian",
    startDate: "2025-06-03",
    endDate: "2025-12-12",
    achievements:
      "Re-engineered a legacy web app, improving performance and request handling, increasing user retention by 20%. Integrated Google Maps API and optimized booking validation, boosting monthly appointment requests by 15%.",
  },
  {
    _id: "2",
    jobTitle: "Freelance Web Developer",
    companyName: "Amazing Education",
    startDate: "2024-06-03",
    endDate: "2026-02-12",
    achievements:
      "Engineered a course management platform with streamlined enrollment workflows, improving student onboarding efficiency. Optimized performance and responsive architecture, increasing organic mobile traffic by 25%. Built backend services and API integrations for a client-facing app, improving data flow and boosting student inquiries by 30%.",
  },
];

/**
 * Collection ID: opensource
 * Interface for OpenSourceContributions
 */
export interface OpenSourceContributions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  projectName?: string;
  /** @wixFieldType text */
  contributionDescription?: string;
  /** @wixFieldType text */
  outcome?: string;
  /** @wixFieldType url */
  projectUrl?: string;
  /** @wixFieldType url */
  pullRequestUrl?: string;
  /** @wixFieldType date */
  contributionDate?: Date | string;
}

export const openSourceContributionsData: OpenSourceContributions[] = [
  {
    _id: "1",
    projectName: "ABP Framework",
    contributionDescription:
      "Fixing a culture-specific bug in string casing that affected Angular route generation, replaced ToUpper() with ToUpperInvariant() to ensure consistent behavior across environments.",
    outcome:
      "Merged pull request and received positive feedback from maintainers.",
    projectUrl: "https://github.com/abpframework/abp",
    pullRequestUrl: "https://github.com/abpframework/abp/pull/25128",
    contributionDate: "2023-06-01",
  },
];

/**
 * Collection ID: projects
 * Interface for Projects
 */
export interface Projects {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  technologies?: string;
  /** @wixFieldType text */
  achievements?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
  /** @wixFieldType url */
  githubLink?: string;
  /** @wixFieldType url */
  liveDemoLink?: string;
}

export const projectsData: Projects[] = [
  {
    _id: "1",
    title: "AI-Powered Course Recommendation & Enrollment Agent",
    description:
      "Built an AI-powered course recommendation and enrollment system using LLM with function calling, enabling personalized suggestions and seamless enrollment through conversational workflows.",
    achievements:
      "Built an LLM-powered agent with function calling to deliver personalized course recommendations and automate enrollment through multi-turn conversational workflows integrated with backend APIs.",
    image: "/images/AI_Powered_Web.png",
    technologies:
      "ASP.NET Core (.NET 8), GPT-4o-mini, TypeScript, React, Astro, Tailwind CSS",
    liveDemoLink: "https://nextstepusa.vercel.app/",
  },
  {
    _id: "2",
    title: 'FBLA "Lost and Found" Platform',
    description:
      "Engineered a scalable full-stack platform for managing lost and found items with AI-powered image matching and real-time user coordination.",
    achievements:
      "Engineered a scalable full-stack platform with AI image matching, real-time workflows, secure authentication, analytics dashboard, and accessibility features, improving item retrieval accuracy and system usability.",
    image: "/images/fbla.png",
    githubLink: "https://github.com/JasonPG2007/FBLA-Web",
    technologies:
      "ASP.NET Core (.NET 8), React, Vite, CSS, SQL Server, OpenAI CLIP, Azure",
    liveDemoLink: "https://back2me.vercel.app/",
  },
  {
    _id: "3",
    title: "Nail Salon Parisian",
    description:
      "Client-facing booking platform for a nail salon, focused on improving scheduling efficiency and user experience.",
    achievements:
      "Re-engineered a legacy booking system to improve performance and user retention, while integrating Google Maps and validation logic to streamline appointment workflows.",
    image: "/images/nailsalon.png",
    technologies: "React, Vite, Google Maps Integration, CSS",
    liveDemoLink: "https://nailsalonparisian.com/",
  },
  {
    _id: "2",
    title: "Amazing Education",
    description:
      "Course management platform designed to support student enrollment, course discovery, and administrative workflows.",
    achievements:
      "Built a course management system with enrollment workflows, optimized system performance and responsive architecture, increasing student engagement and improving data flow.",
    image: "/images/amazingeducation.png",
    technologies: "React, Vite, CSS",
    liveDemoLink: "https://amazingeducation.onrender.com/",
  },
  {
    _id: "4",
    title: "Science Fair & IT Contest Project",
    description:
      "Developed a learning management system with optimized resource-flow simulation to enhance educational accessibility.",
    achievements:
      "Built a learning management system with optimized resource-flow simulation and interactive UI, earning 4th Prize for technical innovation and improved educational accessibility.",
    image: "/images/NVT_Web.png",
    // githubLink: "https://github.com/JasonPG2007/TechWizWordReal",
    technologies: "ASP.NET Core (.NET 7), SQL Server, CSS",
    // liveDemoLink: "https://back2me.vercel.app/",
  },
  {
    _id: "5",
    title: "TechWiz 4 - Product Showcase Website",
    description:
      "Developed a responsive product showcase website under a 72-hour competition deadline.",
    achievements:
      "Developed a responsive product showcase website within a 72-hour deadline, delivering a complete and user-friendly UI/UX solution under high-pressure conditions.",
    image: "/images/techwiz4.png",
    githubLink: "https://github.com/JasonPG2007/TechWizWordReal",
    technologies: "HTML, CSS, JavaScript, Bootstrap",
    liveDemoLink: "https://jasonpg2007.github.io/TechWizWordReal/index.html",
  },
];

/**
 * Collection ID: skills
 * Interface for Skills
 */
export interface Skills {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  skillName?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  proficiencyLevel?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  skillIcon?: string;
  /** @wixFieldType text */
  description?: string;
}

export const skillsData: Skills[] = [
  {
    _id: "1",
    skillName: "C#",
    category: "Languages",
    proficiencyLevel: "Advanced",
    description: "Proficient in C# for scalable web development.",
  },
  {
    _id: "2",
    skillName: "Java",
    category: "Languages",
    proficiencyLevel: "Advanced",
    description: "Proficient in Java for scalable web development.",
  },
  {
    _id: "3",
    skillName: "SQL",
    category: "Languages",
    proficiencyLevel: "Advanced",
    description: "Proficient in SQL for database development.",
  },
  {
    _id: "4",
    skillName: "JavaScript",
    category: "Languages",
    proficiencyLevel: "Advanced",
    description: "Proficient in JavaScript for scalable web development.",
  },
  {
    _id: "5",
    skillName: "PHP",
    category: "Languages",
    proficiencyLevel: "Advanced",
    description: "Proficient in PHP for scalable web development.",
  },
  {
    _id: "6",
    skillName: "Dart",
    category: "Languages",
    proficiencyLevel: "Advanced",
    description: "Proficient in Dart for scalable web development.",
  },
  {
    _id: "7",
    skillName: "Python",
    category: "Languages",
    proficiencyLevel: "Advanced",
    description: "Proficient in Python for scalable web development.",
  },
  {
    _id: "8",
    skillName: "ASP.NET Core",
    category: "Frameworks/Libraries",
    proficiencyLevel: "Advanced",
    skillIcon: "https://example.com/react-icon.png",
    description: "Experienced in building dynamic user interfaces with React.",
  },
  {
    _id: "9",
    skillName: "Spring Boot",
    category: "Frameworks/Libraries",
    proficiencyLevel: "Advanced",
    skillIcon: "https://example.com/react-icon.png",
    description: "Experienced in building dynamic user interfaces with React.",
  },
  {
    _id: "10",
    skillName: "Node.js",
    category: "Frameworks/Libraries",
    proficiencyLevel: "Advanced",
    skillIcon: "https://example.com/react-icon.png",
    description: "Experienced in building dynamic user interfaces with React.",
  },
  {
    _id: "11",
    skillName: "React.js",
    category: "Frameworks/Libraries",
    proficiencyLevel: "Advanced",
    skillIcon: "https://example.com/react-icon.png",
    description: "Experienced in building dynamic user interfaces with React.",
  },
  {
    _id: "12",
    skillName: "SQL Server",
    category: "Databases",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "13",
    skillName: "MongoDB",
    category: "Databases",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "14",
    skillName: "Git",
    category: "Tools & Cloud",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "15",
    skillName: "GitHub",
    category: "Tools & Cloud",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "16",
    skillName: "AWS",
    category: "Tools & Cloud",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "17",
    skillName: "Azure",
    category: "Tools & Cloud",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "18",
    skillName: "RESTful APIs",
    category: "Concepts",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "19",
    skillName: "JWT",
    category: "Concepts",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "20",
    skillName: "OOP",
    category: "Concepts",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "21",
    skillName: "Data Structures & Algorithms",
    category: "Concepts",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
  {
    _id: "22",
    skillName: "Accessibility (WCAG)",
    category: "Concepts",
    proficiencyLevel: "Intermediate",
    skillIcon: "https://example.com/nodejs-icon.png",
    description: "Capable of developing robust backend services with Node.js.",
  },
];

/**
 * Collection ID: techwriting
 * Interface for TechWriting
 */
export interface TechWriting {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType url */
  articleUrl?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
  /** @wixFieldType text */
  platform?: string;
  /** @wixFieldType text */
  shortDescription?: string;
}

export const techWritingData: TechWriting[] = [
  {
    _id: "1",
    title:
      "How I Built an AI Agent with LLM Function Calling (and Avoided Unnecessary Tool Calls)",
    articleUrl:
      "https://dev.to/jasonpg/i-built-an-ai-agent-that-learned-when-not-to-call-apis-llm-function-calling-system-design-26ea-temp-slug-8339080?preview=3ac23327fb88b2ab31b4c41dd887852c8bfeaf40a216298fcbe52d5feebf6c4ed5935fb1f79ed85e0b2cf2e3c15a1afad28a223a34527d3f1b550459",
    publicationDate: "2026 May",
    platform: "Dev.to",
    shortDescription:
      "Explained the design of a tool-augmented AI Agent system with decision-based orchestration, focusing on reducing redundant API calls and improving system efficiency.",
  },
];

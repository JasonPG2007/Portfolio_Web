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
    issueDate: "2023-08-01",
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
    issueDate: "2026-08-01",
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
    institutionName: "University of Example",
    degreeProgram: "Bachelor of Science in Computer Science",
    graduationDate: "2024-05-15",
    honorsGPA: "Summa Cum Laude, GPA: 3.9/4.0",
    location: "Example City, Country",
    additionalDetails:
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering. Dean's List for 6 semesters.",
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
    jobTitle: "Software Engineer",
    companyName: "Tech Company",
    startDate: "2022-01-01",
    endDate: "2023-12-31",
    achievements:
      "Developed and maintained web applications using React and Node.js, improving performance by 30%.",
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
    projectName: "React",
    contributionDescription:
      "Contributed to React's documentation by improving examples and fixing typos.",
    outcome:
      "Merged pull request and received positive feedback from maintainers.",
    projectUrl: "https://github.com/facebook/react",
    pullRequestUrl: "https://github.com/facebook/react/pull/12345",
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
    title: "AI-Powered Course Recommendation Agent",
    description:
      "Developed an intelligent system that recommends personalized courses to students based on their academic history, interests, and career goals, utilizing machine learning algorithms.",
    achievements:
      "Designed and developed a modern portfolio site with smooth animations and responsive design.",
    image:
      "https://static.wixstatic.com/media/bd17b4_7744b4fa9a6648a682892c25fb45b5be~mv2.png/v1/fill/w_640,h_359,al_c,q_85,enc_auto/bd17b4_7744b4fa9a6648a682892c25fb45b5be~mv2.png",
    githubLink: "https://github.com/baoandng/portfolio",
    technologies: "TypeScript, React, Node.js, Express, MongoDB",
    liveDemoLink: "https://baoandng.github.io/portfolio",
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
    skillName: "TypeScript",
    category: "Programming Language",
    proficiencyLevel: "Advanced",
    skillIcon: "https://example.com/typescript-icon.png",
    description: "Proficient in TypeScript for scalable web development.",
  },
  {
    _id: "2",
    skillName: "React",
    category: "Frontend Framework",
    proficiencyLevel: "Advanced",
    skillIcon: "https://example.com/react-icon.png",
    description: "Experienced in building dynamic user interfaces with React.",
  },
  {
    _id: "3",
    skillName: "Node.js",
    category: "Backend Framework",
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
    title: "Building Scalable Backend Systems with Node.js",
    articleUrl:
      "https://medium.com/@baoandng/building-scalable-backend-systems-with-node-js-123456789",
    publicationDate: "2023-05-15",
    platform: "Medium",
    shortDescription:
      "An in-depth guide on designing scalable backend architectures using Node.js.",
  },
  {
    _id: "2",
    title: "Getting Started with React for Beginners",
    articleUrl:
      "https://dev.to/baoandng/getting-started-with-react-for-beginners-987654321",
    publicationDate: "2023-08-10",
    platform: "Dev.to",
    shortDescription:
      "A comprehensive introduction to React for developers new to frontend development.",
  },
];

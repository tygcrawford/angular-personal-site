// date format: MM-YYYY

export interface About {
  name: string;
  title: string;
  blurb: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export interface Project {
  name: string;
  company: string;
  description: string;
  githubURL?: string;
  imageURL?: string;
  skills: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

// date format: MM-YYYY

export interface Content {
  about: About;
  education: Education[];
  experience: Experience[];
  projects: Project[]
  skills: Skills;
}

export interface About {
  name: string;
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export interface Project {
  name: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export interface Skills{
  skillCategories: SkillCategory[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

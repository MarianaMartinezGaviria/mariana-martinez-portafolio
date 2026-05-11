export interface PersonalInfo {
  name: string;
  title: string;
  photo: string;
  description: string;
}

export interface ContactInfo {
  city: string;
  phone: string;
  email: string;
}

export interface Language {
  name: string;
  percentage: number;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ExtraSkill {
  name: string;
}

export interface Knowledge {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  institution: string;
  role: string;
  startDate: string;
  endDate: string;
  certificate: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
}
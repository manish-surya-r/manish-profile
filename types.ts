
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
  };
}

// --- Skills ---
export interface SkillItem {
  name: string;
  level: number;
}

export interface ProjectItem {
  name: string;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  projects: ProjectItem[];
}


export interface Publication {
  title: string;
  conference: string;
  description: string;
  paper_link: string;
}

export interface EducationType {
  degree: string;
  major: string;
  university: string;
  location: string;
  period: string;
  key_points: string[];
}

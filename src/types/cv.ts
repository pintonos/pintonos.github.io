export interface Experience {
  company: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
}

export interface Education {
  school: string;
  time: string;
  degree: string;
  location?: string;
  description?: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  time: string;
  /** Month of publication (1-12), used to order papers within a year. */
  month?: number;
  link?: string;
  abstract?: string;
  pdf?: string;
  bibtex?: string;
  /** Show under "Key Research Highlights" on the research page. */
  featured?: boolean;
  /** Award shown as a badge, e.g. "Best Short Paper". */
  award?: string;
  /** One-line description used for featured papers. */
  summary?: string;
}

export function isExperience(element: Experience | Education): element is Experience {
  return 'title' in element && 'company' in element;
}

export function isEducation(element: Education | Experience): element is Education {
  return 'school' in element && 'degree' in element;
}

export function isSkill(element: Skill | Publication): element is Skill {
  return 'description' in element;
}

export function isPublication(element: Skill | Publication): element is Publication {
  return 'authors' in element;
}

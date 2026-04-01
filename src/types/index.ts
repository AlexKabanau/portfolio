export type SkillLevel = 'advanced' | 'intermediate' | 'familiar';
export type VantaEffect = 'net' | 'birds' | 'waves' | 'fog';
export type TimelineType = 'work' | 'education';

export interface Project {
  title: string;
  description: string;
  tools_and_technologies: string;
  responsibilities: string[];
  img: string[];
  gitHubLink?: string[];
  deployLink?: string;
  link?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  company?: string;
  link?: string;
  type: TimelineType;
  description: string;
  details?: string[];
  tags?: string[];
}

export interface Skills {
  advanced: string[];
  intermediate: string[];
  familiar: string[];
}

import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  image:string;
}

export interface TechProfile {
  icon:IconType;
  slug:string;
  label:string;
  href:string;
  color:string;
}

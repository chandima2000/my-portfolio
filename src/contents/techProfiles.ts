import { TechProfile } from "@/types";
import {
    FaGithub,
    FaLinkedin,
    FaMediumM,
    FaStackOverflow
  } from 'react-icons/fa';


export const techProfiles : TechProfile[] = [
    {
        icon: FaGithub,
        slug: 'github',
        label: 'GitHub',
        href: 'https://github.com/chandima2000',
        color: 'text-black dark:text-white',
      },
      {
        icon: FaLinkedin,
        slug:'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/chandima-maduwantha/',
        color: 'text-blue-700',
      },
      {
        icon: FaMediumM,
        slug:'medium',
        label: 'Medium',
        href: 'https://medium.com/@hychandima2000',
        color: 'text-black dark:text-white',
      },
      {
        icon: FaStackOverflow,
        slug:'stack-overflow',
        label: 'Stack Overflow',
        href: 'https://stackoverflow.com/users/24817655/chandima-maduwantha', 
        color: 'text-orange-500',
      },
]
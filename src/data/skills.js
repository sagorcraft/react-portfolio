import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiTailwindcss } from 'react-icons/si';

export const skills = [
  {
    id: 1,
    name: 'HTML5',
    icon: FaHtml5,
    progress: 95,
    category: 'Frontend',
    description: 'Semantic, accessible markup',
  },
  {
    id: 2,
    name: 'CSS3',
    icon: FaCss3Alt,
    progress: 90,
    category: 'Frontend',
    description: 'Modern layouts and responsive styling',
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: FaJsSquare,
    progress: 85,
    category: 'Frontend',
    description: 'Interactive UI logic and state handling',
  },
  {
    id: 4,
    name: 'React.js',
    icon: FaReact,
    progress: 88,
    category: 'Frameworks',
    description: 'Component-driven application architecture',
  },
  {
    id: 5,
    name: 'Tailwind',
    icon: SiTailwindcss,
    progress: 82,
    category: 'Frameworks',
    description: 'Utility-first UI implementation',
  },
  {
    id: 6,
    name: 'Bootstrap',
    icon: SiBootstrap,
    progress: 90,
    category: 'Frameworks',
    description: 'Rapid prototyping and grid systems',
  },
  {
    id: 7,
    name: 'Git',
    icon: FaGitAlt,
    progress: 85,
    category: 'Tools',
    description: 'Version control and workflow discipline',
  },
  {
    id: 8,
    name: 'GitHub',
    icon: FaGithub,
    progress: 90,
    category: 'Tools',
    description: 'Collaboration, review, and deployment flow',
  },
];

import { eg } from './eg';
import { cs } from './cs';
import { math } from './math';
import { core } from './core';
import { ecp } from './ecp';

export type Course = {
  name: string;
  id: string;
  // etc.
};

export const courses: Record<string, Course[]> = {
  'Computer Science': cs,
  'Mathematics': math,
  'Engineering': eg,
  'Business': ecp,
  'Liberal Arts': core,

}

export const README = `# Aaron's Course Explorer

Thanks for visiting my page! This course explorer lets you browse classes I have taken or plan to take at Notre Dame. Each course is organized into a folder of study and color-coded for easy reference:

- 🟩 **Green** — Course already taken  
- 🟨 **Yellow** — Course currently enrolled in  
- ⬜ **Gray** — Courses planned for the future  


---

## ⭐ Spotlight Courses & Projects

Here are some of my favorite classes or ones that included major coursework, hands-on labs, or personal projects:

- **CSE-30341: Theory of Computing**  
  I enjoyed studying the theoretical limits of computation and proving whether questions were (or were not) possible to solve. I also enjoyed creating our own version of grep as a project in this class.

- **CSE-30341: Computer Architecture**  
  Although I do not plan to go into hardware, I enjoyed learning the fundamentals of how computers and modern electronics work, learning about all the abstraction that goes on to create programs.


These courses helped shape my academic and personal interests and often include links to detailed project reports or GitHub repos.
`

import MarkdownPreview from '@uiw/react-markdown-preview';
import clsx from 'clsx';
import { README, courses } from './data/courses';

interface Course {
  id: string
  name: string
  nickname?: string
  link?: string
  grade?: string
  description?: string
  ta?: boolean
  abroad?: boolean
}

const allcourses = Object.values(courses).flat();


function MyComponent(props: any) {
  let source = README;
  if (props.fileName !== 'readme') {
    const course: Course = allcourses.filter(item => item.id === props.fileName)[0];
    source =
      `# ${course.name}

> **Course Code:** \`${course.id}\`  
> ${course.grade === 'Pass' ? '**Tested Out**' : `**Grade:** ${course.grade}`}


<style>
.grow{
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.grow:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
</style>


${course.link ? `<a href="${course.link}" target="_blank" rel="noopener noreferrer"><button style="padding:6px 12px; font-size:14px; border:none; background:#1e88e5; color:white; border-radius:4px;" class="grow">View Coursework/Projects</button></a>` : ""}


---
### Course Description
${course.description}
`
  }


  return (
    <MarkdownPreview
      source={source}
      className={clsx("text-left p-8", props.className)}
      style={{ color: 'var(--primary)' }}
    />
  );
}

export default MyComponent;
import MarkdownPreview from '@uiw/react-markdown-preview';
import clsx from 'clsx';
import { README, courses } from '../data/courses';

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


${course.link ? `<a href="${course.link}" target="_blank" rel="noopener noreferrer" className="w-fit">
  <button
    className="inline-flex items-center justify-center rounded-md bg-muted/80 px-4 py-2 text-sm font-medium text-foreground shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    View Coursework/Projects
  </button>
</a>` : ""}


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
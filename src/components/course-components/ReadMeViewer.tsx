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
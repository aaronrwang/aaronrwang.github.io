import MarkdownPreview from '@uiw/react-markdown-preview';
import clsx from 'clsx';
import { courses } from './data/courses';

const README = `
# README.md

On this page, you can view the classes I've taken and a little description about each class along with my projects, homeworks, and grade if possible.

`
const allcourses = Object.values(courses).flat();


function MyComponent(props: any) {
  console.log(props.fileName)
  let source = README;
  if (props.fileName !== 'README.md') {
    const course = allcourses.filter(item => item.name === props.fileName)[0];
    source = Object.entries(course)
      .map(([key, value]) => `**${key}**: ${value}`)
      .join('\n\n');
  }


  return (
    <MarkdownPreview
      source={source}
      className={clsx("text-left p-8", props.className)}
    />
  );
}

export default MyComponent;
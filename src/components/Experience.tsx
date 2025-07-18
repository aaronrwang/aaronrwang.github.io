import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

const items = [
  {
    id: 1,
    date: "Jun 2025 - Present",
    title: "IT Intern @ Bausch + Lomb",
    description:
      "Lorem Ipsum: Initial team meeting and project scope definition. Established key milestones and resource allocation.",
  },
  {
    id: 2,
    date: "Aug 2024 - Present",
    title: "Teacher's Assistant @ University of Notre Dame",
    description:
      "Lorem Ipsum: Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
  {
    id: 3,
    date: "Feb 2025 - May 2025",
    title: "Research Assistant @ University of Notre Dame",
    description:
      "Lorem Ipsum: Backend API implementation and frontend component development in progress.",
  },
  {
    id: 4,
    date: "Earlier",
    title: "Testing & Deployment",
    description:
      "Lorem Ipsum: Quality assurance testing, performance optimization, and production deployment preparation.",
  },
  {
    id: 5,
    date: "Earlier",
    title: "Testing & Deployment",
    description:
      "Lorem Ipsum: Quality assurance testing, performance optimization, and production deployment preparation.",
  },
  {
    id: 6,
    date: "Earlier",
    title: "Testing & Deployment",
    description:
      "Lorem Ipsum: Quality assurance testing, performance optimization, and production deployment preparation.",
  },
]

export default function Experience() {
  return (<>
    <h1 className="text-2xl pb-2 border-b w-1/2 mb-4">Experience</h1>
    <Timeline defaultValue={3} className="text-left">
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </>
  )
}

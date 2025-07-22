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
      "\u2022 Designed and improved internal chatbots to help employees navigate  policies and access company resources more efficiently\n\u2022 Built Power Automate workflows using prompt engineering to expedite document processing\n\u2022 Automated form submission and tracking processes, significantly reducing manual effort and speeding up internal workflows",
  },
  {
    id: 2,
    date: "Aug 2024 - Present",
    title: "Teacher's Assistant @ University of Notre Dame",
    description:
      "Discrete Math (Fall 2024, 2025) | Data Structures (Spring 2025)\n\u2022 Hosting office hours weekly to further explain concepts and supplement in-class lectures\n\u2022 Creating and grading problem sets for 80+ students every week",
  },
  {
    id: 3,
    date: "Feb 2025 - May 2025",
    title: "Research Assistant @ University of Notre Dame",
    description:
      "Web3DB Project; Led by Taeho Jung, Showkot Hossain, and Wenyi Tang\n\u2022 Analyzed and researched relational databases, specifically PostgreSQL and MySQL, to design and implement an indexing mechanism within the Web3DB project",
  },
  {
    id: 4,
    date: "June 2022 - Aug 2023 (Summer)",
    title: "Teacher @ iGoStem Academy",
    description:
      "\u2022 Taught a class of ~15 kids STEM related activities, including how to solve a Rubik’s cube, animation, and engineering\n\u2022 Created lesson plans for children who could not yet read or write",
  },
  // {
  //   id: 5,
  //   date: "Aug 2017 - Aug 2024 (Summer)",
  //   title: "Senior Leader @ Princeton Christian Church",
  //   description:
  //     "\u2022 Managed daily schedules of camp groups and coordinated activities for 100+ campers (2023, 2024)\n\u2022 Trained 30+ volunteers on basic child care and camp rules\n\u2022 Educated children aged 3-10 about the Gospel",
  // },
  {
    id: 6,
    date: "Sep 2021 - May 2023 (School Year)",
    title: "Math Peer Tutor @ Delbarton School",
    description:
      "\u2022 Co-ordinated appointments for school of 600+ students and 30+ tutors\n\u2022 Tutored 20+ peers over 2 years in Algebra, Geometry, and Calculus",
  },
]

export default function Experience() {
  return (
    <div className="w-7/8 md:w-[37.5rem] flex flex-col items-center">
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
    </div>
  )
}

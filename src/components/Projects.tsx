

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import ndhive from '@/assets/projects/NDHive.png';
import biblejournal from '@/assets/projects/BibleJournal.png';
import connectfour from '@/assets/projects/connectfour.png';
import gostop from '@/assets/projects/GoStop.png';
import war from '@/assets/projects/War.png';
import memory from '@/assets/projects/Memory.png';
import tangobot from '@/assets/projects/Tangobot.png';


import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Github } from "lucide-react"

interface Project {
  title: string;
  img?: string;
  description: string;
  skills: Array<string>;
  github?: string;
}

const projects: Array<Project> = [
  {
    title: 'NDHive',
    img: ndhive,
    description: 'Created a peer-to-peer mentorship app targeted toward Notre Dame students for ND Hackathon 2025. The app connects mentors and mentees through a smart matchmaking algorithm powered by OpenAI, with optional rewards to encourage ongoing engagement.',
    skills: ['React', 'Javascript', 'Tailwind', 'OpenAI', 'Back4App (Database)']
  },
  {
    title: 'Bible Journal',
    github: 'https://github.com/aaronrwang/Bible-Journal',
    img: biblejournal,
    description: "Created a cross-platform app to help me stay consistent in my spiritual journey. I built features to keep track of devotions and sermon notes and a prayer request feature to ensure I'm regularly praying for others. While designed for personal use, the app is easily scalable for broader consumer use",
    skills: ['Flutter', 'Supabase']
  },
  {
    'title': 'Tango Bot',
    'github': 'https://github.com/Elliotkim2/TangoBot',
    'img': tangobot,
    'description': 'Built a web app that automatically solves the LinkedIn Tango puzzle and posts detailed daily solutions to help others learn how to play and improve at the game',
    'skills': ['Python', 'Webscraping', 'Github Actions', 'MongoDB', 'Next', 'Typescript', 'Tailwind']
  },
  {
    'title': 'Go Stop (HwaTu)',
    'github': 'https://github.com/aaronrwang/HwaTu',
    'img': gostop,
    'description': 'Built an online Web app to allow users to play a traditional Korean card Game online. Through this project, I learned about creating/using APIs and sockets to connect clients and servers through node.js and it\'s socket.io library.',
    'skills': ['Node', 'Express', 'Sockets', 'React']
  },
  {
    'title': 'Memory',
    'github': 'https://github.com/aaronrwang/Memory-ios-app',
    'img': memory,
    'description': 'Developed a memory card matching game in Swift, incorporating responsive animations. The project integrated custom sound effects using AVFoundation.',
    'skills': ['IOS App dev', 'Swift', 'UIKit', 'AVFoundation']
  },
  {
    title: 'War',
    'github': 'https://github.com/aaronrwang/War-ios-app',
    'img': war,
    'description': 'Developed a fully functional War card game app in Swift, implementing UI design with UIKit, managing app lifecycle events and random number generation.',
    skills: ['IOS App dev', 'Swift', 'UIKit']
  },
  {
    'title': 'Connect Four',
    'github': 'https://github.com/aaronrwang/Connect-Four',
    'img': connectfour,
    'description': 'Built a 2-player Connect Four Game using Java AWT (Swing) GUI Library. Learned about  object oriented programming fundamentals, and Java GUI libraries.',
    'skills': ['Java AWT', 'Swing']
  }
]


export default function Projects() {
  const [tab, setTab] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (auto) {
        incrementTab();
      }
    }, 5000)
    return () => clearInterval(interval);
  }, [auto]);

  function decrementTab() {
    setTab((e) => (projects.length + e - 1) % projects.length)
  }

  function incrementTab() {
    setTab((e) => (e + 1) % projects.length)
  }

  return (
    <Tabs
      defaultValue={tab + ''}
      value={tab + ''}
      className="items-center"
    >

      <div className="grow text-start flex flex-col items-center justify-center">
        {Object.entries(projects).map(([key, project]) => {
          return (

            <TabsContent key={key} value={key}>
              <motion.div className="relative w-80 md:w-full md:p-4 rounded-2xl border bg-background shadow-md transition-shadow hover:shadow-xl overflow-hidden flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >

                {/* Content Section */}
                <div className="px-4 py-3 space-y-3 flex-1 flex flex-col justify-between">

                  {/* Title & GitHub */}
                  <div className="flex justify-between items-start">
                    <h1 className="font-semibold text-lg">{project.title}</h1>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  {/* Image Section */}
                  {project.img && (
                    <div className="md:hidden h-60 flex flex-col items-center justify-center">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  {/* Skills */}
                  <div className="flex gap-2 flex-wrap text-xs">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="relative inline-block px-2 py-0.5 bg-muted rounded-full border border-border overflow-hidden group"
                      >
                        <span className="relative z-10">{skill}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-1000 pointer-events-none" />
                      </span>
                    ))}
                  </div>
                </div>
                {project.img && (
                  <div className="hidden w-full h-100 md:flex flex-col items-center justify-center">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
              </motion.div>
            </TabsContent>
          )
        })}
      </div>
      <div className="flex gap-2 items-center fixed bottom-4 border-[var(--teal-accent)]" onClick={() => setAuto(false)}>
        <Button variant="outline" className="h-8 w-8 p-2 rounded-xl" onClick={() => decrementTab()}>
          <ChevronLeft size={8} />
        </Button>

        <TabsList className="bg-[var(--background)]">

          {Object.entries(projects).map(([key, _], index) => (
            <TabsTrigger
              key={key}
              value={key}
              className="data-[state=active]:bg-foreground bg-muted m-0.5 transition-colors duration-500 p-1 "
              onClick={() => setTab(index)}
            >
              <div className="block bg-transparent rounded" />
            </TabsTrigger>

          ))}

        </TabsList>
        <Button variant="outline" className="h-8 w-8 p-2 rounded-xl" onClick={() => incrementTab()}>
          <ChevronRight size={16} />
        </Button>
      </div>
    </Tabs>
  )
}

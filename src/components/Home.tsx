import animation from './../assets/animation.json';
import Lottie from "lottie-react";
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>

      <div className="flex items-center justify-center flex-col-reverse md:flex-row my-[-128px] h-[100vh] lg:mx-0 md:-mx-8 -mx-16" >

        <div className="w-96 md:w-[32rem]">
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className="text-left px-8 max-w-96">
          <h1 className="text-3xl font-bold py-2">Hi, I'm Aaron Wang!</h1>
          <p className="text-muted-foreground text-base leading-relaxed py-2">
            I'm a rising junior studying Computer Science and Applied Mathematics/Statistics at the University of Notre Dame.
            Explore my resume, experience, projects, and courses to learn more.
          </p>
          <a
            target="_blank" href="https://drive.google.com/file/d/1hQEJ8JxSfK0S432iqlYz3kVYIHUYVZbA/view?usp=sharing" className="py-2 block">
            <Button size="sm" className="bg-[var(--teal-accent)] hover:bg-[var(--teal-accent)] text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
              <Download size={16} />
              <span >View Resume</span>
            </Button>
          </a>
        </div>
      </div>
    </>)
}
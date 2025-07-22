import animation from './../assets/animation.json';
import Lottie from "lottie-react";
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
export default function Home({
  at,
  sat,
}: {
  at: number;
  sat: React.Dispatch<React.SetStateAction<number>>;
}) {
  // console.log(at)
  // for strict mode (dev set to two)
  if (at > 1) {
    return (<>

      <div className="flex flex-col-reverse items-center justify-center lg:flex-row my-[-72px] lg:my-[-128px] h-[100vh]" >
        <div className="w-96 lg:w-[32rem]">
          <Lottie animationData={animation} loop={true} />
        </div>

        <div className="text-left px-8 w-96 h-[220px]">
          <h1 className="text-3xl font-bold py-2">
            Hi, I'm Aaron Wang!
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed py-2">
            I'm a rising junior studying Computer Science and Applied Mathematics/Statistics at the University of Notre Dame. Explore my resume, experience, projects, and courses!
          </p>
          <a

            target="_blank" href="https://drive.google.com/file/d/1hQEJ8JxSfK0S432iqlYz3kVYIHUYVZbA/view?usp=sharing" className="py-2 block">
            <Button size="sm" className="bg-[var(--teal-accent)] hover:bg-[var(--teal-accent)] text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
              <Download size={16} />
              <span >View Resume</span>
            </Button>
          </a>
        </div>
      </div >
    </>)
  }
  const breakpoint = 768
  const isLarge = window.innerWidth >= breakpoint
  useEffect(() => {
    setTimeout(() => {
      sat((e) => e + 1)
    }, 10000); // 10 ms
    return sat((e) => e + 1)
  }, []);
  return (
    <>

      <div className="flex flex-col-reverse items-center justify-center lg:flex-row my-[-72px] lg:my-[-128px] h-[100vh]" >

        <motion.div
          initial={isLarge ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 9, duration: 0.8 }}
          className="w-96 lg:w-[32rem]"
        >
          <Lottie animationData={animation} loop={true} />
        </motion.div>
        <div className="text-left px-8 w-96 h-[220px] ">
          <TypeAnimation
            sequence={[
              "Hi, I'm Aaron Wang!",
            ]}
            className="text-3xl font-bold py-2"
            wrapper="h1"
            speed={50}
            style={{ display: 'block' }}
            repeat={0}
            omitDeletionAnimation={true}
            cursor={false}
          />
          <TypeAnimation
            sequence={[
              2000,
              "I'm a rising junior studying Computer Science and Applied Mathematics/Statistics at the University of Notre Dame. Explore my resume, experience, projects, and courses!",
            ]}
            className="text-muted-foreground text-base leading-relaxed py-2"
            wrapper="p"
            speed={64}
            style={{ display: 'block' }}
            repeat={0}
            omitDeletionAnimation={true}
            cursor={false}
          />

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 9, duration: 0.8 }}
            target="_blank" href="https://drive.google.com/file/d/1hQEJ8JxSfK0S432iqlYz3kVYIHUYVZbA/view?usp=sharing" className="py-2 block">
            <Button size="sm" className="bg-[var(--teal-accent)] hover:bg-[var(--teal-accent)] text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
              <Download size={16} />
              <span >View Resume</span>
            </Button>
          </motion.a>
        </div>
      </div>
    </>)
}
import { HouseIcon, InboxIcon, IdCard, SchoolIcon, ContactIcon, FileText, GraduationCap } from "lucide-react"

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useState, useEffect } from 'react';
// Navigation links array
const navigationLinks = [
  { href: "#", label: "Home", icon: HouseIcon },
  { href: "#experience", label: "Experience", icon: FileText },
  { href: "#projects", label: "Projects", icon: InboxIcon },
  { href: "#courses", label: "Courses", icon: GraduationCap },
  { href: "#contact", label: "Contact", icon: ContactIcon },
]

export default function Navbar() {
  const [navReset, setNavReset] = useState(0);
  const active = useLocation().pathname
  const [expanded, setExpanded] = useState(navReset !== 0);
  useEffect(() => {
    // Set aria-expanded to true a tick after mount
    const timeout = setTimeout(() => setExpanded(false), 1);
    return () => clearTimeout(timeout);
  }, [navReset]);

  return (
    <header className="border-b px-4 md:px-6 sticky top-0 z-1000 opacity-100 bg-[var(--background)]/90" key={navReset}>
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
                aria-expanded={expanded}
                onClick={() => setExpanded(!expanded)}
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden z-1100">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <NavigationMenuItem key={index} className="w-full" onClick={() => { setNavReset((e) => e + 1) }}>
                        <NavigationMenuLink
                          href={link.href}
                          className="flex-row items-center gap-2 py-1.5"
                          active={link.href === active}
                        >
                          <Icon
                            size={16}
                            className="text-muted-foreground/80"
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={link.href === active}
                      href={link.href}
                      className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium"
                    >
                      <Icon
                        size={16}
                        className="text-muted-foreground/80"
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Middle side: Logo */}
        {/* <div className="flex items-center">
          <a href="#" className="text-primary hover:text-primary/90">
            <Logo />
          </a>
        </div> */}

        {/* Right side: Actions */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {/* User menu */}
          <Button size="sm" className="text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
            <a target="_blank" href="https://www.linkedin.com/in/aaron-r-wang/">
              <FaLinkedin size={16} />
              <span className="sr-only">Linkedin</span>
            </a>
          </Button>
          {/* Upgrade button */}
          <Button size="sm" className="text-sm sm:aspect-square transition-transform duration-200 hover:scale-105">
            <a target="_blank" href="https://github.com/aaronrwang" >
              <FaGithub size={16} />
              <span className="sr-only">Github</span>
            </a>
          </Button>
        </div>
      </div>
    </header >
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-primary">Hello! I'm Camilo, a full-stack developer</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          I build accessible, performant, and user-friendly web applications that solve real-world problems.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://github.com/CamiloTello002"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/camilo-jos%C3%A9-rueda-tello-701778253/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-square max-w-md mx-auto lg:ml-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
        <div className="absolute inset-4 bg-muted rounded-full overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Developer portrait"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  )
}

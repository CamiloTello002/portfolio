"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 bg-muted rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Developer working on code"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h3>
          <p className="text-muted-foreground mb-4">
            I'm a passionate full stack developer with over 5 years of experience building web applications that deliver
            exceptional user experiences.
          </p>
          <p className="text-muted-foreground mb-4">
            My approach combines technical expertise with a deep understanding of user needs. I believe in writing
            clean, maintainable code and creating intuitive interfaces that make technology accessible to everyone.
          </p>
          <p className="text-muted-foreground mb-6">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
            sharing my knowledge through my technical blog.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
            <div>
              <h4 className="font-medium">Experience</h4>
              <p className="text-muted-foreground">5+ Years</p>
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">hello@example.com</p>
            </div>
            <div>
              <h4 className="font-medium">Availability</h4>
              <p className="text-muted-foreground">Open to opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import "./../styles/about.css"

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
          className="relative aspect-square max-w-md min-h-64 mx-auto"
        >
          <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 bg-muted rounded-lg overflow-hidden">
            <img
              src="/pfp.jpeg"
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
            Hi, I'm <span className="text-primary">Camilo José Rueda Tello</span>
          </h3>
          <p className="text-muted-foreground mb-4">Hey! I'm a full stack developer based in Colombia, working across both frontend and backend to bring ideas to life. I care deeply about crafting smooth, intuitive user experiences and writing clean, maintainable code that lasts.</p>
          <p className="text-muted-foreground mb-4">I'm big on collaboration — I enjoy working closely with teams to turn complex problems into simple, usable solutions. My projects always aim to bridge the gap between solid engineering and thoughtful design.</p>
          <p className="text-muted-foreground mb-6">When I’m not coding, you’ll probably find me out on a run or getting lost in a music rabbit hole. I'm currently open to full-time remote opportunities — feel free to reach out if you’d like to build something cool together.</p>

          <div className="grid grid-cols-2 gap-4 info-grid">
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">Bucaramanga, Colombia</p>
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">camilojtello5@gmail.com</p>
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

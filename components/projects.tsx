"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Express It",
    description:
      "Blog application for allowing bloggers to express their ideas and connect with like-minded people.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "JavaScript", "Express.js", "MongoDB"],
    repoUrl: "https://github.com/CamiloTello002/Express-It",
    longDescription:
      "Express It is a web application built on top of the MERN stack. It has features such as creating your own account and adding images to your account.",
  },
  {
    id: 2,
    title: "Talent Trade",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    longDescription:
      "This task management application helps teams organize and track their work efficiently. It includes features like task creation and assignment, due dates, priority levels, comments, file attachments, and real-time notifications. The app supports multiple workspaces for different teams or projects, with customizable workflows and permission settings. Built with React for the frontend, Node.js and Express for the backend, MongoDB for data storage, and Socket.io for real-time updates.",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openProjectDialog = (project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  return (
    <div ref={ref} className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience. Click on a project to learn more
          about it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                loading="lazy"
              />
              <button
                onClick={() => openProjectDialog(project)}
                className="absolute top-2 right-2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                aria-label="View project details"
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Code
                  </a>
                </Button>
                {project.liveUrl && (

                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{selectedProject.longDescription}</p>
              <div className="flex gap-3">
                <Button variant="outline" asChild>
                  <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

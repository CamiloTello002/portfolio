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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    longDescription:
      "This e-commerce platform provides businesses with a complete solution for selling products online. It features a responsive design, product search and filtering, user authentication, shopping cart, checkout process with Stripe integration, and an admin dashboard for managing products and orders. The application is built with Next.js for server-side rendering and optimal performance, TypeScript for type safety, and Prisma for database management.",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    longDescription:
      "This task management application helps teams organize and track their work efficiently. It includes features like task creation and assignment, due dates, priority levels, comments, file attachments, and real-time notifications. The app supports multiple workspaces for different teams or projects, with customizable workflows and permission settings. Built with React for the frontend, Node.js and Express for the backend, MongoDB for data storage, and Socket.io for real-time updates.",
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "A mobile-responsive application for tracking workouts, nutrition, and health metrics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Redux", "Chart.js", "REST API"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    longDescription:
      "This health and fitness tracker helps users monitor their physical activity, nutrition, and health metrics. It includes workout logging with exercise library, meal tracking with nutritional information, weight and body measurement tracking, goal setting, and progress visualization with charts and graphs. The app also provides personalized recommendations based on user data and integrates with popular fitness devices. Built with React Native for cross-platform compatibility, Firebase for backend services, and Redux for state management.",
  },
  {
    id: 4,
    title: "Content Management System",
    description: "A headless CMS with a user-friendly interface for managing digital content across platforms.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "GraphQL", "PostgreSQL", "Docker", "AWS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    longDescription:
      "This headless CMS provides a flexible solution for managing digital content across multiple platforms. It features content modeling with custom fields, media management, versioning and publishing workflows, user roles and permissions, and a GraphQL API for content delivery. The system supports multilingual content, scheduled publishing, and content previews. Built with Vue.js for the admin interface, GraphQL for the API, PostgreSQL for data storage, and containerized with Docker for easy deployment on AWS.",
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    description: "A platform connecting property buyers, sellers, and agents with advanced search and filtering.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Django", "PostgreSQL", "Google Maps API", "AWS S3"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    longDescription:
      "This real estate marketplace connects property buyers, sellers, and agents in a user-friendly platform. It features property listings with detailed information and media galleries, advanced search and filtering options, map-based property exploration, saved searches and favorites, agent profiles and messaging, and property alerts. The platform includes virtual tours, mortgage calculators, and neighborhood information. Built with Next.js for the frontend, Django for the backend, PostgreSQL for data storage, Google Maps API for location features, and AWS S3 for media storage.",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "An educational platform with course creation, student management, and interactive learning features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    longDescription:
      "This learning management system provides educational institutions and content creators with tools for delivering online courses. It includes course creation and management, student enrollment and progress tracking, interactive content with quizzes and assignments, discussion forums, video conferencing for live classes, and certificate generation. The platform supports different content formats, grading systems, and learning paths. Built with React for the frontend, Node.js for the backend, MongoDB for data storage, WebRTC for video conferencing, and various AWS services for scalability.",
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
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl">
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

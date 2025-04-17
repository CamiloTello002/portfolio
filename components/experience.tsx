
"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CalendarIcon } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Mintec Digital",
    position: "Full stack developer",
    period: "Aug 2024 - Mar 2025",
    description:
      "Lead developer for the company's flagship SaaS platform. Architected and implemented new features, improved performance, and mentored junior developers.",
    achievements: [
      "Optimized frontend performance with React Server Components for better SEO and faster page loads.",
      "Designed and implemented loading states and error UIs to enhance UX and improve user feedback",
      "Deployed the application using Docker and Coolify, automating the deployment process for scalability and reliability",
      "Managed backend operations with Node.js, Supabase, and PostgreSQL, ensuring efficient data storage and retrieval",
    ],
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Supabase", "PostgreSQL", "Prisma"],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          My professional journey as a developer, showcasing my roles and achievements at various companies.
        </p>
      </motion.div>

      <div className="relative border-l-2 border-primary/30 pl-6 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[34px] top-1.5 border-4 border-background"></div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <BriefcaseIcon className="h-4 w-4 mr-1" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

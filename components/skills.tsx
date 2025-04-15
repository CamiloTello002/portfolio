"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Layout, Server, Terminal, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "NestJS", "Python", "Django", "REST APIs"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Supabase"],
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["React Native", "Flutter", "Responsive Design", "PWAs"],
  },
  {
    category: "Other",
    icon: <Code className="h-6 w-6" />,
    items: ["GraphQL", "WebSockets", "Testing", "Accessibility", "SEO", "Performance"],
  },
]

export default function Skills() {
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
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          I've worked with a variety of technologies across the full stack development spectrum. Here's a snapshot of my
          technical expertise:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary mr-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.category}</h3>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

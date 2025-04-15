"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn how to create web applications that are accessible to everyone, including people with disabilities.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Accessibility", "Frontend", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Optimizing React Performance",
    excerpt:
      "Discover techniques to improve the performance of your React applications and provide a better user experience.",
    date: "April 22, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: 3,
    title: "Introduction to Server Components in Next.js",
    excerpt:
      "Explore the new Server Components feature in Next.js and how it can improve your application architecture.",
    date: "March 10, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Server Components"],
  },
]

export default function BlogPreview() {
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
        <h2 className="text-3xl md:text-4xl font-bold">From My Blog</h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          I write about web development, design, and technology. Here are some of my recent articles.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <span className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {post.readTime}
                </span>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={`/blog/${post.id}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild>
          <a href="/blog">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}

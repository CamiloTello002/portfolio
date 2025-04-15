import { ArrowDown } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import BlogPreview from "@/components/blog-preview"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed header with theme toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-40 border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="font-bold text-xl">
            <span className="text-primary">Camilo Tello</span>
          </div>
          <ul className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <div className="container px-4 mx-auto pt-20">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <div className="flex justify-center pb-20">
          <a
            href="#about"
            className="animate-bounce rounded-full p-2 bg-primary/10 text-primary"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </a>
        </div>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="blog" className="py-20">
          <BlogPreview />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and shadcn/ui</p>
        </div>
      </footer>
    </main>
  )
}

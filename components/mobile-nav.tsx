
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import ThemeToggle from "./theme-toggle"

const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Blog", "Contact"]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Button
        id="menu-button"
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background border-l border-border z-50 md:hidden"
            >
              <div className="flex flex-col min-h-screen p-6 bg-background">
                <div className="flex justify-between items-center mb-8">
                  <div className="font-bold text-xl">
                    <span className="text-primary">Dev</span>Portfolio
                  </div>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close navigation menu"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="block py-2 text-lg hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Camilo Tello</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

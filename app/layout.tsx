import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Camilo Tello",
  description: " Full- stack developer specializing in building scalable web applications with modern technologies.Strong focus on frontend development using React, Next.js, TypeScript, and TailwindCSS, with experience optimizing performance through server components, responsive design, and error handling.Proficient in backend development with Node.js, Supabase, and PostgresSQL, as well as containerized deployments with Docker.Passionate about delivering efficient, user - friendly solutions with a keen eye for UI / UX and SEO optimization. ",
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'

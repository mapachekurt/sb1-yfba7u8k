"use client"

import { motion } from "framer-motion"
import { Button } from "ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold">Your SaaS</h1>
              </div>
            </div>
            <div className="flex items-center">
              <Button asChild variant="outline" className="mr-4">
                <Link href="https://app.yourdomain.com">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="https://app.yourdomain.com/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Your SaaS Solution for</span>
              <span className="block text-primary">Modern Problems</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your workflow with our powerful platform. Built for teams who demand excellence.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Button size="lg" asChild>
                <Link href="https://app.yourdomain.com/signup">Start Free Trial</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
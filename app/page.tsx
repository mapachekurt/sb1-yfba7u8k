"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Modern Web App</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Built with Next.js, Tailwind CSS, and Supabase
        </p>
        <Button size="lg">Get Started</Button>
      </motion.div>
    </div>
  )
}
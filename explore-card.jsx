"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ExploreCard() {
  return (
    (<div className="min-h-screen bg-teal-900/90 p-4">
      <header className="flex items-center gap-2 mb-8">
        <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
          <span className="block w-3 h-3 bg-white/20 rounded-sm" />
        </div>
        <span className="text-white/90 text-lg">Explore</span>
      </header>
      <Card className="bg-transparent border-0 shadow-none">
        <CardContent className="p-0">
          <div className="relative mb-6">
            <div
              className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-6">
              <Search className="w-full h-full text-gray-800" />
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
              UPGRADE PLAN
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h1 className="text-2xl font-semibold text-white">Ignite learning</h1>
            <p className="text-white/70 text-sm leading-relaxed">
              Discover new subjects, expand your knowledge & connect with fellow learners...
            </p>
            <Button
              className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full h-12"
              variant="ghost">
              Start now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}


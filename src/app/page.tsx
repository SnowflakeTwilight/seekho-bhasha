"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Apple, Home, BookMarked, TrendingUp, Globe } from "lucide-react"
import FlashcardGame from "./components/flashcard-game"
import { modules } from "@/lib/newdata"

export default function LanguageLearningApp() {
  const [currentView, setCurrentView] = useState<"home" | "game" | "progress">("home")
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [lang, setLang] = useState<"en" | "sa">("en")

  const moduleIcons = {
    fruits: Apple,
    animals: Users,
    places: MapPin,
    people: Users,
  }

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId)
    setCurrentView("game")
  }

  const handleBackToHome = () => {
    setCurrentView("home")
    setSelectedModule(null)
  }

  const toggleLanguage = () => {
    setLang(prev => prev === "en" ? "sa" : "en")
  }

  if (currentView === "game" && selectedModule) {
    return <FlashcardGame module={modules[selectedModule][lang]} onBack={handleBackToHome} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">VocabCards</h1>
              <p className="text-sm text-gray-600 mt-1">Learn vocabulary through images</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {lang === "en" ? "English" : "संस्कृतम्"}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {currentView === "home" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Choose a Module</h2>
              <p className="text-gray-600 text-sm">Select a category to start learning</p>
            </div>

            <div className="grid gap-4">
              {Object.entries(modules).map(([key, module]) => {
                const IconComponent = moduleIcons[key as keyof typeof moduleIcons]
                const currentModule = module[lang]
                return (
                  <Card
                    key={key}
                    className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => handleModuleSelect(key)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 capitalize">{currentModule.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{currentModule.description}</p>
                          <div className="flex items-center mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {currentModule.cards.length} cards
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {currentView === "progress" && (
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Progress Tracking</h2>
            <p className="text-gray-600">Coming soon! Track your learning progress here.</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-around py-2">
            <Button
              variant={currentView === "home" ? "default" : "ghost"}
              size="sm"
              className="flex flex-col items-center py-3 px-6"
              onClick={() => setCurrentView("home")}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs">Home</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center py-3 px-6">
              <BookMarked className="w-5 h-5 mb-1" />
              <span className="text-xs">Modules</span>
            </Button>
            <Button
              variant={currentView === "progress" ? "default" : "ghost"}
              size="sm"
              className="flex flex-col items-center py-3 px-6"
              onClick={() => setCurrentView("progress")}
            >
              <TrendingUp className="w-5 h-5 mb-1" />
              <span className="text-xs">Progress</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

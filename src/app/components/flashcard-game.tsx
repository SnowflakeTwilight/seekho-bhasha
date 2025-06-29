"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, RotateCcw, CheckCircle, XCircle, ChevronRight } from "lucide-react"
import Image from "next/image"
import ReviewPage from "./review-page"

interface FlashCard {
  id: string
  image: string
  question: string
  options: string[]
  correctAnswer: number
}

interface Module {
  name: string
  description: string
  cards: FlashCard[]
}

interface GameResult {
  cardId: string
  userAnswer: number
  correctAnswer: number
  question: string
  image: string
  options: string[]
}

interface FlashcardGameProps {
  module: Module
  onBack: () => void
}

export default function FlashcardGame({ module, onBack }: FlashcardGameProps) {
  const [mode, setMode] = useState<"learner" | "check">("learner")
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [shuffledCards, setShuffledCards] = useState<FlashCard[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameResults, setGameResults] = useState<GameResult[]>([])
  const [gameComplete, setGameComplete] = useState(false)

  // Shuffle cards on component mount
  useEffect(() => {
    const shuffled = [...module.cards].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled)
  }, [module.cards])

  const currentCard = shuffledCards[currentCardIndex]

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)

    // Record the result
    const result: GameResult = {
      cardId: currentCard.id,
      userAnswer: answerIndex,
      correctAnswer: currentCard.correctAnswer,
      question: currentCard.question,
      image: currentCard.image,
      options: currentCard.options,
    }

    setGameResults((prev) => [...prev, result])

    if (mode === "learner") {
      setShowFeedback(true)
      // Auto advance after 2 seconds
      setTimeout(() => {
        handleNextCard()
      }, 2000)
    } else {
      // In check mode, advance immediately
      setTimeout(() => {
        handleNextCard()
      }, 500)
    }
  }

  const handleNextCard = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      // Game complete
      setGameComplete(true)
    }
  }

  const resetGame = () => {
    setCurrentCardIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setGameResults([])
    setGameComplete(false)
    const shuffled = [...module.cards].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled)
  }

  if (gameComplete) {
    return (
      <ReviewPage
        results={gameResults}
        mode={mode}
        moduleName={module.name}
        onTryAgain={resetGame}
        onBackToModules={onBack}
      />
    )
  }

  if (!currentCard) return null

  const isCorrect = selectedAnswer === currentCard.correctAnswer
  const progress = ((currentCardIndex + 1) / shuffledCards.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="text-center">
              <h2 className="font-semibold text-gray-900 capitalize">{module.name}</h2>
              <p className="text-xs text-gray-600">
                {currentCardIndex + 1} of {shuffledCards.length}
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={resetGame}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mode Toggle */}
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <Button
            variant={mode === "learner" ? "default" : "ghost"}
            size="sm"
            className="flex-1"
            onClick={() => setMode("learner")}
          >
            Learner Mode
          </Button>
          <Button
            variant={mode === "check" ? "default" : "ghost"}
            size="sm"
            className="flex-1"
            onClick={() => setMode("check")}
          >
            Check Mode
          </Button>
        </div>
      </div>

      {/* Flashcard */}
      <div className="max-w-md mx-auto px-4 pb-20">
        <Card className="w-full shadow-xl">
          <CardContent className="p-0">
            {/* Image Section */}
            <div className="relative h-64 bg-gray-100 rounded-t-lg overflow-hidden">
              <Image
                src={currentCard.image || "/placeholder.svg"}
                alt={currentCard.question}
                fill
                className="object-cover"
              />: 
  <img
    src={currentCard.image}
    alt={currentCard.question}
    className="w-full h-full object-cover"
  />
            </div>

            {/* Question and Options */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{currentCard.question}</h3>

              <div className="space-y-3">
                {currentCard.options.map((option, index) => {
                  let buttonClass =
                    "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 hover:shadow-md"

                  if (selectedAnswer === index) {
                    if (mode === "learner" && showFeedback) {
                      buttonClass +=
                        index === currentCard.correctAnswer
                          ? " border-green-500 bg-green-50 text-green-800"
                          : " border-red-500 bg-red-50 text-red-800"
                    } else {
                      buttonClass += " border-indigo-500 bg-indigo-50"
                    }
                  } else if (
                    mode === "learner" &&
                    showFeedback &&
                    index === currentCard.correctAnswer &&
                    selectedAnswer !== index
                  ) {
                    buttonClass += " border-green-500 bg-green-50 text-green-800"
                  } else {
                    buttonClass += " border-gray-200 hover:border-gray-300"
                  }

                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className={buttonClass}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium">{option}</span>
                        {mode === "learner" &&
                          showFeedback &&
                          selectedAnswer === index &&
                          (index === currentCard.correctAnswer ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          ))}
                        {mode === "learner" &&
                          showFeedback &&
                          index === currentCard.correctAnswer &&
                          selectedAnswer !== index && <CheckCircle className="w-5 h-5 text-green-600" />}
                      </div>
                    </Button>
                  )
                })}
              </div>

              {/* Feedback Message */}
              {mode === "learner" && showFeedback && (
                <div className="mt-4 text-center">
                  <Badge variant={isCorrect ? "default" : "destructive"} className="text-sm py-1 px-3">
                    {isCorrect ? "Correct! Well done!" : "Incorrect. Try to remember!"}
                  </Badge>
                </div>
              )}

              {/* Next Button for Check Mode */}
              {mode === "check" && selectedAnswer !== null && (
                <Button className="w-full mt-4" onClick={handleNextCard}>
                  Next Card
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

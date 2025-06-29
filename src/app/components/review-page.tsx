"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, RotateCcw, ArrowLeft, Trophy } from "lucide-react"
import Image from "next/image"

interface GameResult {
  cardId: string
  userAnswer: number
  correctAnswer: number
  question: string
  image: string
  options: string[]
}

interface ReviewPageProps {
  results: GameResult[]
  mode: "learner" | "check"
  moduleName: string
  onTryAgain: () => void
  onBackToModules: () => void
}

export default function ReviewPage({ results, mode, moduleName, onTryAgain, onBackToModules }: ReviewPageProps) {
  const correctCount = results.filter((result) => result.userAnswer === result.correctAnswer).length
  const totalCount = results.length
  const percentage = Math.round((correctCount / totalCount) * 100)

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadgeVariant = (percentage: number) => {
    if (percentage >= 80) return "default"
    if (percentage >= 60) return "secondary"
    return "destructive"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={onBackToModules}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Modules
            </Button>
            <div className="text-center">
              <h2 className="font-semibold text-gray-900">Review Results</h2>
              <p className="text-xs text-gray-600 capitalize">{moduleName}</p>
            </div>
            <div className="w-16" /> {/* Spacer */}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 pb-20">
        {/* Score Summary */}
        <Card className="mb-6 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <Trophy className={`w-16 h-16 mx-auto mb-3 ${getScoreColor(percentage)}`} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good Job!" : "Keep Practicing!"}
              </h3>
              <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>{percentage}%</div>
              <p className="text-gray-600">
                {correctCount} out of {totalCount} correct
              </p>
            </div>

            <Badge variant={getScoreBadgeVariant(percentage)} className="text-sm py-1 px-4">
              {correctCount}/{totalCount} Correct
            </Badge>
          </CardContent>
        </Card>

        {/* Individual Results */}
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Review Your Answers</h3>

          {results.map((result, index) => {
            const isCorrect = result.userAnswer === result.correctAnswer

            return (
              <Card key={result.cardId} className="shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    {/* Image */}
                    <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={result.image || "/placeholder.svg"}
                        alt={result.question}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{result.question}</h4>
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        )}
                      </div>

                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">Your answer:</span>
                          <span className={isCorrect ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                            {result.options[result.userAnswer]}
                          </span>
                        </div>

                        {!isCorrect && (
                          <div className="flex items-center">
                            <span className="text-gray-600 mr-2">Correct answer:</span>
                            <span className="text-green-700 font-medium">{result.options[result.correctAnswer]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full" size="lg" onClick={onTryAgain}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>

          <Button variant="outline" className="w-full bg-transparent" size="lg" onClick={onBackToModules}>
            Return to Modules
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, UtensilsCrossed, Sprout, Fish } from "lucide-react"

export default function DietRecommender() {
  const [dietType, setDietType] = useState("vegetarian")
  const [meals, setMeals] = useState(3)
  const [calories, setCalories] = useState(2000)
  const [recommendation, setRecommendation] = useState(null)

  const generateRecommendation = () => {
    const mealCalories = Math.floor(calories / meals)
    const dietRecommendation = { meals: [] }

    for (let i = 0; i < meals; i++) {
      let meal = ""
      switch (dietType) {
        case "vegetarian":
          meal = `Meal ${i + 1} (${mealCalories} calories): `
          meal += "Lentil soup, mixed vegetable salad, whole grain bread"
          break
        case "non-vegetarian":
          meal = `Meal ${i + 1} (${mealCalories} calories): `
          meal += "Grilled chicken breast, steamed broccoli, brown rice"
          break
        case "vegan":
          meal = `Meal ${i + 1} (${mealCalories} calories): `
          meal += "Tofu stir-fry with vegetables, quinoa"
          break
        case "pescatarian":
          meal = `Meal ${i + 1} (${mealCalories} calories): `
          meal += "Grilled salmon, roasted vegetables, quinoa"
          break
      }
      dietRecommendation.meals.push(meal)
    }

    setRecommendation(dietRecommendation)
  }

  return (
    <div className="min-h-screen bg-gray-400 py-24 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Personalized Nutrition Planning</h1>
          <p className="text-xl text-gray-600">
            Create your customized meal plan based on your dietary preferences and nutritional goals
          </p>
        </div>

        <Card className="bg-white shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Your Diet Type</h2>
              <RadioGroup defaultValue={dietType} onValueChange={(value) => setDietType(value)} className="space-y-4">
                <div className="relative">
                  <RadioGroupItem value="vegetarian" id="vegetarian" className="peer sr-only" />
                  <Label
                    htmlFor="vegetarian"
                    className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                  >
                    <Leaf className="w-5 h-5 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Vegetarian</div>
                      <div className="text-sm text-gray-500">Plant-based diet with dairy and eggs</div>
                    </div>
                  </Label>
                </div>

                <div className="relative">
                  <RadioGroupItem value="non-vegetarian" id="non-vegetarian" className="peer sr-only" />
                  <Label
                    htmlFor="non-vegetarian"
                    className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                  >
                    <UtensilsCrossed className="w-5 h-5 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Non-Vegetarian</div>
                      <div className="text-sm text-gray-500">Includes all types of meat</div>
                    </div>
                  </Label>
                </div>

                <div className="relative">
                  <RadioGroupItem value="vegan" id="vegan" className="peer sr-only" />
                  <Label
                    htmlFor="vegan"
                    className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                  >
                    <Sprout className="w-5 h-5 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Vegan</div>
                      <div className="text-sm text-gray-500">100% plant-based diet</div>
                    </div>
                  </Label>
                </div>

                <div className="relative">
                  <RadioGroupItem value="pescatarian" id="pescatarian" className="peer sr-only" />
                  <Label
                    htmlFor="pescatarian"
                    className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
                  >
                    <Fish className="w-5 h-5 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Pescatarian</div>
                      <div className="text-sm text-gray-500">Vegetarian diet with seafood</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="meals" className="text-sm font-medium block">
                  Number of Meals
                </Label>
                <Input
                  id="meals"
                  type="number"
                  value={meals}
                  onChange={(e) => setMeals(Number.parseInt(e.target.value))}
                  min={1}
                  max={6}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="calories" className="text-sm font-medium block">
                  Total Calorie Intake
                </Label>
                <Input
                  id="calories"
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(Number.parseInt(e.target.value))}
                  min={1000}
                  max={5000}
                  className="w-full"
                />
              </div>

              <Button onClick={generateRecommendation} className="w-full h-12 text-lg font-medium">
                Generate Meal Plan
              </Button>
            </div>

            {recommendation && (
              <div className="pt-6 border-t">
                <h3 className="text-xl font-semibold mb-4">Your Meal Plan</h3>
                <div className="space-y-3">
                  {recommendation.meals.map((meal, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      {meal}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


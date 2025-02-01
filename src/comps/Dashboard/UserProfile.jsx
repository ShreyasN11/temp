"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Award, Calendar } from "lucide-react"

export default function UserProfile() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card className="w-full max-w-md overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-200">User Profile</CardTitle>
        <Award className="h-6 w-6 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Avatar
              className="h-24 w-24 border-4 border-white dark:border-gray-800 shadow-md transition-transform duration-300 ease-in-out"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            >
              <AvatarImage src="/avatar.png" alt="User avatar" />
              <AvatarFallback className="bg-blue-500 text-white text-2xl">JD</AvatarFallback>
            </Avatar>
            {isHovered && <Badge className="absolute -top-2 -right-2 bg-blue-500">Active</Badge>}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">John Doe</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Premium Member</p>
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Member Since
              </span>
              <span>January 2023</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <Activity className="h-4 w-4 mr-1" />
                Workout Streak
              </span>
              <span>15 days</span>
            </div>
          </div>
          <div className="w-full pt-2 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Recent Achievements</h3>
            <div className="flex justify-between">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                5K Run
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
              >
                Yoga Master
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100"
              >
                Weight Goal
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


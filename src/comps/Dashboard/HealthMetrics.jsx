"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", weight: 180, bmi: 24.5 },
  { day: "Tue", weight: 179, bmi: 24.4 },
  { day: "Wed", weight: 178, bmi: 24.2 },
  { day: "Thu", weight: 178, bmi: 24.2 },
  { day: "Fri", weight: 177, bmi: 24.1 },
  { day: "Sat", weight: 176, bmi: 23.9 },
  { day: "Sun", weight: 175, bmi: 23.7 },
];

export default function HealthMetrics() {
  return (
    <Card className="shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Health Metrics</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[250px] bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="day" tick={{ fill: "#666" }} />
              <YAxis tick={{ fill: "#666" }} />
              <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none", padding: "10px" }} />
              <Line type="monotone" dataKey="weight" stroke="#ff7300" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="bmi" stroke="#387908" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Weight Trend:</strong> 180 lbs → 175 lbs</p>
          <p><strong>BMI Trend:</strong> 24.5 → 23.7</p>
        </div>
      </CardContent>
    </Card>
  );
}

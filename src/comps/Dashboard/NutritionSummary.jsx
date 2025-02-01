"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Protein", value: 30 },
  { name: "Carbs", value: 45 },
  { name: "Fat", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function NutritionSummary() {
  return (
    <Card className="shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] rounded-xl p-6 transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
          Nutrition Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] flex flex-col items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none", padding: "10px" }} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={85}
                dataKey="value"
                className="cursor-pointer"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="white"
                    strokeWidth={2}
                    as={motion.path}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          {data.map((entry, index) => (
            <motion.div
              key={`legend-${index}`}
              className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md shadow-sm"
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="w-4 h-4 mr-2 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="text-gray-800 dark:text-gray-300 font-medium">
                {entry.name}: {entry.value}%
              </span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

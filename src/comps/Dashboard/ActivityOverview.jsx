"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Mon", total: 4000 },
  { name: "Tue", total: 3000 },
  { name: "Wed", total: 2000 },
  { name: "Thu", total: 2780 },
  { name: "Fri", total: 1890 },
  { name: "Sat", total: 2390 },
  { name: "Sun", total: 3490 },
];

export default function ActivityOverview() {
  return (
    <Card className="shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] rounded-xl p-6 transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
          Activity Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[250px] bg-gray-100 dark:bg-gray-900 rounded-lg p-2 shadow-inner">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
              <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "none",
                  padding: "10px",
                }}
              />
              <Bar
                dataKey="total"
                fill="#007bff"
                radius={[6, 6, 0, 0]}
                className="transition-all duration-300 hover:scale-[1.05] cursor-pointer"
                as={motion.rect}
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

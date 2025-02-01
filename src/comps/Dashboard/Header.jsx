"use client";

import { Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-4"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

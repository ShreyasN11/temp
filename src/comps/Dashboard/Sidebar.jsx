"use client";

import Link from "next/link";
import { Home, Activity, Dumbbell, Utensils, User, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Activity, label: "Activity", href: "/activity" },
  { icon: Dumbbell, label: "Workouts", href: "/workouts" },
  { icon: Utensils, label: "Nutrition", href: "/nutrition" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-white dark:bg-gray-800 w-64 min-h-screen flex flex-col">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-bold text-primary">Gimify</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
                  pathname === item.href && "bg-gray-200 dark:bg-gray-700"
                )}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

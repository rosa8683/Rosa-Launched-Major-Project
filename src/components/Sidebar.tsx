
import React from 'react';
import { cn } from "@/lib/utils";
import { Eye, PlayCircle, CheckCircle, PauseCircle, XCircle, Clock } from "lucide-react";
import type { WatchStatus } from "@/types";

interface SidebarProps {
  activeCategory: WatchStatus;
  onCategoryChange: (category: WatchStatus) => void;
  counts: Record<WatchStatus, number>;
}

const Sidebar = ({ activeCategory, onCategoryChange, counts }: SidebarProps) => {
  const categories: { id: WatchStatus; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Shows', icon: <Eye className="h-4 w-4" /> },
    { id: 'watching', label: 'Watching', icon: <PlayCircle className="h-4 w-4" /> },
    { id: 'completed', label: 'Completed', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'on hold', label: 'On Hold', icon: <PauseCircle className="h-4 w-4" /> },
    { id: 'dropped', label: 'Dropped', icon: <XCircle className="h-4 w-4" /> },
    { id: 'plan to watch', label: 'Plan to Watch', icon: <Clock className="h-4 w-4" /> },
  ];

  return (
    <div className="w-64 min-w-64 border-r h-[calc(100vh-4rem)] overflow-y-auto hidden md:block">
      <div className="py-6 px-4">
        <h2 className="text-lg font-semibold mb-4">My Lists</h2>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm rounded-md font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-anime-primary text-white"
                    : "hover:bg-muted"
                )}
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.label}</span>
                </div>
                <span className="bg-background/20 text-xs rounded-full px-2 py-0.5">
                  {counts[category.id]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


import React from 'react';
import { WatchStatus } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye, PlayCircle, CheckCircle, PauseCircle, XCircle, Clock } from 'lucide-react';

interface MobileNavProps {
  activeCategory: WatchStatus;
  onCategoryChange: (category: WatchStatus) => void;
}

const MobileNav = ({ activeCategory, onCategoryChange }: MobileNavProps) => {
  const categories = [
    { id: 'all' as WatchStatus, label: 'All', icon: <Eye className="h-4 w-4" /> },
    { id: 'watching' as WatchStatus, label: 'Watching', icon: <PlayCircle className="h-4 w-4" /> },
    { id: 'completed' as WatchStatus, label: 'Completed', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'on hold' as WatchStatus, label: 'On Hold', icon: <PauseCircle className="h-4 w-4" /> },
    { id: 'dropped' as WatchStatus, label: 'Dropped', icon: <XCircle className="h-4 w-4" /> },
    { id: 'plan to watch' as WatchStatus, label: 'Plan to Watch', icon: <Clock className="h-4 w-4" /> },
  ];

  return (
    <div className="md:hidden sticky top-16 z-10 border-b bg-background/95 backdrop-blur overflow-x-auto">
      <div className="flex p-2 gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            size="sm"
            className={cn(
              "py-1 px-3 flex items-center gap-1.5 whitespace-nowrap",
              activeCategory === category.id
                ? "bg-anime-primary text-white"
                : "hover:bg-muted"
            )}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.icon}
            <span className="text-xs">{category.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;

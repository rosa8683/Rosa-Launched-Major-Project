
import React from 'react';
import { AnimeShow, WatchStatus } from '@/types';
import AnimeCard from './AnimeCard';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';

interface ShowsGridProps {
  shows: AnimeShow[];
  status: WatchStatus;
}

const ShowsGrid = ({ shows, status }: ShowsGridProps) => {
  const filteredShows = status === 'all' 
    ? shows 
    : shows.filter(show => show.status === status);

  const statusCapitalized = status.charAt(0).toUpperCase() + status.slice(1);
  
  return (
    <div className="py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold">{status === 'all' ? 'All Shows' : `${statusCapitalized}`}</h2>
        
        <div className="flex mt-2 sm:mt-0 space-x-2 w-full sm:w-auto">
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            <Select defaultValue="newest">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="anime">Anime</SelectItem>
              <SelectItem value="tv">TV Series</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredShows.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium text-muted-foreground mb-3">
            No shows found in this category
          </h3>
          <p className="text-muted-foreground mb-6">
            Start adding shows to your {status} list to see them here.
          </p>
          <Button className="bg-anime-primary hover:bg-anime-secondary">
            Discover New Shows
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredShows.map((show) => (
            <AnimeCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowsGrid;

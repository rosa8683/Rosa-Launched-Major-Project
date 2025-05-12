
import React from 'react';
import { Club } from '@/types';
import ClubCard from './ClubCard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ClubsSectionProps {
  clubs: Club[];
}

const ClubsSection = ({ clubs }: ClubsSectionProps) => {
  return (
    <div className="py-8 border-t">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Clubs</h2>
        <Button className="bg-anime-primary hover:bg-anime-secondary flex items-center gap-1">
          <Plus className="h-4 w-4" /> Create Club
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button variant="outline" className="border-anime-primary text-anime-primary hover:bg-anime-primary/10">
          Explore All Clubs
        </Button>
      </div>
    </div>
  );
};

export default ClubsSection;

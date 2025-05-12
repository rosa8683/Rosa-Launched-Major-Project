
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare } from 'lucide-react';
import type { Club } from '@/types';

interface ClubCardProps {
  club: Club;
}

const ClubCard = ({ club }: ClubCardProps) => {
  return (
    <Card className="club-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={club.imageUrl}
          alt={club.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="font-semibold text-white">{club.name}</h3>
        </div>
      </div>

      <CardContent className="pt-4 pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {club.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {club.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{club.members}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{club.posts}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4">
        <Button className="w-full bg-anime-primary hover:bg-anime-secondary">
          Join Club
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClubCard;

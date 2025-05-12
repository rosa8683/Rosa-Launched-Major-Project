
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import type { AnimeShow } from '@/types';

interface AnimeCardProps {
  show: AnimeShow;
}

const AnimeCard = ({ show }: AnimeCardProps) => {
  const progressPercent = (show.watchedEpisodes / show.totalEpisodes) * 100;

  return (
    <Card className="anime-card-hover overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={show.imageUrl}
          alt={show.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="uppercase text-xs bg-anime-secondary text-white">
            {show.type}
          </Badge>
        </div>
        <div className="absolute top-2 right-2 flex items-center bg-black/70 text-white rounded px-1.5 py-0.5">
          <Star className="h-3 w-3 text-yellow-400 mr-1" />
          <span className="text-xs">{show.rating}</span>
        </div>
      </div>

      <CardContent className="pt-4 pb-2 flex-1">
        <h3 className="font-semibold line-clamp-1 mb-1">{show.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
          {show.description}
        </p>
        <div className="flex flex-wrap">
          {show.genres.slice(0, 3).map((genre) => (
            <span key={genre} className="anime-tag">
              {genre}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4 px-4 flex flex-col items-start">
        <div className="w-full">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium">
              {show.watchedEpisodes} / {show.totalEpisodes}
            </span>
            <span className="text-xs text-muted-foreground">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <Progress value={progressPercent} className="h-1.5" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default AnimeCard;


import React from 'react';
import { AnimeShow } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface TrendingSectionProps {
  shows: AnimeShow[];
}

const TrendingSection = ({ shows }: TrendingSectionProps) => {
  // Get top 3 highest rated shows
  const trendingShows = [...shows]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {trendingShows.map((show) => (
          <Card key={show.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={show.imageUrl}
                alt={show.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-4 text-white">
                  <div className="flex items-center mb-2">
                    <Badge className="mr-2 bg-anime-primary">{show.type.toUpperCase()}</Badge>
                    <div className="flex items-center bg-black/50 rounded px-2 py-0.5">
                      <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                      <span className="text-xs font-bold">{show.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{show.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-1">
                    {show.genres.join(' • ')} • {show.releaseYear}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;

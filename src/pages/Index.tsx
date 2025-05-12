
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import ShowsGrid from '@/components/ShowsGrid';
import TrendingSection from '@/components/TrendingSection';
import ClubsSection from '@/components/ClubsSection';
import { mockAnimeShows, mockClubs } from '@/data/mockData';
import { WatchStatus } from '@/types';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<WatchStatus>('all');
  
  // Calculate counts for each category
  const counts = {
    all: mockAnimeShows.length,
    watching: mockAnimeShows.filter(show => show.status === 'watching').length,
    completed: mockAnimeShows.filter(show => show.status === 'completed').length,
    'on hold': mockAnimeShows.filter(show => show.status === 'on hold').length,
    dropped: mockAnimeShows.filter(show => show.status === 'dropped').length,
    'plan to watch': mockAnimeShows.filter(show => show.status === 'plan to watch').length,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
          counts={counts} 
        />
        
        <main className="flex-1 overflow-y-auto">
          <MobileNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          
          <div className="container py-6">
            <TrendingSection shows={mockAnimeShows} />
            <ShowsGrid shows={mockAnimeShows} status={activeCategory} />
            <ClubsSection clubs={mockClubs} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

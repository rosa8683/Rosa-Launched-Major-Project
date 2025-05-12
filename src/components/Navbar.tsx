
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Bell, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-anime-primary">Anime</span>
            <span className="text-xl font-bold">Tracker</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-anime-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-anime-primary transition-colors">Discover</a>
            <a href="#" className="text-sm font-medium hover:text-anime-primary transition-colors">Clubs</a>
            <a href="#" className="text-sm font-medium hover:text-anime-primary transition-colors">Calendar</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative rounded-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 bg-background"
            />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-anime-highlight rounded-full"></span>
          </Button>
          <ThemeToggle />
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 border-t`}>
        <nav className="container flex flex-col space-y-3">
          <a href="#" className="text-sm font-medium hover:text-anime-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors">Home</a>
          <a href="#" className="text-sm font-medium hover:text-anime-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors">Discover</a>
          <a href="#" className="text-sm font-medium hover:text-anime-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors">Clubs</a>
          <a href="#" className="text-sm font-medium hover:text-anime-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors">Calendar</a>
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8 bg-background"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

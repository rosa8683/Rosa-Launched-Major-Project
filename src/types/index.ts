
export interface AnimeShow {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'anime' | 'tv';
  totalEpisodes: number;
  watchedEpisodes: number;
  status: 'watching' | 'completed' | 'on hold' | 'dropped' | 'plan to watch';
  genres: string[];
  rating: number;
  releaseYear: number;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  members: number;
  posts: number;
  tags: string[];
}

export interface Discussion {
  id: string;
  clubId: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  likes: number;
  comments: number;
  tags: string[];
}

export type WatchStatus = 'all' | 'watching' | 'completed' | 'on hold' | 'dropped' | 'plan to watch';

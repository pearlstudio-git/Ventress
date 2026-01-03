export interface Track {
  title: string;
  duration: string;
}

export interface Release {
  id: string;
  title: string;
  year: string;
  type: 'Album' | 'EP' | 'Single';
  coverUrl: string;
  spotifyUrl: string;
  appleUrl?: string;
  bandcampUrl: string;
  tracks: Track[];
  credits: string;
}

export interface Member {
  name: string;
  role: string;
}

export interface Video {
  id: string;
  title: string;
  year: string;
  thumbnailUrl: string;
  description: string;
  type: 'Official Video' | 'Visualizer';
}
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Release, Video } from '../types';

const releases: Release[] = [
  {
    id: 'void-chant',
    title: 'Void Chant',
    year: '2023',
    type: 'Album',
    coverUrl: '/images/cover-void-chant.jpg',
    spotifyUrl: '#',
    bandcampUrl: '#',
    appleUrl: '#',
    credits: 'Produced by: VENTRESS. Mixed by: Studio A. Mastered at: The Void',
    tracks: [
      { title: 'Intro Protocol', duration: '(3:45)' },
      { title: 'Deep Water', duration: '(4:12)' },
      { title: 'The Fog', duration: '(5:00)' },
      { title: 'Static God', duration: '(6:15)' },
    ]
  },
  {
    id: 'swamp-ritual',
    title: 'Swamp Ritual',
    year: '2022',
    type: 'EP',
    coverUrl: '/images/cover-swamp-ritual.jpg',
    spotifyUrl: '#',
    bandcampUrl: '#',
    credits: 'Recorded live in the deep woods. Cover art by: Unknown Entity',
    tracks: [
      { title: 'Mud Walk', duration: '(3:20)' },
      { title: 'Green Light', duration: '(4:45)' },
      { title: 'Submersion', duration: '(2:10)' },
    ]
  },
  {
    id: 'bone-dance',
    title: 'Bone Dance',
    year: '2021',
    type: 'Single',
    coverUrl: '/images/cover-bone-dance.jpg',
    spotifyUrl: '#',
    bandcampUrl: '#',
    credits: 'Lyrics by: The Keeper',
    tracks: [
      { title: 'Bone Dance', duration: '(4:55)' },
      { title: 'Bone Dance (Inst.)', duration: '(4:55)' },
    ]
  },
  {
    id: 'echoes',
    title: 'Echoes',
    year: '2020',
    type: 'Single',
    coverUrl: '/images/cover-echoes.jpg',
    spotifyUrl: '#',
    bandcampUrl: '#',
    credits: 'A conceptual piece exploring the sound of isolation.',
    tracks: [
      { title: 'Echoes', duration: '(12:00)' },
    ]
  },
];

const videos: Video[] = [
  {
    id: 'vid1',
    title: 'Void Chant (Official Video)',
    year: '2023',
    type: 'Official Video',
    thumbnailUrl: '/images/video-void-chant.jpg',
    description: 'Directed by A. Blackwood. Filmed on location in the Black Forest. A visual exploration of decay and rebirth.'
  },
  {
    id: 'vid2',
    title: 'Mud Walk (Visualizer)',
    year: '2022',
    type: 'Visualizer',
    thumbnailUrl: '/images/video-mud-walk.jpg',
    description: 'Visualizer created using analog feedback loops and organic textures.'
  }
];

const ReleaseCard: React.FC<{ release: Release }> = ({ release }) => (
  <article className="flex flex-col group">
    <div className="relative aspect-square w-full overflow-hidden rounded-[2px] mb-8 bg-surface-dark border border-white/5 shadow-2xl group-hover:border-primary/20 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10 pointer-events-none"></div>
      <img 
        alt={release.title} 
        className="w-full h-full object-cover grayscale-[30%] contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        src={release.coverUrl}
      />
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-black/70 backdrop-blur-sm border border-white/10 text-gray-200 text-[10px] font-bold tracking-widest uppercase">{release.type}</span>
      </div>
    </div>
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex justify-between items-baseline border-b border-white/5 pb-3 mb-3">
        <h3 className="text-gray-100 text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">{release.title}</h3>
        <span className="text-mist text-sm font-mono">{release.year}</span>
      </div>
      <div className="flex gap-2 mb-5 flex-wrap">
        <button className="text-[10px] font-bold tracking-wider border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-primary/20 hover:border-primary/40 text-mist hover:text-primary-hover transition-all">
          SPOTIFY
        </button>
        <button className="text-[10px] font-bold tracking-wider border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-primary/20 hover:border-primary/40 text-mist hover:text-primary-hover transition-all">
          BANDCAMP
        </button>
        {release.appleUrl && (
          <button className="text-[10px] font-bold tracking-wider border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-primary/20 hover:border-primary/40 text-mist hover:text-primary-hover transition-all">
            APPLE
          </button>
        )}
      </div>
      <details className="group/accordion mt-2">
        <summary className="cursor-pointer list-none flex items-center gap-2 text-primary hover:text-white transition-colors text-xs font-bold tracking-widest uppercase py-2 select-none">
          <ChevronRight className="w-4 h-4 group-open/accordion:rotate-90 transition-transform duration-300" />
          <span>Tracklist & Credits</span>
        </summary>
        <div className="pl-6 pt-2 pb-4 text-mist text-sm font-mono leading-relaxed border-l border-white/10 ml-2 mt-2 animate-fade-in-up">
          <ol className="list-decimal list-inside mb-4 space-y-1.5 text-gray-400">
            {release.tracks.map((track, i) => (
              <li key={i}>
                <span className="text-gray-600 mr-2">0{i+1}.</span> {track.title} <span className="text-gray-600 text-xs ml-2">{track.duration}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-gray-600 mt-4 pt-4 border-t border-white/5">
            {release.credits}
          </p>
        </div>
      </details>
    </div>
  </article>
);

const Releases: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-16 lg:py-16">
        <div className="mb-24 animate-fade-in-up">
          <h1 className="text-[#e5e5e5] text-6xl md:text-8xl font-black tracking-[-0.04em] leading-none mb-6">RELEASES</h1>
          <div className="h-[2px] w-24 bg-primary mb-8"></div>
          <p className="text-mist text-sm md:text-base font-medium tracking-[0.2em] uppercase max-w-lg leading-relaxed border-l-2 border-primary/30 pl-4">
            An archive of selected works, sonic rituals, and official audio manifestations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {releases.map(release => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>

        <div className="my-32 border-t border-white/5"></div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-gray-200 text-4xl md:text-5xl font-bold tracking-[-0.02em] uppercase">Visual Archives</h2>
            <span className="h-px flex-1 bg-white/10"></span>
          </div>
          
          <div className="flex flex-col gap-8">
            {videos.map(video => (
              <div key={video.id} className="group relative flex flex-col md:flex-row items-start md:items-center gap-8 p-6 rounded-sm hover:bg-[#111] transition-colors border border-transparent hover:border-white/5">
                <div className="relative w-full md:w-72 aspect-video overflow-hidden bg-black shrink-0 border border-white/5 shadow-lg group-hover:border-primary/30 transition-colors">
                  <img alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" src={video.thumbnailUrl} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors">
                    <Play className="text-primary w-12 h-12 fill-current opacity-80 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gray-100 text-xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors duration-300">{video.title}</h3>
                    <span className="text-mist text-xs font-mono border border-white/10 px-2 py-0.5 rounded-sm">{video.year}</span>
                  </div>
                  <p className="text-mist text-sm max-w-xl line-clamp-2 leading-relaxed">{video.description}</p>
                </div>
                <button className="w-full md:w-auto mt-4 md:mt-0 flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-primary/20 text-mist hover:text-primary-hover border border-white/10 hover:border-primary/40 px-8 py-3 transition-all text-[10px] font-bold tracking-widest uppercase">
                  Watch
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
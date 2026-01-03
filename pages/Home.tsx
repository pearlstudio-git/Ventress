import React from 'react';
import { Play, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const logoUrl = "/images/logo.png";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pb-32 md:pb-48">
        <img 
          src="/images/home-hero.jpg" 
          alt="photo" 
          width="6000" 
          height="3368" 
          loading="lazy" 
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/20 to-black/30"></div>
        
        <div className="relative z-20 flex flex-col items-center gap-8 px-4 text-center max-w-4xl mx-auto mt-20">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-fade-in-up">
              <div className="relative animate-float-pulse mb-4 w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
                {/* Projected Shadow on Background */}
                <img 
                  src={logoUrl} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute top-8 left-0 w-full h-full z-0 blur-xl opacity-60 brightness-0 pointer-events-none transform translate-y-4 scale-[0.95]"
                />

                {/* Main Logo with Drop Shadow and Contrast */}
                <img 
                  src={logoUrl} 
                  alt="VENTRESS" 
                  width="1080" 
                  height="1080" 
                  loading="lazy" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl brightness-110 contrast-125"
                />
                
                {/* Texture & Shading Overlay (Masked to Logo) */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    maskImage: `url(${logoUrl})`,
                    WebkitMaskImage: `url(${logoUrl})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center'
                  }}
                >
                  {/* Gradient for subtle 3D shading */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/60 mix-blend-overlay"></div>
                  {/* Noise texture */}
                  <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay"></div>
                </div>

                {/* Glitch Layers */}
                <img 
                  src={logoUrl} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-full h-full z-20 glitch-1 pointer-events-none mix-blend-hard-light opacity-50"
                />
                <img 
                  src={logoUrl} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-full h-full z-20 glitch-2 pointer-events-none mix-blend-color-dodge opacity-50"
                />
              </div>
            </div>
            <div className="h-px w-24 bg-primary mb-2"></div>
            <h2 className="text-primary text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
              we dissolve, we are decay
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
            <Link to="/contact" className="group px-8 py-4 bg-transparent border border-white/20 hover:border-primary hover:bg-white/5 rounded-full min-w-[160px] transition-all duration-300">
              <span className="text-white group-hover:text-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Book Us
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Latest Release */}
      <section className="relative py-24 md:py-32 px-6 bg-black border-t border-border-subtle overflow-hidden">
        {/* Background Texture Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-noise opacity-15 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-primary"></div>
            <h3 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">FIRST RELEASE COMING SOON</h3>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          
          <div className="relative mb-12 w-full max-w-[500px] aspect-square group">
             <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
             <img 
               src="/images/reminiscence-cover.png" 
               alt="Reminiscence EP Cover" 
               width="1272" 
               height="1280" 
               loading="lazy" 
               className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
             />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-8">
            REMINISCENCE
          </h2>
          
          <p className="text-mist text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Reminiscence is a descent into guilt, alienation and self-inflicted exile. Across its lyrics, the EP portrays a mind trapped between modern lies, inherited shame and the need to escape a corrupt human order. Forests become both refuge and execution ground, temples turn into places of decay and prayer, and solitude is embraced as the only path to clarity. It is a record about confronting one’s own illusions, accepting inner rot, and walking willingly toward pain as a form of truth—where remembrance is not nostalgia, but a scar that refuses to fade.
          </p>
        </div>
      </section>

      {/* Statement / About Preview */}
      <section className="py-24 px-6 bg-background-dark relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-4 justify-center md:justify-start">
            <span className="w-8 h-px bg-primary"></span>
            The Sound
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-display text-white/90 leading-tight font-light tracking-wide mb-12">
            WE FORGE SOUNDSCAPES FROM THE <span className="text-primary font-medium">PRIMORDIAL MUD</span>. HEAVY, PRECISE, AND UNYIELDING. A RITUAL OF NOISE AND SILENCE.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12 border-t border-white/10 pt-8">
            <span className="text-mist text-xs font-bold uppercase tracking-widest whitespace-nowrap">For Fans Of</span>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <span className="text-white text-lg font-medium tracking-wide">GOJIRA</span>
              <span className="text-white/20 text-lg font-light">/</span>
              <span className="text-white text-lg font-medium tracking-wide">MESHUGGAH</span>
              <span className="text-white/20 text-lg font-light">/</span>
              <span className="text-white text-lg font-medium tracking-wide">THE CONTORTIONIST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-12 bg-background-dark">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2 auto-rows-[300px] md:auto-rows-[400px]">
            <div className="relative group overflow-hidden md:col-span-2">
              <img 
                alt="Still" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/gallery-1.png"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="relative group overflow-hidden">
              <img 
                alt="Still 3" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/gallery-2.png"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="relative group overflow-hidden">
              <img 
                alt="Still 4" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/gallery-3.png"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="relative group overflow-hidden md:col-span-2">
              <img 
                alt="Still 5" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/gallery-4.png"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
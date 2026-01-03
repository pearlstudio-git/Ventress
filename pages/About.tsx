import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import { Member } from '../types';

const members: Member[] = [
  { name: 'M. VOREN', role: 'Vocals / Lyrics' },
  { name: 'S. KARN', role: 'Guitars / Production' },
  { name: 'J. RIVERA', role: 'Bass / Synth' },
  { name: 'A. THORN', role: 'Percussion' },
];

const About: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20 lg:px-40 py-20 relative bg-background-dark">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none z-0">
          <div 
            className="w-full h-full bg-cover bg-center mix-blend-overlay grayscale" 
            style={{ backgroundImage: 'url("/images/about-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-primary/10 text-[12vw] md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase select-none blur-[1px] animate-fade-in-up">
            About
          </h1>
          <div className="ml-2 md:ml-4 -mt-4 md:-mt-10 border-l-2 border-primary/60 pl-6 md:pl-10 py-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-200 text-xl md:text-3xl font-light leading-snug tracking-wide max-w-3xl opacity-90">
              <span className="text-primary font-bold">VENTRESS</span> is an atmospheric progressive death metal project built on organic rituals and cinematic tension.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="px-6 md:px-20 lg:px-40 py-20 bg-surface-dark border-t border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-2 mb-4">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase opacity-80">01 // The Origin</span>
              <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight uppercase">From the <br/><span className="text-mist opacity-60">Decay</span></h2>
            </div>
            <p className="text-mist text-lg leading-relaxed font-light">
              <span className="text-primary text-xl font-bold">B</span>orn from the decay of the modern world, VENTRESS explores the intersection of organic chaos and calculated precision. We do not just play music; we orchestrate a ritual of tension and release. The project began as a studio experiment in isolation, dissecting the sounds of nature and blending them with the mechanical coldness of extended-range guitars.
            </p>
            <p className="text-mist text-lg leading-relaxed font-light">
              Our sound is a reflection of the environment we inhabit—beautifully hostile, serene yet violent. We strip away the unnecessary, leaving only the weight of the atmosphere and the crush of the rhythm. Every note is deliberate, every silence is heavy.
            </p>
            
            <div className="pt-8">
              <span className="block text-mist text-xs font-bold tracking-[0.2em] uppercase mb-6 opacity-60">Sonic Themes</span>
              <div className="flex flex-wrap gap-3">
                {['Dissonance', 'Nature', 'Ritual', 'Entropy', 'Tension', 'Void'].map(tag => (
                  <span key={tag} className="px-5 py-2 rounded-sm border border-border-subtle text-mist text-sm font-medium hover:border-primary hover:text-primary-hover hover:bg-primary/5 transition-all cursor-default tracking-wide uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 relative group">
            <div className="w-full aspect-[2/3] lg:aspect-[9/16] rounded-sm overflow-hidden relative grayscale sepia-[.2] hover:grayscale-0 hover:sepia-0 transition-all duration-1000 ease-in-out border border-border-subtle">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent z-10"></div>
              <img 
                alt="Atmospheric forest setting" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" 
                src="/images/about-content.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-[#0a0c0b] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block opacity-80">02 // The Ritual</span>
            <h3 className="text-white text-3xl font-bold uppercase mb-6 tracking-tight">Precision in <br/>Chaos</h3>
            <p className="text-mist leading-relaxed mb-8 font-light">
              The live experience is designed to be immersive and suffocating. A wall of sound executed with surgical precision, synchronized with visual elements to create a total sensory deprivation chamber. We bring the studio fidelity to the stage without compromise.
            </p>
            <a className="inline-flex items-center gap-2 text-white border-b border-primary/50 pb-1 hover:text-primary hover:border-primary transition-colors text-sm font-bold uppercase tracking-wider" href="/contact">
              View Tour Dates <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-[#111312] border border-border-subtle rounded-sm p-8 relative overflow-hidden shadow-2xl shadow-black/50">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Settings className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-white font-mono text-sm mb-6 border-b border-border-subtle pb-4 flex justify-between tracking-wide">
                <span className="opacity-70">// TECH_SPEC_MANIFEST</span>
                <span className="text-primary">V.2.0</span>
              </h4>
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                {[
                  { label: 'SYNC', val: 'Ableton Live Environment' },
                  { label: 'MONITORING', val: 'Full IEM Network' },
                  { label: 'GUITARS', val: '8-String Extended Range' },
                  { label: 'VISUALS', val: 'DMX Automations' },
                  { label: 'ATMOSPHERE', val: 'Heavy Fog / Strobe' },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-mist group-hover:text-white transition-colors">{spec.label}</span>
                    <span className="text-white font-bold">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personnel */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark border-t border-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase opacity-80">03 // The Entity</span>
            <span className="text-mist text-xs tracking-widest uppercase opacity-50">Personnel</span>
          </div>
          <div className="flex flex-col">
            {members.map((member) => (
              <div key={member.name} className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border-subtle hover:border-primary/40 transition-colors cursor-default">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-8"></div>
                  <h4 className="text-2xl text-mist group-hover:text-white font-light tracking-wide transition-colors">{member.name}</h4>
                </div>
                <span className="text-sm font-mono text-mist/60 group-hover:text-primary mt-2 md:mt-0 transition-colors tracking-widest uppercase">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
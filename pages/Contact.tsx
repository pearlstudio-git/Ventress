import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Download, Eye, X, Check, AlertTriangle } from 'lucide-react';

const RiderModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-[#0B0C0B] w-full max-w-5xl h-full max-h-full flex flex-col border border-white/10 shadow-2xl rounded-sm animate-fade-in-up">
        
        {/* Header */}
        <div className="flex-shrink-0 flex justify-between items-center p-6 border-b border-white/10 bg-[#0B0C0B] z-10">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white tracking-widest uppercase flex items-center gap-3">
              Technical Rider <span className="text-xs bg-primary text-black px-2 py-0.5 rounded-sm font-bold">2024</span>
            </h2>
            <p className="text-mist text-xs font-mono mt-1 tracking-wide">VENTRESS // RIDER TECHNIQUE</p>
          </div>
          <button onClick={onClose} className="text-mist hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          <div className="p-6 md:p-10 space-y-12">
            
            {/* 1. General Info */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">01. General Info</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                    <span className="block text-xs text-mist uppercase tracking-wider mb-1">Genre</span>
                    <span className="text-white font-medium">Death Metal atmosphérique / progressif</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <span className="block text-xs text-mist uppercase tracking-wider mb-1">Set Duration</span>
                      <span className="text-white font-medium">45 - 60 min</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                      <span className="block text-xs text-mist uppercase tracking-wider mb-1">Setup / Check</span>
                      <span className="text-white font-medium">20m / 30m</span>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                    <span className="block text-xs text-mist uppercase tracking-wider mb-2">Members (5)</span>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <li>• Eddy (Chant)</li>
                      <li>• Nelson (Guitare)</li>
                      <li>• Alexis (Guitare)</li>
                      <li>• Baptiste (Basse)</li>
                      <li>• Maelan (Batterie)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">02. Artistic Direction</h3>
                <div className="bg-[#151716] border border-primary/20 p-6 rounded-sm space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-white block mb-1">Atmosphere</strong>
                      Dark, organic, and visual. The band accepts performances outdoors (night only) or indoors (club, hangar).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-white block mb-1">Visuals</strong>
                      Musicians are covered in mud/makeup. No direct frontal white light. Silhouettes and shadows preferred.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Patch List */}
            <section>
              <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">03. Input List</h3>
              <div className="overflow-x-auto border border-white/10 rounded-sm">
                <table className="w-full text-left text-sm font-mono">
                  <thead className="bg-white/5 text-mist text-xs uppercase">
                    <tr>
                      <th className="px-4 py-3 font-bold border-b border-white/10">CH</th>
                      <th className="px-4 py-3 font-bold border-b border-white/10">Source</th>
                      <th className="px-4 py-3 font-bold border-b border-white/10">Mic / DI</th>
                      <th className="px-4 py-3 font-bold border-b border-white/10">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 bg-black/20">
                    {[
                      { id: 1, src: 'Kick', mic: 'Beta 52 / D6', note: 'Intérieur grosse caisse' },
                      { id: 2, src: 'Snare top', mic: 'SM57', note: '-' },
                      { id: 3, src: 'Snare bottom', mic: 'SM57 / e604', note: '-' },
                      { id: 4, src: 'Tom 1', mic: 'e604', note: '-' },
                      { id: 5, src: 'Tom 2', mic: 'e604', note: '-' },
                      { id: 6, src: 'Floor tom', mic: 'e604', note: '-' },
                      { id: 7, src: 'OH L', mic: 'Condenser (C414/SM81)', note: '-' },
                      { id: 8, src: 'OH R', mic: 'Condenser (C414/SM81)', note: '-' },
                      { id: 9, src: 'Bass DI', mic: 'Active DI / Radial', note: 'Sortie préamp' },
                      { id: 10, src: 'Guitare 1 L', mic: 'SM57', note: 'Cab gauche' },
                      { id: 11, src: 'Guitare 2 R', mic: 'SM57', note: 'Cab droit' },
                      { id: 12, src: 'Lead Vocal', mic: 'Beta 58A / SM58', note: 'Centre' },
                      { id: 13, src: 'Back Vocal (Opt)', mic: 'SM58', note: 'GTR L' },
                      { id: 14, src: 'Back Vocal (Opt)', mic: 'SM58', note: 'GTR R' },
                    ].map((row) => (
                      <tr key={row.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-2 text-primary font-bold">{row.id.toString().padStart(2, '0')}</td>
                        <td className="px-4 py-2 text-white">{row.src}</td>
                        <td className="px-4 py-2 text-mist">{row.mic}</td>
                        <td className="px-4 py-2 text-gray-500 italic">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Backline & Lights */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">04. Backline Requirements</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-white font-bold uppercase tracking-widest bg-white/10 px-2 py-1 mb-3 inline-block">Venue Provides</span>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                      <li>1 Complete Drum Kit (22", 10", 12", 16") + Hardware</li>
                      <li>2x 4x12 Guitar Cabinets</li>
                      <li>1x 8x10 or 4x10 + 1x15 Bass Cab</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-bold uppercase tracking-widest border border-primary/20 px-2 py-1 mb-3 inline-block">Band Brings</span>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                      <li>Guitar Heads + Pedalboards</li>
                      <li>Bass Head</li>
                      <li>Cymbals + Pedals</li>
                      <li>Snare (depending on config)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">05. Lighting & FX</h3>
                <div className="space-y-6">
                   <div className="p-4 bg-gradient-to-br from-green-900/20 to-purple-900/20 border border-white/5 rounded-sm">
                      <h4 className="text-white font-bold uppercase text-xs mb-2">Palette</h4>
                      <div className="flex gap-2 mb-4">
                        <div className="h-8 w-16 bg-green-900 rounded border border-white/10"></div>
                        <div className="h-8 w-16 bg-purple-900 rounded border border-white/10"></div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Dark Green & Deep Violet. <br/>
                        <span className="text-red-400">No warm colors</span> (yellow, red, orange). <br/>
                        <span className="text-red-400">No frontal white light</span>.
                      </p>
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase text-xs mb-2">Effects</h4>
                      <p className="text-sm text-gray-400">Moderate but constant haze/fog. Backlights and sidefills prioritized.</p>
                   </div>
                </div>
              </div>
            </section>
            
            {/* 6. Hospitality */}
             <section className="bg-[#151716] p-6 border border-white/5 rounded-sm">
                <div className="flex flex-wrap gap-8 items-center justify-between">
                   <div>
                      <span className="block text-xs text-mist uppercase tracking-wider mb-1">Stage Size</span>
                      <span className="text-white font-bold">6m x 4m Min</span>
                   </div>
                    <div>
                      <span className="block text-xs text-mist uppercase tracking-wider mb-1">Parking</span>
                      <span className="text-white font-bold">1 Van (6-7m)</span>
                   </div>
                   <div>
                      <span className="block text-xs text-mist uppercase tracking-wider mb-1">Hospitality</span>
                      <span className="text-white font-bold">5 Towels, Water</span>
                   </div>
                    <div>
                      <span className="block text-xs text-mist uppercase tracking-wider mb-1">Power</span>
                      <span className="text-white font-bold">5x 220V Outlets</span>
                   </div>
                </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-6 border-t border-white/10 bg-[#0B0C0B] flex justify-end gap-4 z-10">
          <button onClick={onClose} className="px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-black font-bold text-xs tracking-widest uppercase transition-all">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [isRiderOpen, setIsRiderOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen pt-24 pb-12">
      <RiderModal isOpen={isRiderOpen} onClose={() => setIsRiderOpen(false)} />
      
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none" data-alt="Dark abstract organic texture">
        <img 
          alt="Abstract dark forest texture" 
          className="w-full h-full object-cover grayscale brightness-[0.4] contrast-125 mix-blend-overlay" 
          src="/images/contact-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
      </div>

      <div className="relative z-10 flex-grow px-6 lg:px-40 lg:py-12 max-w-[1400px] mx-auto w-full">
        <section className="mb-20 lg:mb-32 animate-fade-in-up">
          <div className="flex flex-col gap-6 border-l-2 border-primary/30 pl-8 lg:pl-16">
            <h1 className="text-stone-100 text-6xl lg:text-9xl font-black leading-none tracking-[-0.04em] uppercase opacity-90">
              BOOK US
            </h1>
            <p className="text-mist text-lg lg:text-2xl font-light tracking-wide max-w-2xl leading-relaxed">
              For bookings, festivals, support slots and press inquiries.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col gap-3 group transition-all duration-300">
                  <span className="text-mist text-xs font-bold uppercase tracking-widest group-focus-within:text-primary transition-colors">Name</span>
                  <input className="bg-transparent border-b border-border-subtle text-gray-200 placeholder:text-gray-700 py-4 px-0 focus:outline-none focus:border-primary focus:ring-0 text-lg rounded-none transition-colors duration-300" placeholder="Your Name" type="text"/>
                </label>
                <label className="flex flex-col gap-3 group transition-all duration-300">
                  <span className="text-mist text-xs font-bold uppercase tracking-widest group-focus-within:text-primary transition-colors">Email</span>
                  <input className="bg-transparent border-b border-border-subtle text-gray-200 placeholder:text-gray-700 py-4 px-0 focus:outline-none focus:border-primary focus:ring-0 text-lg rounded-none transition-colors duration-300" placeholder="Your Email" type="email"/>
                </label>
              </div>
              <label className="flex flex-col gap-3 group transition-all duration-300">
                <span className="text-mist text-xs font-bold uppercase tracking-widest group-focus-within:text-primary transition-colors">Organization</span>
                <input className="bg-transparent border-b border-border-subtle text-gray-200 placeholder:text-gray-700 py-4 px-0 focus:outline-none focus:border-primary focus:ring-0 text-lg rounded-none transition-colors duration-300" placeholder="Organization Name" type="text"/>
              </label>
              <label className="flex flex-col gap-3 group transition-all duration-300">
                <span className="text-mist text-xs font-bold uppercase tracking-widest group-focus-within:text-primary transition-colors">Message</span>
                <textarea className="bg-transparent border-b border-border-subtle text-gray-200 placeholder:text-gray-700 py-4 px-0 min-h-32 resize-none focus:outline-none focus:border-primary focus:ring-0 text-lg rounded-none transition-colors duration-300" placeholder="Tell us about the event or inquiry..."></textarea>
              </label>
              
              <div className="pt-8">
                <button className="group relative flex items-center justify-between w-full md:w-auto bg-primary text-background-dark font-bold text-sm tracking-widest uppercase rounded-full pl-8 pr-2 py-2 hover:bg-white transition-all duration-300 overflow-hidden" type="button">
                  <span className="mr-6 z-10">Transmit Signal</span>
                  <div className="bg-black/10 rounded-full p-2 group-hover:bg-black/20 transition-colors z-10">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-16">
            <div className="flex flex-col gap-10">
              <div className="space-y-8">
                <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase border-b border-border-subtle pb-2 mb-6">Direct Channels</h3>
                <div className="group cursor-pointer">
                  <p className="text-primary text-xs font-bold tracking-widest mb-1 group-hover:text-gray-200 transition-colors">BOOKING</p>
                  <p className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors">booking@ventress.band</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-primary text-xs font-bold tracking-widest mb-1 group-hover:text-gray-200 transition-colors">MANAGEMENT</p>
                  <p className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors">mgmt@ventress.band</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-primary text-xs font-bold tracking-widest mb-1 group-hover:text-gray-200 transition-colors">TECHNICAL</p>
                  <p className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors">tech@ventress.band</p>
                </div>
              </div>
            </div>

            <div className="relative bg-surface-dark border border-border-subtle p-8 rounded-lg overflow-hidden group hover:border-primary/40 transition-colors duration-500">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">Technical Rider</h3>
                  <p className="text-mist text-sm font-light leading-relaxed">Comprehensive stage plot, input list, and requirements.</p>
                </div>
                <div className="flex items-center gap-4 bg-background-dark/50 p-3 rounded border border-border-subtle">
                  <FileText className="text-primary w-8 h-8 flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-gray-300 text-sm font-medium truncate">RIDER_TECHNIQUE_2024.pdf</span>
                    <span className="text-gray-600 text-xs">Updated 2024 • 7 Pages</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => setIsRiderOpen(true)}
                    className="flex items-center justify-center w-full bg-primary hover:bg-white text-background-dark font-bold text-xs tracking-widest uppercase py-3 rounded-full transition-all duration-300"
                  >
                    <Eye className="mr-2 w-4 h-4" />
                    View Digital Rider
                  </button>
                  <button className="flex items-center justify-center w-full border border-white/20 hover:border-primary text-mist hover:text-primary font-bold text-xs tracking-widest uppercase py-3 rounded-full transition-all duration-300">
                    <Download className="mr-2 w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
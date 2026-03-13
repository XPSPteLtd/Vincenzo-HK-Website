
import React, { useState } from 'react';
import { Clock, Calendar, Gift, History, Newspaper, Users, ChevronRight, X, Info, Star, Award, MapPin, Mail, Download, Utensils, GlassWater } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language } from '../translations';

type InfoTab = 'operations' | 'events' | 'seasonal' | 'heritage';

interface InfoHubProps {
  lang: Language;
}

export const InfoHub: React.FC<InfoHubProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<InfoTab>('operations');
  const [showEventDeepDive, setShowEventDeepDive] = useState(false);

  const tabs = [
    { id: 'operations', label: 'Service', icon: Clock },
    { id: 'events', label: 'Hosting', icon: Users },
    { id: 'seasonal', label: 'Seasonal', icon: Gift },
    { id: 'heritage', label: 'Heritage', icon: History },
  ];

  return (
    <section id="info-hub" className="py-20 md:py-24 bg-charcoal border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-20 top-40 text-[10rem] md:text-[15rem] font-serif text-white/[0.01] leading-none pointer-events-none select-none">INFO</div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6 md:gap-8">
          <div>
            <span className="text-gold tracking-[0.2em] md:tracking-mega text-[10px] md:text-xs uppercase font-bold block mb-3 md:mb-4">Vincenzo Capuano Hub</span>
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase leading-tight">News &<br/>Experience</h2>
          </div>

          {/* Horizontal Scroll Tab Navigation */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex flex-nowrap gap-2 bg-white/5 p-1 rounded-xl backdrop-blur-md border border-white/10 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as InfoTab)}
                  className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab.id 
                      ? 'bg-gold text-charcoal shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={14} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[450px] md:min-h-[500px] animate-fade-in">
          {activeTab === 'operations' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-span-2 bg-surface border border-white/10 p-6 md:p-10 lg:p-12 rounded-3xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-8 md:mb-10">Service Hours</h3>
                  <div className="space-y-8 md:space-y-10">
                    {/* Lunch Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 md:pb-8 border-b border-white/5">
                      <div className="flex items-center gap-4 md:gap-5 min-w-[200px]">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                          <Clock className="text-gold w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Lunch</p>
                          <p className="text-2xl md:text-3xl text-white font-mono tracking-tighter">12:00 — 15:00</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-red/10 border border-red/30 rounded-xl">
                          <Utensils className="text-red w-3 h-3 md:w-3.5 md:h-3.5" />
                          <div>
                            <p className="text-[8px] md:text-[9px] text-gray-400 uppercase font-bold tracking-widest leading-none mb-1">Last Order</p>
                            <p className="text-xs md:text-sm text-red font-mono font-bold leading-none">14:30</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dinner Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 md:pb-8 border-b border-white/5">
                      <div className="flex items-center gap-4 md:gap-5 min-w-[200px]">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                          <Clock className="text-gold w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Dinner</p>
                          <p className="text-2xl md:text-3xl text-white font-mono tracking-tighter">18:00 — 23:00</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-red/10 border border-red/30 rounded-xl">
                          <Utensils className="text-red w-3 h-3 md:w-3.5 md:h-3.5" />
                          <div>
                            <p className="text-[8px] md:text-[9px] text-gray-400 uppercase font-bold tracking-widest leading-none mb-1">Last Order</p>
                            <p className="text-xs md:text-sm text-red font-mono font-bold leading-none">22:00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gold p-6 md:p-8 rounded-3xl flex flex-col justify-between group overflow-hidden relative md:col-span-2 lg:col-span-1">
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Award className="text-charcoal w-32 h-32 md:w-40 md:h-40" />
                </div>
                <div className="relative z-10">
                  <Award className="text-charcoal mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
                  <h3 className="text-xl md:text-2xl font-display text-charcoal uppercase leading-none mb-3 md:mb-4">Walk-in Policy</h3>
                  <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed font-medium max-w-sm md:max-w-none">We reserve 30% of our seating for walk-ins. To experience our Contemporary dough without a booking, we recommend arriving within the first 45 minutes of each session.</p>
                </div>
                <div className="pt-6 md:pt-8 border-t border-charcoal/10 mt-6 md:mt-8 relative z-10">
                  <p className="text-[9px] uppercase font-bold tracking-widest text-charcoal mb-1">Live Availability</p>
                  <p className="text-base md:text-lg font-mono text-charcoal">+852 1234 5678</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="relative rounded-3xl overflow-hidden h-[250px] md:h-[350px] group shadow-2xl">
                  <SafeImage 
                    src="https://vincenzocapuano.sg/wp-content/uploads/2025/04/2024-06-05.jpg" 
                    alt="Vincenzo Capuano Dining Space" 
                    fallbackPrompt="Luxury restaurant event space for private parties, elegant long table setting"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-1000 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
                    <h3 className="text-2xl md:text-4xl font-serif italic text-white mb-1 md:mb-2">Private Hosting</h3>
                    <p className="text-gold text-[9px] md:text-xs uppercase tracking-mega font-bold">Capacity: Up to 60 Guests</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                   <div className="bg-surface border border-white/5 p-4 md:p-6 rounded-2xl flex flex-col justify-center hover:border-gold/20 transition-all">
                      <Star size={18} className="text-gold mb-2 md:mb-3" />
                      <h4 className="text-white text-[10px] md:text-xs font-bold uppercase mb-1">Tailored Menus</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase">Pairings & Flights</p>
                   </div>
                   <div className="bg-surface border border-white/5 p-4 md:p-6 rounded-2xl flex flex-col justify-center hover:border-gold/20 transition-all">
                      <Award size={18} className="text-gold mb-2 md:mb-3" />
                      <h4 className="text-white text-[10px] md:text-xs font-bold uppercase mb-1">Full Buyout</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase">Corporate Exclusivity</p>
                   </div>
                </div>
              </div>

              <div className="bg-surface border border-white/10 p-6 md:p-10 lg:p-12 rounded-3xl flex flex-col h-full shadow-2xl">
                <div className="mb-8 md:mb-10">
                  <h3 className="text-2xl md:text-3xl font-display text-white uppercase mb-3 md:mb-4 leading-none tracking-tight">Host Your<br/><span className="text-gold">Masterpiece</span></h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md">
                    From corporate galas to intimate celebrations, Vincenzo Capuano provides a high-energy, sophisticated atmosphere for Neapolitan excellence in Hong Kong.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6 flex-1">
                  <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-gold/30 transition-all">
                    <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Direct Inquiries</p>
                        <a href="mailto:events@vincenzocapuano.hk" className="text-sm md:text-lg text-white font-mono hover:text-gold transition-colors block truncate">events@vincenzocapuano.hk</a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-gold/30 transition-all">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
                        <Download className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Event Planning</p>
                        <p className="text-sm md:text-lg text-white font-serif italic">Event Brochure PDF</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <button 
                    onClick={() => setShowEventDeepDive(true)}
                    className="w-full py-4 md:py-5 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-mega hover:bg-white transition-all shadow-xl shadow-gold/5 active:scale-[0.98]"
                  >
                    View Packages
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seasonal' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-surface border border-red/20 p-6 md:p-8 rounded-3xl flex flex-col group hover:border-red transition-colors">
                <div className="flex justify-between items-start mb-5 md:mb-6">
                   <div className="bg-red/10 text-red px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Dec 1st</div>
                   <Gift className="text-red animate-bounce w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">Natale a Napoli</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 md:mb-6 italic">The Christmas Menu</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">A 5-course feast featuring fried cod, stuffed escarole pizza, and traditional Neapolitan Struffoli.</p>
                <button className="mt-auto flex items-center gap-2 text-[10px] text-gold font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Preview <ChevronRight size={14} />
                </button>
              </div>

              <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col group hover:border-gold transition-colors">
                <div className="flex justify-between items-start mb-5 md:mb-6">
                   <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Oct 24</div>
                   <Award className="text-gold w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">Masterclass</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 md:mb-6 italic">12 Seats Remaining</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">Learn the secrets of the Nuvola Super dough directly from the World Champion himself.</p>
                <div className="mt-auto flex items-center justify-between">
                   <span className="text-red text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Sold Out</span>
                   <button className="text-[9px] text-gray-500 underline uppercase tracking-widest hover:text-white transition-colors">Waitlist</button>
                </div>
              </div>

              <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col group hover:border-white transition-colors">
                <div className="flex justify-between items-start mb-5 md:mb-6">
                   <div className="bg-white/10 text-white px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Latest News</div>
                   <Newspaper className="text-white/50 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">Asia-Pacific Shortlist</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">Vincenzo Capuano HK has been shortlisted for the 2025 Top 50 Pizza Awards in the region.</p>
                <div className="mt-auto border-t border-white/10 pt-4 md:pt-6">
                  <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase tracking-widest">
                    <MapPin size={10} />
                    <span>Hong Kong Central</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'heritage' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-10">
                <div className="text-center md:text-left">
                   <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white italic mb-4 md:mb-6">The Legacy of 081</h3>
                   <p className="text-gray-400 leading-relaxed text-xs md:text-base lg:text-lg">
                     Vincenzo Capuano represents the third generation of pizzaioli. The number "081" is the telephone area code for Naples, a symbol he carries as a badge of honor.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6 md:gap-10 border-l border-gold/30 pl-6 md:pl-10">
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">1922</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">Family Tradition</p>
                   </div>
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">2019</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">World Champion</p>
                   </div>
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">2022</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">Icon Status</p>
                   </div>
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">2025</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">Hong Kong</p>
                   </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl aspect-square max-w-sm mx-auto w-full md:max-w-none shadow-2xl">
                <SafeImage 
                  src="https://vincenzocapuano.sg/wp-content/uploads/2025/04/Untitled-design-245.png" 
                  alt="Vincenzo Heritage" 
                  fallbackPrompt="Professional portrait of an Italian chef in a modern kitchen, cinematic lighting, black and white"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-all"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Deep Dive Sub-page Overlay - Refined for Tablet */}
      {showEventDeepDive && (
        <div className="fixed inset-0 z-[180] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-charcoal/98 backdrop-blur-2xl" onClick={() => setShowEventDeepDive(false)}></div>
          <div className="relative bg-surface w-full max-w-5xl h-full md:h-auto md:max-h-[85vh] shadow-2xl flex flex-col md:flex-row overflow-hidden md:rounded-3xl border border-white/10">
            
            {/* Mobile/Tablet Header Bar */}
            <div className="md:hidden flex justify-between items-center px-6 py-4 bg-charcoal border-b border-white/10 shrink-0">
               <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Event Packages</span>
               <button onClick={() => setShowEventDeepDive(false)} className="p-1"><X size={24} className="text-white" /></button>
            </div>

            <div className="flex-1 flex flex-col p-8 md:p-12 lg:p-16 overflow-y-auto relative">
              <button 
                onClick={() => setShowEventDeepDive(false)} 
                className="hidden md:block absolute top-8 right-8 p-3 bg-white/5 hover:bg-gold hover:text-charcoal rounded-full transition-all"
              >
                <X size={20} />
              </button>

              <div className="max-w-2xl mx-auto md:mx-0">
                <h2 className="text-3xl md:text-5xl font-display text-white uppercase mb-8 md:mb-12">Hosting Details</h2>

                <div className="space-y-10 md:space-y-16">
                  <div>
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                       <h3 className="text-lg md:text-xl font-serif text-white italic">Package "Gold Scissors"</h3>
                       <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm lg:text-base mb-6 md:mb-8 leading-relaxed">
                      Our signature sharing experience. Includes 3 types of montanare starters, unlimited selection of contemporary pizzas, and our Amaretto Tiramisu.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {['3-Course Menu', 'Wine/Beer Pairings', 'Custom Printed Menus', 'Event Host', 'Private Chef', 'AV Support'].map(feat => (
                        <li key={feat} className="flex items-center gap-2 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                          <ChevronRight size={10} className="text-gold" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gold/5 border border-gold/20 p-6 md:p-10 rounded-2xl text-center md:text-left">
                    <h4 className="text-white font-serif text-lg md:text-xl mb-4 italic">Tailored for your excellence</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                       <a href="mailto:events@vincenzocapuano.hk" className="flex-1 bg-gold text-charcoal px-6 py-4 font-bold text-[10px] uppercase tracking-mega text-center hover:bg-white transition-all">Request Proposal</a>
                       <button className="flex-1 border border-white/20 text-white px-6 py-4 font-bold text-[10px] uppercase tracking-mega hover:bg-white/5 transition-all">Download Brochure</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

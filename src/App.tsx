import { motion } from "motion/react";
import { Play, Box, Camera, Layers, Mail } from "lucide-react";

const PHOTOS = [
  { id: 0, url: "/src/assets/images/regenerated_image_1778498569489.jpg" },
  { id: 1, url: "/src/assets/images/regenerated_image_1778498571331.jpg" },
  { id: 2, url: "/src/assets/images/regenerated_image_1778498573046.jpg" },
  { id: 3, url: "/src/assets/images/regenerated_image_1778498575261.jpg" },
  { id: 4, url: "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=800" },
  { id: 5, url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800" },
  { id: 6, url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
  { id: 7, url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
  { id: 8, url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=800" },
  { id: 9, url: "https://images.unsplash.com/photo-1512790182412-b19e6d12bf45?auto=format&fit=crop&q=80&w=800" }
];

export default function App() {
  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="font-sans leading-tight">
      
      {/* HERO SECTION - STUDIO AESTHETIC */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12 border-b border-white/[0.05]">
        {/* Left Column - Large Statement */}
        <div className="md:col-span-8 flex flex-col justify-center px-6 md:px-16 py-20 border-r border-white/[0.05] relative overflow-hidden">
          <div className="scanline absolute inset-0 pointer-events-none opacity-20" />
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="z-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">Portfolio Volume 01 — 2026</span>
            </div>

            <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-6">
              STUDIO <br />
              <span className="italic">WORKS.</span>
            </h1>

            <div className="flex flex-wrap gap-x-12 gap-y-6 mt-12">
              <div className="space-y-2">
                <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">Disciplines</p>
                <p className="text-xs uppercase tracking-widest font-bold">3D / Video / Motion</p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">Artist</p>
                <p className="text-xs uppercase tracking-widest font-bold">Autodidacte Passionné</p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">Location</p>
                <p className="text-xs uppercase tracking-widest font-bold">Lycée Jacques Prévert</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Featured Preview / Nav */}
        <div className="md:col-span-4 flex flex-col items-center justify-between py-16 px-8 bg-white/[0.01]">
          <div className="w-full text-right font-mono text-[10px] uppercase tracking-widest text-white/20">
            [ Index Of Works ]
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="w-full aspect-[3/4] border border-white/10 p-2 group relative"
          >
            <img 
              src="/src/assets/images/regenerated_image_1778498577560.jpg" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              alt="Featured"
            />
          </motion.div>

          <div className="w-full space-y-4">
            <div className="w-full h-[1px] bg-white/5" />
            <div className="flex justify-between font-mono text-[9px] uppercase tracking-tighter text-white/40">
              <span>Scroll to view curated gallery</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION : PHOTOGRAPHIE (10 PHOTOS) - SCATTERED WALL */}
      <section className="py-32 px-6 overflow-hidden bg-[#03081a]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...reveal} className="mb-20 text-center">
            <h2 className="text-xl font-bold uppercase tracking-[0.3em] inline-flex items-center">
              <Camera size={18} className="mr-3 text-primary" /> Mur de Créations
            </h2>
            <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-widest italic">Capturer le moment, sculpter la lumière.</p>
          </motion.div>

          <div className="relative min-h-[800px] md:min-h-[1000px] flex flex-wrap justify-center items-center gap-4 py-10">
            {PHOTOS.map((photo, i) => {
              const rotations = [-5, 3, -2, 6, -8, 4, -3, 7, -4, 2];
              const scale = [1, 1.1, 0.9, 1.05, 0.95, 1, 1.1, 0.9, 1.05, 1];
              return (
                <motion.div 
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: scale[i % scale.length], rotate: rotations[i % rotations.length] }}
                  whileHover={{ scale: 1.2, rotate: 0, zIndex: 50, transition: { duration: 0.3 } }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="reveal-card p-2 bg-white/10 backdrop-blur-xl shadow-2xl relative w-44 md:w-64 aspect-[4/5] overflow-hidden"
                >
                  <img 
                    src={photo.url} 
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                    alt={`Gallery ${i}`}
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION : RÉALISATIONS VIDÉO (2 VIDEOS) */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div {...reveal} className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-[0.3em] flex items-center">
            <span className="w-12 h-[1px] bg-primary mr-6"></span> 
            <Play size={18} className="mr-3 text-primary" /> Montage & Réalisation
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12">
          <motion.div {...reveal} className="reveal-card overflow-hidden aspect-video shadow-2xl">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1" 
              title="Work 1" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.div {...reveal} className="reveal-card overflow-hidden aspect-video shadow-2xl">
             <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1" 
              title="Work 2" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* SECTION : CONCEPTION 3D (2 PROJETS) */}
      <section className="py-32 bg-[#03081a]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...reveal} className="mb-16 text-right">
            <h2 className="text-xl font-bold uppercase tracking-[0.3em] flex items-center justify-end">
              <Box size={18} className="mr-3 text-secondary" /> Conception 3D 
              <span className="w-12 h-[1px] bg-secondary ml-6"></span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div {...reveal} className="reveal-card p-4">
              <img 
                src="https://images.unsplash.com/photo-16331167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800" 
                className="rounded-2xl w-full h-72 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                alt="Modélisation Arduino"
              />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">Modélisation Arduino</h3>
              <p className="text-slate-400 text-xs">Pièces techniques pour stabilisation vidéo réalisées sous Blender.</p>
            </motion.div>
            <motion.div {...reveal} transition={{ delay: 0.2 }} className="reveal-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1617791160536-598cf3278827?auto=format&fit=crop&q=80&w=800" 
                className="rounded-2xl w-full h-72 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                alt="Hard Surface Design"
              />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">Hard Surface Design</h3>
              <p className="text-slate-400 text-xs">Exploration des textures mécaniques et impression 3D.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION : ANIMATIONS (4 PROJETS) */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div {...reveal} className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-[0.3em] flex items-center">
            <span className="w-12 h-[1px] bg-primary mr-6"></span> 
            <Layers size={18} className="mr-3 text-primary" /> Animations Motion
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div 
              key={i} 
              {...reveal} 
              transition={{ delay: i * 0.1 }}
              className="reveal-card aspect-square relative group overflow-hidden"
            >
              <img 
                src={`https://images.unsplash.com/photo-${1550751827 + i}-4bd374c3f58b?q=80&w=400`} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                alt={`Animation ${i}`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play size={24} className="text-white/20 group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-40 text-center border-t border-white/5 mx-6">
        <motion.div {...reveal}>
          <div className="text-slate-600 text-[10px] tracking-[0.6em] uppercase mb-12">
            © 2026 — Travaux Personnels & Créations Numériques
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="hover:text-primary transition cursor-default">Premiere Pro</span>
            <span className="hover:text-primary transition cursor-default">After Effects</span>
            <span className="hover:text-primary transition cursor-default">Photoshop</span>
            <span className="hover:text-primary transition cursor-default">Blender</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

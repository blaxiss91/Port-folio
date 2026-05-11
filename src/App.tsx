import { motion } from "motion/react";
import { Play, Box, Camera, Layers, Mail } from "lucide-react";

const PHOTOS = [
  { id: 0, url: "/photos/photo_0.jpg" },
  { id: 1, url: "/photos/photo_1.jpg" },
  { id: 2, url: "/photos/photo_2.jpg" },
  { id: 3, url: "/photos/photo_3.jpg" },
  { id: 4, url: "/photos/photo_4.jpg" },
  { id: 5, url: "/photos/photo_5.jpg" },
  { id: 6, url: "/photos/photo_6.jpg" },
  { id: 7, url: "/photos/photo_7.jpg" },
  { id: 8, url: "/photos/photo_8.jpg" },
  { id: 9, url: "/photos/photo_9.jpg" }
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
      
      {/* SIMPLE NAV */}
      <nav className="fixed top-6 right-6 z-50 flex gap-4">
        {['Photos', 'Vidéo', '3D', 'Motion'].map((item, i) => (
          <button 
            key={item}
            onClick={() => document.getElementById(`section-${i + 1}`)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest hover:bg-primary/20 transition-all cursor-pointer"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* HERO SECTION - STUDIO AESTHETIC */}
      <section id="section-0" className="min-h-screen grid grid-cols-1 md:grid-cols-12 border-b border-white/[0.05]">
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
              ALEXIS <br />
              <span className="italic">CHARRON.</span>
            </h1>

            <div className="flex flex-wrap gap-x-12 gap-y-6 mt-12">
              <div className="space-y-2">
                <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">Disciplines</p>
                <p className="text-xs uppercase tracking-widest font-bold">3D / Video / Motion</p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">Age</p>
                <p className="text-xs uppercase tracking-widest font-bold">17</p>
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
              src="/photos/photo_0.jpg" 
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
      <section id="section-1" className="py-32 px-6 overflow-hidden bg-[#03081a]">
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
      <section id="section-2" className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div {...reveal} className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-[0.3em] flex items-center">
            <span className="w-12 h-[1px] bg-primary mr-6"></span> 
            <Play size={18} className="mr-3 text-primary" /> Montage & Réalisation
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12">
          <motion.div {...reveal} className="reveal-card overflow-hidden aspect-video shadow-2xl bg-black flex items-center justify-center">
            <video 
              className="w-full h-full object-cover" 
              src="/photos/video_0.mp4" 
              controls
            />
          </motion.div>
          <motion.div {...reveal} className="reveal-card overflow-hidden aspect-video shadow-2xl bg-black flex items-center justify-center">
            <video 
              className="w-full h-full object-cover" 
              src="/photos/video_1.mp4" 
              controls
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION : CONCEPTION 3D (2 PROJETS) */}
      <section id="section-3" className="py-32 bg-[#03081a]">
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
                src="/photos/modelisation_0.jpg" 
                className="rounded-2xl w-full h-72 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                alt="Modélisation Arduino"
              />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">Modélisation Arduino</h3>
              <p className="text-slate-400 text-xs">Pièces techniques pour stabilisation vidéo réalisées sous Blender.</p>
            </motion.div>
            <motion.div {...reveal} transition={{ delay: 0.2 }} className="reveal-card p-4">
              <img 
                src="/photos/modelisation_1.jpg" 
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
      <section id="section-4" className="py-32 px-6 max-w-6xl mx-auto">
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
              className="reveal-card aspect-square relative group overflow-hidden bg-black"
            >
              <video 
                src={`/photos/animation_${i}.mp4`} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                loop 
                muted 
                onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
                onMouseOut={(e) => (e.currentTarget as HTMLVideoElement).pause()}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play size={24} className="text-white/20 group-hover:opacity-0 transition-opacity" />
              </div>
              <div className="absolute bottom-2 left-4 pointer-events-none">
                <p className="text-[8px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Simulation {i + 1}</p>
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

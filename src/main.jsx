import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Mic,
  BrainCircuit,
  Blocks,
  WifiOff,
  Palette,
  Monitor,
  ArrowRight,
  BookOpen,
  PlayCircle,
  ShieldCheck,
  Cpu,
  Check,
  Zap
} from 'lucide-react';
import './index.css';

const App = () => {
  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 bg-[#0B0C10] font-sans overflow-x-hidden relative">
      <style>{`
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: #0B0C10;
        }
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
        
        /* Alive Backgrounds */
        .bg-aurora {
            background: 
                radial-gradient(circle at 15% 50%, rgba(79, 70, 229, 0.08), transparent 25%), 
                radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.05), transparent 25%);
            animation: pulse-aurora 10s ease-in-out infinite alternate;
        }

        @keyframes pulse-aurora {
            0% { opacity: 0.5; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.1); }
        }

        /* 3D Transform Classes */
        .perspective-container {
            perspective: 2000px;
        }

        .hero-image-container {
            transform-style: preserve-3d;
            transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .hero-image {
            box-shadow: 
                0 0 0 1px rgba(255,255,255,0.05),
                0 25px 60px -15px rgba(0,0,0,0.7),
                0 0 40px rgba(79, 70, 229, 0.1); /* Subtle Indigo Glow */
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0B0C10;
        }
        ::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #475569;
        }

        /* Vibrant Gradients */
        .text-gradient {
            background: linear-gradient(to right bottom, #fff, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .text-gradient-accent {
            background: linear-gradient(to right, #818cf8, #34d399);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Animations */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        /* Glass Cards with Hover Glow */
        .locus-card {
            background: rgba(30, 41, 59, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.03);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .locus-card:hover {
            background: rgba(30, 41, 59, 0.6);
            border-color: rgba(99, 102, 241, 0.2); /* Indigo hint */
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
            transform: translateY(-2px);
        }

        /* Grid Pattern */
        .grid-pattern {
            background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
            mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
      `}</style>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-aurora pointer-events-none z-0"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-40"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

// --- Sub-Components ---

const WINDOWS_DOWNLOAD_URL = 'https://github.com/noevoapps/Locus-NoteBook/releases/download/Version1/locus-1.0.0-setup.exe';

const DownloadButton = ({ primary = false }) => (
  <a
    href={WINDOWS_DOWNLOAD_URL}
    download="locus-1.0.0-setup.exe"
    target="_blank"
    rel="noopener noreferrer"
    className={`
      group flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 relative overflow-hidden no-underline
      ${primary 
          ? 'bg-white text-black hover:bg-indigo-50 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]' 
          : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/10'}
    `}
  >
      {primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
      )}
      <Monitor className={`w-4 h-4 shrink-0 ${primary ? 'text-indigo-600' : ''}`} />
      <span className="relative z-10">Download for Windows</span>
      {primary && <span className="opacity-30 font-light mx-1 relative z-10">|</span>}
      <span className={`text-xs ${primary ? 'opacity-60' : 'opacity-50'} font-normal relative z-10`}>v1.0 Free</span>
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#0B0C10]/80 backdrop-blur-md border-b border-white/5' : 'py-5 bg-transparent'}`}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative">
                      <div className="absolute inset-0 bg-indigo-500 blur-sm opacity-0 group-hover:opacity-40 transition-opacity rounded"></div>
                      <div className="relative w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
                          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="Locus" className="w-4 h-4 group-hover:scale-110 transition-transform object-contain" />
                      </div>
                  </div>
                  <span className="font-bold text-lg tracking-tight text-slate-100">Locus <span className="text-slate-500 font-normal">NoteBook</span></span>
              </div>
              
          </div>
      </nav>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 35;
      const y = (e.clientY - top - height / 2) / 35;
      setMousePos({ x, y });
  };

  return (
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
              {/* Text Content */}
              <div className="space-y-8 animate-[fadeIn_1s_ease-out]">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                      Local First & Free
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
                      Think clearly. <br/>
                      <span className="text-gradient-accent">Capture instantly.</span>
                  </h1>
                  
                  <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                      Locus transforms your chaotic lectures into structured knowledge using local AI. No cloud uploads. No monthly fees.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <DownloadButton primary={true} />
                      <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-colors group">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <PlayCircle className="w-4 h-4 text-indigo-400" />
                          </div>
                          See how it works
                      </button>
                  </div>

                  <div className="flex items-center gap-6 text-xs text-slate-500 font-mono pt-8 border-t border-white/5 mt-8 w-fit">
                      <span className="flex items-center gap-2 px-3 py-1 rounded bg-white/5">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          100% Privacy
                      </span>
                      <span>v1.0.4 stable</span>
                  </div>
              </div>

              {/* Clean App Visual */}
              <div 
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
                  className="perspective-container relative hidden lg:block"
              >
                  <div 
                      className="hero-image-container relative z-10"
                      style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
                  >
                      {/* App Window Frame - Minimalist */}
                      <div className="hero-image rounded-xl overflow-hidden border border-slate-700/50 bg-[#12141A]">
                          {/* Window Header */}
                          <div className="h-10 bg-[#1A1D26] flex items-center justify-between px-4 border-b border-black/20">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                              </div>
                              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium bg-black/20 px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Locus Live
                              </div>
                              <div className="w-10"></div> {/* Spacer */}
                          </div>
                          
                          {/* App Content */}
                          <div className="aspect-[16/10] bg-[#12141A] relative flex">
                               {/* Clean Sidebar */}
                               <div className="w-56 border-r border-white/5 bg-[#16181F] p-4 space-y-6 hidden md:block">
                                   <div className="space-y-1">
                                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Notebooks</div>
                                      <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium bg-indigo-500/10 px-2 py-1.5 rounded cursor-pointer">
                                        <BookOpen className="w-3.5 h-3.5" />
                                        Biology 101
                                      </div>
                                      <div className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 px-2 py-1.5 rounded cursor-pointer transition-colors">
                                        <BookOpen className="w-3.5 h-3.5" />
                                        History
                                      </div>
                                   </div>
                               </div>
                               
                               {/* Main Content */}
                               <div className="flex-1 p-8 space-y-6 relative overflow-hidden">
                                   {/* Header Area */}
                                   <div className="space-y-2">
                                       <div className="h-8 w-3/4 bg-slate-800/50 rounded animate-pulse"></div>
                                       <div className="flex gap-2">
                                         <div className="h-4 w-20 bg-slate-800/30 rounded"></div>
                                         <div className="h-4 w-20 bg-slate-800/30 rounded"></div>
                                       </div>
                                   </div>
                                   
                                   {/* Simulated Live Transcript Block */}
                                   <div className="p-5 border border-indigo-500/20 rounded-lg bg-indigo-500/5 relative overflow-hidden group">
                                       <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                                       <div className="absolute top-4 right-4 flex items-center gap-2">
                                           <span className="text-[10px] text-indigo-300 font-mono">WHISPER-V3</span>
                                       </div>
                                       
                                       <div className="space-y-3">
                                           <div className="flex gap-3">
                                             <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                               <span className="text-xs font-bold text-slate-400">P</span>
                                             </div>
                                             <div className="space-y-1.5 w-full">
                                                <div className="h-2 w-full bg-slate-700/50 rounded"></div>
                                                <div className="h-2 w-11/12 bg-slate-700/50 rounded"></div>
                                                <div className="h-2 w-4/5 bg-slate-700/50 rounded"></div>
                                             </div>
                                           </div>
                                       </div>
                                   </div>

                                   {/* AI Summary Block */}
                                   <div className="space-y-3 pt-2">
                                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                          <BrainCircuit className="w-3 h-3" />
                                          Real-time Summary
                                        </div>
                                        <div className="h-2 w-full bg-slate-800/30 rounded"></div>
                                        <div className="h-2 w-full bg-slate-800/30 rounded"></div>
                                   </div>
                               </div>
                               
                               {/* Gradient Overlay for depth */}
                               <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] to-transparent opacity-20 pointer-events-none"></div>
                          </div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -right-6 top-12 p-3 rounded-lg locus-card animate-float shadow-xl z-20 flex gap-3 items-center border-l-2 border-l-emerald-400">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Llama-3 Active</div>
                            <div className="text-[10px] text-slate-400">Local Inference • 45t/s</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, colSpan = "col-span-1" }) => (
  <div className={`locus-card p-6 rounded-xl group ${colSpan} relative overflow-hidden`}>
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24 text-white rotate-12" />
      </div>
      
      <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 mb-5 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300">
          <Icon className="w-6 h-6 text-slate-300 group-hover:text-indigo-300 transition-colors" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-slate-100">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed relative z-10">{desc}</p>
  </div>
);

const Features = () => {
  return (
      <section id="features" className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
              <div className="max-w-2xl mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built for <span className="text-gradient-accent">deep focus</span>.</h2>
                  <p className="text-slate-400 text-lg">Everything you need to capture and understand your lectures, without the clutter of traditional tools.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  <FeatureCard 
                      icon={Mic}
                      title="Local Transcription"
                      desc="Offline-first Whisper model. Converts speech to text in real-time with high accuracy."
                  />
                  <FeatureCard 
                      icon={BrainCircuit}
                      title="Auto-Summaries"
                      desc="Let the AI condense hour-long classes into concise, study-ready bullet points instantly."
                  />
                  <FeatureCard 
                      icon={Blocks}
                      title="Block Editor"
                      desc="A familiar slash-command interface. Type '/' to insert headers, lists, or math blocks effortlessly."
                  />
                  <FeatureCard 
                      icon={Palette}
                      title="5 Minimalist Themes"
                      desc="Curated themes including Dark, Light, Sepia, Nord, and High Contrast. Designed to reduce eye strain during late night study sessions."
                      colSpan="md:col-span-2"
                  />
                  <FeatureCard 
                      icon={WifiOff}
                      title="Totally Offline"
                      desc="Your notes are plain text files on your drive. Zero data leaves your computer. Ever."
                  />
              </div>
          </div>
      </section>
  );
};

const HowItWorks = () => {
  return (
      <section className="py-24 bg-[#08090C] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 md:order-1">
                  <div className="locus-card p-1.5 rounded-xl">
                      {/* Simulated Terminal/Code Block */}
                      <div className="bg-[#0B0C10] rounded-lg p-6 font-mono text-xs overflow-hidden leading-relaxed border border-white/5 shadow-inner">
                          <div className="flex gap-1.5 mb-6">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></span>
                          </div>
                          <div className="space-y-4">
                              <div className="text-slate-500 flex gap-2">
                                <span className="text-emerald-500">➜</span>
                                <span>~ locus --init --model=llama-3-8b</span>
                              </div>
                              <div className="text-slate-400">{'>'} Initializing local environment...</div>
                              <div className="text-slate-400">{'>'} Loading quantized weights... <span className="text-emerald-400">Done (1.2s)</span></div>
                              
                              <div className="my-4 pl-4 border-l-2 border-indigo-500/30 text-slate-300 italic">
                                  "The mitochondria is the powerhouse of the cell..."
                              </div>
                              
                              <div className="text-slate-500 mb-1">// Generating summary</div>
                              <div className="p-3 bg-[#16181F] rounded border border-white/5 text-slate-300">
                                  <span className="text-indigo-400 font-bold block mb-1 text-[10px] uppercase tracking-wider">Flashcard Created</span>
                                  <span className="text-slate-300">Q: Function of mitochondria?</span><br/>
                                  <span className="text-slate-500">A: Cellular respiration / Energy production.</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Smart, but simple.</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                      Locus replaces complex cloud setups with a single, efficient desktop app. It's designed to be the fastest way to go from listening to learning.
                  </p>
                  <ul className="space-y-4 pt-4">
                      {[
                          "Runs on your hardware (CPU/GPU)",
                          "Zero subscription fees",
                          "Export to Markdown, PDF, or HTML",
                          "Plain text file storage"
                      ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 group">
                              <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              </div>
                              <span className="text-slate-300">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </section>
  );
};

const CTA = () => (
  <section className="py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Your personal knowledge base.</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Join students using Locus NoteBook to keep their data private and their studies organized.
          </p>
          <div className="flex flex-col items-center gap-6">
              <DownloadButton primary={true} />
              <p className="text-xs text-slate-600 font-mono">
                Requires Windows 10/11 • macOS & Linux coming soon
              </p>
          </div>
      </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-[#050608] text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
                  <BookOpen className="text-white w-3 h-3" />
              </div>
              <span className="font-semibold text-slate-300">Locus NoteBook</span>
          </div>
          
          <div className="flex gap-8">
              <a href="#" className="hover:text-indigo-400 transition-colors">Source</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">License</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          <div>
              &copy; 2024 Locus Project.
          </div>
      </div>
  </footer>
);

export default App;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
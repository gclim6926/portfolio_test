import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* 운하 전역 배경 */}
      <div className="fixed inset-0 canal-background"></div>
      
      {/* 운하 물 표면 효과 */}
      <div className="fixed inset-0 water-surface"></div>
      
      {/* 운하 환경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* 물의 흐름 라인들 */}
        <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-water-flow"></div>
        <div className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-water-flow delay-2000"></div>
        <div className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent animate-water-flow delay-4000"></div>
        <div className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent animate-water-flow delay-6000"></div>
        
        {/* 수중 거품들 */}
        <div className="absolute bottom-20 left-1/5 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-underwater-bubbles"></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-underwater-bubbles delay-1000"></div>
        <div className="absolute bottom-16 left-3/5 w-2 h-2 bg-cyan-300/25 rounded-full animate-underwater-bubbles delay-2000"></div>
        <div className="absolute bottom-28 right-1/3 w-1.5 h-1.5 bg-blue-300/35 rounded-full animate-underwater-bubbles delay-3000"></div>
        <div className="absolute bottom-24 left-2/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-underwater-bubbles delay-4000"></div>
        
        {/* 물결 효과 */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 border border-cyan-400/15 rounded-full animate-ripple"></div>
        <div className="absolute top-3/4 right-1/5 w-20 h-20 border border-blue-400/10 rounded-full animate-ripple delay-1500"></div>
        <div className="absolute top-1/2 left-4/5 w-16 h-16 border border-cyan-300/20 rounded-full animate-ripple delay-3000"></div>
        
        {/* 수중 글로우 */}
        <div className="absolute top-1/3 right-1/6 w-40 h-40 underwater-glow animate-wave"></div>
        <div className="absolute bottom-1/3 left-1/8 w-32 h-32 underwater-glow animate-wave delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <div id="home">
            <Hero />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

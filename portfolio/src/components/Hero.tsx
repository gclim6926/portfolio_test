'use client';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      {/* 운하 배경 */}
      <div className="absolute inset-0 canal-background">
        {/* 물 표면 효과 */}
        <div className="absolute inset-0 water-surface"></div>
        
        {/* 운하 벽면 효과 */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 via-transparent to-slate-800/40"></div>
        
        {/* 물의 흐름 라인들 */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-water-flow"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-water-flow delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent animate-water-flow delay-2000"></div>
        
        {/* 물결 효과 */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-ripple"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 border border-blue-400/15 rounded-full animate-ripple delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 border border-cyan-300/20 rounded-full animate-ripple delay-2000"></div>
        
        {/* 수중 거품들 */}
        <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-underwater-bubbles"></div>
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-underwater-bubbles delay-1000"></div>
        <div className="absolute bottom-16 left-2/3 w-1 h-1 bg-cyan-300/50 rounded-full animate-underwater-bubbles delay-2000"></div>
        <div className="absolute bottom-24 left-1/2 w-2.5 h-2.5 bg-cyan-400/20 rounded-full animate-underwater-bubbles delay-3000"></div>
        
        {/* 수중 글로우 효과 */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 underwater-glow animate-wave"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 underwater-glow animate-wave delay-1000"></div>
        
        {/* 운하 반사 효과 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-cyan-800/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 홀로그램 아바타 */}
        <div className="mb-8 relative">
          <div className="relative w-40 h-40 mx-auto mb-6">
            {/* 외부 링 */}
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border border-purple-400 rounded-full animate-spin-slow-reverse"></div>
            
            {/* 중앙 아바타 */}
            <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-[0_0_30px_rgba(0,255,255,0.5)]">
              <span className="animate-pulse">DEV</span>
            </div>
            
            {/* 스캔 라인 */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
            </div>
          </div>
        </div>
        
        {/* 타이틀 */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-glow">
            HELLO WORLD
          </h1>
          <div className="flex justify-center items-center gap-2 text-cyan-400 text-sm font-mono">
            <span className="animate-pulse">{'>'}</span>
            <span className="animate-typing">initializing_developer.exe</span>
            <span className="animate-blink">|</span>
          </div>
        </div>
        
        {/* 서브타이틀 */}
        <p className="text-2xl md:text-3xl text-cyan-300 mb-8 font-light">
          <span className="relative">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">FULL-STACK DEVELOPER</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-expand"></span>
          </span>
        </p>
        
        {/* 설명 */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-20"></div>
          <p className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 text-cyan-100 leading-relaxed font-mono text-sm">
            <span className="text-cyan-400">//</span> 미래를 코딩하는 개발자<br/>
            <span className="text-cyan-400">const</span> <span className="text-purple-400">passion</span> = <span className="text-green-400">'혁신적인 기술로 세상을 바꾸기'</span>;<br/>
            <span className="text-cyan-400">const</span> <span className="text-purple-400">mission</span> = <span className="text-green-400">'완벽한 사용자 경험 구현'</span>;
          </p>
        </div>
        
        {/* 액션 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>⚡</span>
              <span>PROJECTS_SCAN</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 bg-slate-900/50 backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>📡</span>
              <span>CONNECT_PROTOCOL</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* 미래적 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-float">
          <div className="text-cyan-400 text-xs font-mono">SCROLL_DOWN</div>
          <div className="relative w-6 h-12 border-2 border-cyan-400 rounded-full flex justify-center overflow-hidden">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll-indicator shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

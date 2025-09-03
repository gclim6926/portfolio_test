interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'React', level: 92, category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', level: 88, category: 'Framework', icon: '🚀' },
  { name: 'TypeScript', level: 85, category: 'Language', icon: '🔷' },
  { name: 'JavaScript', level: 95, category: 'Language', icon: '⚡' },
  { name: 'Tailwind', level: 90, category: 'Styling', icon: '🎨' },
  { name: 'Node.js', level: 82, category: 'Backend', icon: '🟢' },
  { name: 'Python', level: 78, category: 'Language', icon: '🐍' },
  { name: 'Git', level: 94, category: 'Tools', icon: '📦' },
];

export default function Skills() {
  return (
    <section className="relative py-20 px-4 bg-slate-900/80 backdrop-blur-sm overflow-hidden">
      {/* 운하 수중 배경 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 via-slate-700/40 to-slate-800/60"></div>
        
        {/* 물의 흐름 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* 수중 거품들 */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-underwater-bubbles"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400/25 rounded-full animate-underwater-bubbles delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-cyan-300/15 rounded-full animate-underwater-bubbles delay-2000"></div>
        
        {/* 물결 효과 */}
        <div className="absolute top-1/4 right-1/4 w-28 h-28 border border-cyan-400/10 rounded-full animate-ripple"></div>
        <div className="absolute bottom-1/4 left-1/5 w-24 h-24 border border-blue-400/15 rounded-full animate-ripple delay-1500"></div>
        
        {/* 떠다니는 코드 조각들 */}
        <div className="absolute top-10 left-10 text-cyan-400/20 font-mono text-xs animate-float">
          {'{ "skills": "loading..." }'}
        </div>
        <div className="absolute top-32 right-20 text-blue-400/20 font-mono text-xs animate-float delay-1000">
          {'function() { return true; }'}
        </div>
        <div className="absolute bottom-20 left-1/4 text-cyan-300/20 font-mono text-xs animate-float delay-500">
          {'const level = "expert";'}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider">SKILL_MATRIX.EXE</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TECH ARSENAL
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-2 text-cyan-300 font-mono text-sm">
            <span className="animate-pulse">{'>'}</span>
            <span>scanning_capabilities.dll</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
        
        {/* 스킬 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 홀로그램 효과 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* 메인 카드 */}
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                {/* 스캔 라인 */}
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan"></div>
                </div>
                
                {/* 헤더 */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <div className="text-xs font-mono text-cyan-400/60 uppercase">
                    {skill.category}
                  </div>
                </div>
                
                {/* 스킬 이름 */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-xs font-mono text-gray-400">
                    proficiency_{skill.level}%
                  </div>
                </div>
                
                {/* 프로그레스 바 */}
                <div className="relative">
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      {/* 글로우 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* 레벨 표시 */}
                  <div className="absolute -top-6 right-0 text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.level}/100
                  </div>
                </div>
                
                {/* 데이터 스트림 */}
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs font-mono text-cyan-400/40 truncate">
                    {`${skill.name.toLowerCase().replace(/\s+/g, '_')}_module.loaded`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 하단 상태 표시 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-cyan-400/30 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">SYSTEM_ONLINE</span>
            </div>
            <div className="w-px h-4 bg-cyan-400/30"></div>
            <div className="text-cyan-300 font-mono text-sm">
              {skills.length} modules_loaded
            </div>
            <div className="w-px h-4 bg-cyan-400/30"></div>
            <div className="text-purple-300 font-mono text-sm">
              avg_proficiency: {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

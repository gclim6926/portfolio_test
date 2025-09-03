'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: '홈', id: 'home' },
    { label: '스킬', id: 'skills' },
    { label: '프로젝트', id: 'projects' },
    { label: '연락처', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-800/90 backdrop-blur-md border-b border-cyan-400/30 shadow-[0_8px_32px_rgba(6,182,212,0.1)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            <div className="relative">
              <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-spin-slow opacity-30"></div>
            </div>
            <span className="font-mono tracking-wider">
              DEV<span className="text-purple-400">_MATRIX</span>
            </span>
          </button>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-6 py-2 text-cyan-300 hover:text-white font-medium font-mono text-sm uppercase tracking-wider transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-cyan-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 글로우 효과 */}
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 언더라인 애니메이션 */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
            aria-label="메뉴 토글"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`} />
              <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`} />
            </div>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-slate-800/90 backdrop-blur-md border border-cyan-400/30 rounded-lg mt-2 shadow-[0_8px_32px_rgba(6,182,212,0.1)]">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group block w-full text-left px-4 py-3 text-cyan-300 hover:text-white hover:bg-cyan-400/10 transition-all duration-300 font-mono text-sm uppercase tracking-wider relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{'>'}</span>
                  {item.label}
                </span>
                
                {/* 사이드 글로우 */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* 상단 글로우 라인 */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </nav>
  );
}

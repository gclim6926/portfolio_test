'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            <p>&copy; {currentYear} 개발자 포트폴리오. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              맨 위로 ↑
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                🐱
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                📧
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

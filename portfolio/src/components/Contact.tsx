'use client';

interface ContactMethod {
  name: string;
  icon: string;
  href: string;
  description: string;
  primary?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    name: '이메일',
    icon: '📧',
    href: 'mailto:your-email@example.com',
    description: '프로젝트 문의나 협업 제안을 환영합니다',
    primary: true
  },
  {
    name: 'GitHub',
    icon: '🐱',
    href: 'https://github.com/yourusername',
    description: '코드와 프로젝트를 확인하실 수 있습니다'
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    href: 'https://linkedin.com/in/yourprofile',
    description: '전문적인 네트워킹과 경력 정보'
  },
  {
    name: 'Blog',
    icon: '📝',
    href: 'https://yourblog.com',
    description: '기술 블로그와 개발 경험 공유'
  }
];

interface ContactCardProps {
  method: ContactMethod;
}

function ContactCard({ method }: ContactCardProps) {
  return (
    <a
      href={method.href}
      target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
      rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className={`block p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
        method.primary 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-700'
      }`}
    >
      <div className="text-center">
        <div className="text-3xl mb-3">{method.icon}</div>
        <h3 className={`text-lg font-semibold mb-2 ${
          method.primary ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}>
          {method.name}
        </h3>
        <p className={`text-sm ${
          method.primary ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
        }`}>
          {method.description}
        </p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            연락하기
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            새로운 기회나 프로젝트 협업에 관심이 있으시면 언제든 연락주세요! 
            빠른 시일 내에 답변드리겠습니다.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => (
            <ContactCard key={method.name} method={method} />
          ))}
        </div>
        
        {/* 간단한 연락 폼 */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            빠른 메시지 보내기
          </h3>
          
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="hong@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                제목
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                placeholder="프로젝트 협업 문의"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white resize-none"
                placeholder="안녕하세요! 프로젝트 협업에 대해 문의드리고 싶습니다..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              메시지 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

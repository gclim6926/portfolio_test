interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 Tailwind CSS를 사용하여 제작한 반응형 포트폴리오 웹사이트입니다. 다크모드를 지원하며 모던한 UI/UX를 제공합니다.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/yourusername/portfolio'
  },
  {
    id: 2,
    title: '할일 관리 앱',
    description: 'React와 Node.js를 사용한 풀스택 할일 관리 애플리케이션입니다. 사용자 인증, CRUD 기능, 실시간 업데이트를 지원합니다.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: '#',
    githubUrl: 'https://github.com/yourusername/todo-app'
  },
  {
    id: 3,
    title: '날씨 정보 앱',
    description: '외부 API를 활용한 실시간 날씨 정보 제공 웹 애플리케이션입니다. 위치 기반 서비스와 5일 예보를 제공합니다.',
    tech: ['JavaScript', 'Weather API', 'CSS3'],
    demoUrl: '#',
    githubUrl: 'https://github.com/yourusername/weather-app'
  },
  {
    id: 4,
    title: 'E-commerce API',
    description: 'Express.js와 PostgreSQL을 사용한 RESTful API 서버입니다. JWT 인증, 결제 시스템, 상품 관리 기능을 포함합니다.',
    tech: ['Express.js', 'PostgreSQL', 'JWT', 'Stripe API'],
    githubUrl: 'https://github.com/yourusername/ecommerce-api'
  }
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
      project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
    }`}>
      {project.featured && (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4">
          ⭐ 추천 프로젝트
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            데모 보기
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center font-medium"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            주요 프로젝트
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 개발한 프로젝트들을 소개합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
          >
            <span>🐱</span>
            더 많은 프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  );
}

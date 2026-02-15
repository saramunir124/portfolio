'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiMui,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJira
} from 'react-icons/si';

// Technology Icons Component
const TechIcon = ({ name }: { name: string }) => {
  const icons: { [key: string]: React.ReactElement } = {
    'Next.js': <SiNextdotjs className="w-8 h-8" />,
    'React.js': <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    'Node.js': <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
    'Tailwind CSS': <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    'Bootstrap': <SiBootstrap className="w-8 h-8 text-[#7952B3]" />,
    'Material UI': <SiMui className="w-8 h-8 text-[#007FFF]" />,
    'shadcn/ui': (
      <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
        <div className="bg-black rounded-tl"></div>
        <div className="bg-black rounded-tr"></div>
        <div className="bg-black rounded-bl"></div>
        <div className="bg-black rounded-br"></div>
      </div>
    ),
    'Aceternity UI': (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    'Magic UI': (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#9333EA"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#9333EA" strokeWidth="2" fill="none"/>
      </svg>
    ),
    'PostgreSQL': <SiPostgresql className="w-8 h-8 text-[#336791]" />,
    'MySQL': <SiMysql className="w-8 h-8 text-[#4479A1]" />,
    'Automated Testing': (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#10B981"/>
      </svg>
    ),
    'Git': <SiGit className="w-8 h-8 text-[#F05032]" />,
    'GitHub': <SiGithub className="w-8 h-8" />,
    'Bitbucket': <SiBitbucket className="w-8 h-8 text-[#0052CC]" />,
    'Jira': <SiJira className="w-8 h-8 text-[#0052CC]" />,
  };

  return icons[name] || (
    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
    </div>
  );
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Sara Munir",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && typedText === currentPhrase) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && typedText === '') {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else if (!isDeleting && typedText.length < currentPhrase.length) {
      // Type
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 100);
    } else if (isDeleting && typedText.length > 0) {
      // Delete
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, 50);
    }

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      if (timeout) clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [typedText, isDeleting, currentPhraseIndex]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero/Author Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Section - Mobile First */}
            <div className="relative w-full flex justify-center items-center order-1 md:order-2">
              {/* Mobile: Circular frame */}
              <div className="w-64 h-64 md:w-full md:max-w-md md:h-[600px] rounded-full md:rounded-3xl overflow-hidden shadow-2xl relative border-4 md:border-0 border-indigo-200 md:border-none">
        <Image
                  src="/saramunir.jpeg"
                  alt="Sara Munir"
                  fill
                  className="object-cover"
          priority
                  sizes="(max-width: 768px) 256px, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="text-center md:text-left order-2 md:order-1 w-full">
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 md:mb-6">
                Software Engineer
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                <span className="text-gray-900">Hello I'm </span>
                <span className="text-indigo-600">
                  {typedText}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
          </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4">
                Full-Stack Developer | Web Developer
              </p>
              <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8">
                Building modern, scalable web applications with cutting-edge technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Link 
                  href="/contact" 
                  className="inline-block bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Let's connect
                </Link>
                <a 
                  href="/about" 
                  className="inline-block border-2 border-indigo-600 text-indigo-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all text-sm md:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Here's what I'm good at</h2>
            <p className="text-xl text-gray-600">My expertise in key technologies</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Next.js & React.js</span>
                <span className="text-indigo-600 font-bold text-xl">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Node.js</span>
                <span className="text-indigo-600 font-bold text-xl">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Tailwind CSS</span>
                <span className="text-indigo-600 font-bold text-xl">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">PostgreSQL & MySQL</span>
                <span className="text-indigo-600 font-bold text-xl">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">These are the services I offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💻', title: 'Web Development', desc: 'Building responsive and scalable web applications using Next.js, React.js, and modern web technologies.' },
              { icon: '📝', title: 'Technical Writing', desc: 'Creating clear and comprehensive technical documentation and content for developers and users.' },
              { icon: '📱', title: 'Mobile Development', desc: 'Developing mobile-responsive applications and progressive web apps with modern frameworks.' },
              { icon: '📧', title: 'Email Development', desc: 'Creating responsive email templates and email marketing campaigns with HTML and CSS.' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Designing beautiful and intuitive user interfaces using Figma, Material UI, shadcn/ui, and Aceternity UI.' },
              { icon: '🌐', title: 'Full-Stack Development', desc: 'End-to-end development solutions from frontend to backend with database integration.' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stacks Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technology Stacks</h2>
            <p className="text-xl text-gray-600">Technologies I work with to build amazing products</p>
          </div>
          
          {/* Frontend & Backend */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-600 rounded"></div>
              Frontend & Backend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'shadcn/ui', 'Aceternity UI', 'Magic UI'].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-indigo-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-600">
                      <TechIcon name={tech} />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & Testing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-600 rounded"></div>
              Databases & Testing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['PostgreSQL', 'MySQL', 'Automated Testing'].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-indigo-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-600">
                      <TechIcon name={tech} />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools and Softwares */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-indigo-600 rounded"></div>
              Tools and Softwares
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Git', 'GitHub', 'Bitbucket', 'Jira'].map((tool, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-indigo-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-600">
                      <TechIcon name={tool} />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 px-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Achievements</h2>
            <p className="text-blue-100 text-lg">Numbers that speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📁', number: '12', label: 'Finished Projects' },
              { icon: '🏆', number: '3', label: 'Awards Won' },
              { icon: '😊', number: '8', label: 'Happy Clients' },
              { icon: '🔧', number: '99', label: 'Bugs Fixed' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="clients" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600"></p>
          </div>
          
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {[
                  {
                    name: 'Ahmed Malik',
                    role: 'CEO, TechSolutions Pvt Ltd',
                    company: 'Future Dev Solutions',
                    review: 'Sara delivered an outstanding website for our company. The design is modern, the code is clean, and the performance is excellent. She understood our requirements perfectly and delivered beyond expectations.',
                    rating: 5
                  },
                  {
                    name: 'Fatima Sheikh',
                    role: 'Owner, Delice Pizza',
                    company: 'Delice Pizza Platform',
                    review: 'Working with Sara was a great experience. She built our online ordering system quickly and efficiently. The platform is user-friendly and our customers love it. Highly recommended!',
                    rating: 5
                  },
                  {
                    name: 'Shahzad Ali',
                    role: 'Founder, Shahzad Collection',
                    company: 'Shahzad Collection Brand Shop',
                    review: 'Sara created an amazing e-commerce platform for our fashion brand. The website is beautiful, fast, and easy to use. Our sales have increased significantly since launching. Thank you Sara!',
                    rating: 5
                  },
                  {
                    name: 'Hassan Khan',
                    role: 'Restaurant Owner',
                    company: 'OrbyPOS System',
                    review: 'The restaurant management system Sara built has transformed our operations. Everything is automated now - from orders to billing. It has saved us so much time and improved our efficiency.',
                    rating: 5
                  },
                  {
                    name: 'Ayesha Ahmed',
                    role: 'Business Manager, QI Tech',
                    company: 'QI Tech Platform',
                    review: 'Sara developed our workflow automation tool and it has been a game-changer for our business. The forms and reporting features are exactly what we needed. Great work!',
                    rating: 5
                  },
                  {
                    name: 'Muhammad Raza',
                    role: 'Director, VisionBird Technologies',
                    company: 'Multiple Projects',
                    review: 'Sara is a talented developer with excellent technical skills. She worked on several projects for us including Rapido Pizza and British Energy Grants. Always professional and delivers on time.',
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4 md:px-8">
                    <div className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                      <div className="flex items-center gap-1 mb-6 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic leading-relaxed text-lg text-center">"{testimonial.review}"</p>
                      <div className="border-t border-gray-200 pt-6 text-center">
                        <p className="font-semibold text-gray-900 text-xl">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? 5 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 5 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? 'bg-indigo-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Basic Plans Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Basic Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect starting point for your project</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* WordPress Silver */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-4">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">WordPress Silver</h3>
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold text-indigo-600">$300</span>
                  <span className="text-gray-600 ml-2 block mt-1">One-Time Cost</span>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Website Platforms:</span>
                    <span className="text-gray-900">WordPress</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">CRM Setup:</span>
                    <span className="text-gray-900">Basic setup (1 tool)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Pages:</span>
                    <span className="text-gray-900">Up to 3 pages</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Delivery:</span>
                    <span className="text-gray-900">7-10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Maintenance:</span>
                    <span className="text-gray-900">$99/month</span>
                  </div>
                </div>
                <Link 
                  href="/pricing"
                  className="block w-full bg-indigo-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Shopify Silver */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-4">
                  <span className="text-4xl">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Shopify Silver</h3>
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold text-indigo-600">$500</span>
                  <span className="text-gray-600 ml-2 block mt-1">One-Time Cost</span>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Website Platforms:</span>
                    <span className="text-gray-900">Shopify</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">CRM Setup:</span>
                    <span className="text-gray-900">Basic setup (1 tool)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Pages:</span>
                    <span className="text-gray-900">Up to 3 pages</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Delivery:</span>
                    <span className="text-gray-900">7-10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Maintenance:</span>
                    <span className="text-gray-900">$99/month</span>
                  </div>
                </div>
                <Link 
                  href="/pricing"
                  className="block w-full bg-indigo-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Next.js Silver */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-4">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Next.js Silver</h3>
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold text-indigo-600">$800</span>
                  <span className="text-gray-600 ml-2 block mt-1">One-Time Cost</span>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Website Platforms:</span>
                    <span className="text-gray-900">Next.js (Full-stack)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">CRM Setup:</span>
                    <span className="text-gray-900">Basic setup (1 tool)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Pages:</span>
                    <span className="text-gray-900">Up to 3 pages</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Delivery:</span>
                    <span className="text-gray-900">7-10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Maintenance:</span>
                    <span className="text-gray-900">$99/month</span>
                  </div>
                </div>
                <Link 
                  href="/pricing"
                  className="block w-full bg-indigo-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/pricing"
              className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-6">
            Let's Work Together
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Get in touch and let's discuss how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
            <Link 
              href="/work" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

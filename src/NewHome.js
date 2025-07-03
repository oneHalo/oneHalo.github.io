import React, { useState, useEffect, useRef } from 'react';
import './NewHome.css';
import { Analytics } from '@vercel/analytics/react';
import scheduleimg from "./schedule-gen.png";
import breaktime from "./BreakTime.png";
import allSkii from "./Allskii.png";
import wahidLogo from "./Wahid-logo.png";
import compLogo from "./comp-logo.png";
import study from "./studying.png";
import ContactInfo from './ContactInfo';
import Contact from './Contact';

function NewHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-container">
            <img
              src={wahidLogo}
              className="App-logo"
              alt="Wahid Hoji Aminullah"
              onClick={() => window.open('https://www.linkedin.com/in/wahid-hoji')}
            />
            <span className="logo-text">Wahid Hoji Aminullah</span>
          </div>
          <nav className="main-nav">
            <button className="nav-link" onClick={() => scrollToSection('hero')}>Home</button>
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-link" onClick={() => scrollToSection('education')}>Education</button>
            <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
            <button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
            <button className="talk-button" onClick={toggleSidebar}>
              Contact Me
            </button>
          </nav>
        </div>
      </header>

      <main className="App-main">
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="gradient-text">Wahid Hoji Aminullah</span>
                <br />AI & Machine Learning Engineer
              </h1>
              <p className="hero-subtitle">
                Recent Software Engineering Graduate (2025) | University of Calgary | 
                Specializing in AI/ML, Data Science, and Full-Stack Development
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Research Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">AI/ML Frameworks</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="primary-button" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <button className="secondary-button" onClick={() => window.open('https://github.com/oneHalo')}>
                  GitHub Profile
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="floating-card">
                  <img src={allSkii} alt="AllSkii Project" />
                </div>
                <div className="floating-card">
                  <img src={scheduleimg} alt="Schedule Generator" />
                </div>
                <div className="floating-card">
                  <img src={breaktime} alt="BreakTime Project" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p className="about-description">
                  I'm a recent Software Engineering graduate (2025) from the University of Calgary with a strong academic foundation 
                  in software development and specialized expertise in Artificial Intelligence, Machine Learning, and Data Science. 
                  My academic journey combined rigorous coursework with hands-on project experience, developing practical skills 
                  in building intelligent systems and scalable software solutions.
                </p>
                <p className="about-description">
                  My technical expertise spans across <strong>Natural Language Processing</strong>, <strong>Computer Vision</strong>, 
                  <strong>Deep Learning</strong>, and <strong>Full-Stack Development</strong>. I have extensive experience with modern 
                  AI frameworks including PyTorch, TensorFlow, and Hugging Face Transformers, as well as proficiency in multiple 
                  programming languages and development technologies. I'm passionate about creating scalable, ethical AI solutions 
                  that solve real-world problems.
                </p>
                <div className="about-highlights">
                  <div className="highlight">
                    <h4>🚀 Always Looking for New Opportunities</h4>
                    <p>Open to AI/ML Engineering, Data Science, Software Engineering, or related roles in tech companies</p>
                  </div>
                  <div className="highlight">
                    <h4>🎯 Core Competencies</h4>
                    <p>AI/ML model development, fine-tuning, and deployment. Strong background in algorithms, data structures, and software architecture</p>
                  </div>
                  <div className="highlight">
                    <h4>🌟 Research Interests</h4>
                    <p>Ethical AI, reinforcement learning, generative models, NLP applications, and creating AI solutions that benefit society</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="section-container">
            <h2 className="section-title">Education & Achievements</h2>
            <div className="education-content">
                             <div className="education-card">
                 <div className="education-header">
                   <h3>Bachelor of Science in Software Engineering</h3>
                   <span className="education-year">2021 - 2025</span>
                 </div>
                 <div className="education-details">
                   <p className="institution">University of Calgary, Alberta, Canada</p>
                  <div className="coursework">
                    <h4>Relevant Coursework:</h4>
                    <div className="course-tags">
                      <span className="course-tag">Data Structures & Algorithms</span>
                      <span className="course-tag">Machine Learning</span>
                      <span className="course-tag">Artificial Intelligence</span>
                      <span className="course-tag">Database Systems</span>
                      <span className="course-tag">Software Engineering</span>
                      <span className="course-tag">Computer Networks</span>
                      <span className="course-tag">Operating Systems</span>
                      <span className="course-tag">Web Development</span>
                    </div>
                  </div>
                  <div className="achievements">
                    <h4>Notable Achievements:</h4>
                    <ul>
                      <li>Senior Capstone Project: SwiftNotesAI - Entrepreneurial AI Learning Platform</li>
                      <li>Led multiple team projects with 7+ developers</li>
                      <li>Completed advanced coursework in AI/ML and Data Science</li>
                      <li>Active member of Cyber Security Student Association</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card featured">
                <div className="project-header">
                  <h3>SwiftNotesAI - Entrepreneurial Capstone Project</h3>
                  <span className="project-status">Senior Capstone (2025)</span>
                </div>
                <p className="project-description">
                  An advanced AI-powered learning platform that leverages state-of-the-art NLP models to transform complex 
                  lecture materials into interactive summaries and generates personalized study schedules. Features include 
                  intelligent content summarization, adaptive learning algorithms, and ML-driven schedule optimization based 
                  on individual learning patterns and academic requirements.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">Hugging Face Transformers</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <button className="project-link" onClick={() => window.open('https://github.com/oneHalo')}>
                    View Code
                  </button>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>AllSkii - Ski Conditions Platform</h3>
                  <span className="project-role">Team Lead (7 members)</span>
                </div>
                <p className="project-description">
                  A comprehensive full-stack web application for Canadian ski enthusiasts. Led a team of 7 developers 
                  in creating a real-time ski conditions platform with user authentication, weather integration, 
                  and interactive maps. Implemented RESTful APIs, database design, and responsive front-end interfaces. 
                  Deployed on AWS with CI/CD pipeline integration.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">AWS EC2</span>
                  <span className="tech-tag">REST API</span>
                </div>
                <div className="project-image">
                  <img src={allSkii} alt="AllSkii Project" />
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Wildlife Schedule Generator</h3>
                  <span className="project-role">Team Lead (4 members)</span>
                </div>
                <p className="project-description">
                  Enterprise-grade scheduling system for wildlife rehabilitation organizations. Led development 
                  of complex algorithms for automated task assignment, resource allocation, and conflict resolution. 
                  Implemented comprehensive testing framework with 95%+ code coverage and unit/integration testing. 
                  Resulted in 60% reduction in scheduling conflicts and improved operational efficiency.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">JUnit</span>
                  <span className="tech-tag">Algorithm Design</span>
                  <span className="tech-tag">Agile/Scrum</span>
                </div>
                <div className="project-image">
                  <img src={scheduleimg} alt="Schedule Generator" />
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>BreakTime - Entertainment Recommendation Platform</h3>
                  <span className="project-role">Co-founder & Lead Developer</span>
                </div>
                <p className="project-description">
                  AI-powered movie and anime recommendation system with social features. Implemented collaborative 
                  filtering and content-based recommendation algorithms using machine learning techniques. 
                  Built scalable backend with user authentication, review system, and real-time recommendations. 
                  Achieved 85% user engagement rate and 4.7/5 recommendation accuracy.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Flask</span>
                </div>
                <div className="project-image">
                  <img src={breaktime} alt="BreakTime Project" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-container">
            <h2 className="section-title">Technical Expertise</h2>
            
            <div className="skills-category">
              <h3 className="skills-category-title">AI & Machine Learning</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <h4>Deep Learning Frameworks</h4>
                  <div className="skill-tags">
                    <span className="skill-tag expert">PyTorch</span>
                    <span className="skill-tag expert">TensorFlow</span>
                    <span className="skill-tag advanced">Keras</span>
                    <span className="skill-tag advanced">Hugging Face</span>
                  </div>
                </div>
                <div className="skill-card">
                  <h4>ML Specializations</h4>
                  <div className="skill-tags">
                    <span className="skill-tag expert">NLP</span>
                    <span className="skill-tag advanced">Computer Vision</span>
                    <span className="skill-tag advanced">Deep Learning</span>
                    <span className="skill-tag intermediate">Reinforcement Learning</span>
                  </div>
                </div>
                <div className="skill-card">
                  <h4>Data Science & Analytics</h4>
                  <div className="skill-tags">
                    <span className="skill-tag expert">Pandas</span>
                    <span className="skill-tag expert">NumPy</span>
                    <span className="skill-tag expert">Scikit-learn</span>
                    <span className="skill-tag advanced">Matplotlib</span>
                    <span className="skill-tag advanced">Plotly</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <h4>Primary Languages</h4>
                  <div className="skill-tags">
                    <span className="skill-tag expert">Python</span>
                    <span className="skill-tag expert">Java</span>
                    <span className="skill-tag expert">JavaScript</span>
                    <span className="skill-tag advanced">C/C++</span>
                  </div>
                </div>
                <div className="skill-card">
                  <h4>Additional Languages</h4>
                  <div className="skill-tags">
                    <span className="skill-tag advanced">C#</span>
                    <span className="skill-tag advanced">TypeScript</span>
                    <span className="skill-tag intermediate">R</span>
                    <span className="skill-tag intermediate">SQL</span>
                    <span className="skill-tag intermediate">HTML/CSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Development & Tools</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <h4>Web Development</h4>
                  <div className="skill-tags">
                    <span className="skill-tag expert">React</span>
                    <span className="skill-tag expert">Node.js</span>
                    <span className="skill-tag advanced">Express.js</span>
                    <span className="skill-tag advanced">Flask</span>
                    <span className="skill-tag advanced">FastAPI</span>
                  </div>
                </div>
                <div className="skill-card">
                  <h4>Databases & Cloud</h4>
                  <div className="skill-tags">
                    <span className="skill-tag expert">MySQL</span>
                    <span className="skill-tag advanced">PostgreSQL</span>
                    <span className="skill-tag advanced">MongoDB</span>
                    <span className="skill-tag advanced">AWS</span>
                  </div>
                </div>
                <div className="skill-card">
                  <h4>Development Tools</h4>
                  <div className="skill-tags">
                    <span className="skill-tag expert">Git/GitHub</span>
                    <span className="skill-tag expert">Linux/Unix</span>
                    <span className="skill-tag advanced">Docker</span>
                    <span className="skill-tag advanced">VS Code</span>
                    <span className="skill-tag intermediate">Jupyter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Let's Build Something Amazing Together!</h2>
              <p>As a Software Engineering student graduating in 2025 with strong technical skills and a passion for AI/ML, 
              I'm excited to contribute to innovative projects and grow with a forward-thinking team. 
              I'm actively seeking new opportunities in software engineering, 
              AI/ML engineering, and data science roles.</p>
              <div className="cta-buttons">
                <button className="primary-button" onClick={toggleSidebar}>
                  Contact Me
                </button>
                <button className="secondary-button" onClick={() => window.open('https://github.com/oneHalo')}>
                  View GitHub Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Backdrop overlay */}
      {isSidebarOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={toggleSidebar}
        />
      )}

      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
      >
        <ContactInfo />
        <button className="close-button" onClick={toggleSidebar}>
          ✕ Close
        </button>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Wahid Hoji Aminullah. Built with React, Node.js, and deployed on Vercel.</p>
          <div className="footer-links">
            <button onClick={() => window.open('https://www.linkedin.com/in/wahid-hoji')}>LinkedIn</button>
            <button onClick={() => window.open('https://github.com/oneHalo')}>GitHub</button>
          </div>
        </div>
      </footer>
      
      <Analytics />
    </div>
  );
}

export default NewHome;

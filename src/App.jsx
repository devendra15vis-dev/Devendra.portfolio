const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

const skillItems = [
  { short: '5', label: 'HTML', className: 'html' },
  { short: '3', label: 'CSS', className: 'css' },
  { short: 'JS', label: 'JavaScript', className: 'js' },
  { short: '⚛', label: 'React', className: 'react' },
  { short: 'Node', label: 'Node.js', className: 'node' },
  { short: 'PY', label: 'Python', className: 'py' },
  { short: 'G', label: 'Git', className: 'git' },
  { short: '◌', label: 'GitHub', className: 'github' },
];

const projectItems = [
  {
    title: 'BCA Resource Hub',
    desc: 'A modern study portal for BCA students with syllabus, notes, and PYQ resources in one place.',
    tags: ['React', 'Resources', 'UI'],
    tone: 'thumb-four',
    github: 'https://github.com/devendra15vis-dev/BCA-RESOURCES',
    live: 'https://bca-resources-sepia.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern portfolio website built with React and styled-components.',
    tags: ['React', 'CSS', 'JavaScript'],
    tone: 'thumb-portfolio',
    github: 'https://github.com/devendra15vis-dev/Portfolio-Website',
    live: 'https://devendraportfoliocom.vercel.app/',
  },


  {
    title: 'Rock Paper Scissors',
    desc: 'Fun game built using JavaScript with a clean UI and score tracking.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tone: 'thumb-three',
    github: 'https://github.com/devendra15vis-dev/Rock-Paper-Scissor-Game',
    live: 'https://rock-paper-scissor-game-gold.vercel.app/',
  },
];

const year = new Date().getFullYear();
const fallbackPortrait = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80';
const fallbackAbout = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80';

function ProfileImage({ src, alt, className }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(event) => {
        if (event.currentTarget.src !== fallbackPortrait) {
          event.currentTarget.src = fallbackPortrait;
        }
      }}
    />
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">DV</span>
          <span className="brand-name">Devendra</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a key={item} href={index === 0 ? '#home' : `#${item.toLowerCase()}`} className={index === 0 ? 'active' : ''}>
              {item}
            </a>
          ))}
        </nav>

        <button className="theme-toggle" aria-label="Toggle theme">
          ☾
        </button>
      </header>

      <main className="content-wrap">
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Hello, I’m</span>
            <h1>
              Devendra <span>Vishwakarma</span>
            </h1>
            <h2>Frontend  Developer | Backend & AI Enthusiast</h2>
            <p>
              I build modern, responsive web applications with a passion for clean code,
              smart problem solving, and learning new technologies.
            </p>

            <div className="cta-row">
              <a className="btn primary" href="#projects">
                View Projects <span>→</span>
              </a>
              <a className="btn secondary" href="/Resume.pdf" download="Devendra-Vishwakarma-Resume.pdf">
                Download Resume <span>↓</span>
              </a>
            </div>

            <div className="socials" aria-label="Social links">
              <a href="https://www.linkedin.com/in/devendra-vishwakarma-760482387/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://github.com/devendra15vis-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                gh
              </a>
              <a href="https://www.instagram.com/devendravishwakarma_208/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                ig
              </a>
              <a href="mailto:devendra15vis@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                @
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile image">
            <div className="portrait-ring">
              <ProfileImage
                src="/profile.jpg"
                alt="Devendra Vishwakarma portrait"
              />
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-photo">
            <ProfileImage
              src="/profile.jpg"
              alt="Devendra portrait"
            />
          </div>

          <div className="about-card">
            <h3>About Me</h3>
            <p>
              I’m Devendra Vishwakarma, a BCA student at ITM GORAKHPUR GIDA and an
              aspiring Frontend Developer &amp; AI Enthusiast. I love building web
              applications and exploring AI technologies.
            </p>

            <div className="profile-item-list">
              <div className="detail-item">
                <span>Name</span>
                <strong>Devendra Vishwakarma</strong>
              </div>
              <div className="detail-item">
                <span>Age</span>
                <strong>20</strong>
              </div>
              <div className="detail-item">
                <span>Location</span>
                <strong>Gorakhpur, India</strong>
              </div>
              <div className="detail-item">
                <span>Education</span>
                <strong>BCA (AKTU)</strong>
              </div>
              <div className="detail-item">
                <span>Interest</span>
                <strong>Web Development, AI, Programming</strong>
              </div>
              <div className="detail-item">
                <span>Email</span>
                <strong>devendra15vis@gmail.com</strong>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <strong>10+</strong>
                <span>Projects</span>
              </div>
              <div className="stat-box">
                <strong>5+</strong>
                <span>Technologies</span>
              </div>
              <div className="stat-box">
                <strong>2+</strong>
                <span>Years Learning</span>
              </div>
              <div className="stat-box">
                <strong>100+</strong>
                <span>Problems Solved</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <h3>My Skills</h3>
          <div className="skill-grid">
            {skillItems.map((skill) => (
              <div key={skill.label} className={`skill-item ${skill.className}`}>
                <span>{skill.short}</span>
                <small>{skill.label}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-heading">
            <h3>My Projects</h3>
            <a href="#projects" className="view-link">
              View All <span>→</span>
            </a>
          </div>

          <div className="project-grid">
            {projectItems.map((project) => (
              <article key={project.title} className="project-card">
                <div className={`thumb ${project.tone}`}>
                  <div className="mini-window w1"></div>
                  <div className="mini-window w2"></div>
                  <div className="mini-window w3"></div>
                </div>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.live || '#'} target={project.live && project.live.startsWith('http') ? '_blank' : undefined} rel={project.live && project.live.startsWith('http') ? 'noreferrer' : undefined}>Live Demo</a>
                  <a href={project.github || '#'} target={project.github && project.github.startsWith('http') ? '_blank' : undefined} rel={project.github && project.github.startsWith('http') ? 'noreferrer' : undefined}>GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-info">
            <h3>Contact Me</h3>

            <div className="contact-list">
              <div className="contact-item">
                <span>Email</span>
                <a href="mailto:devendra15vis@gmail.com">devendra15vis@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>Phone</span>
                <a href="tel:+916306341402">+91 6306341402</a>
              </div>
              <div className="contact-item">
                <span>Location</span>
                <strong>Gorakhpur, Uttar Pradesh, India</strong>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="field-row">
              <label>
                Your Name
                <input type="text" placeholder="Your Name" />
              </label>
              <label>
                Your Email
                <input type="email" placeholder="Your Email" />
              </label>
            </div>

            <label>
              Subject
              <input type="text" placeholder="Subject" />
            </label>

            <label>
              Your Message
              <textarea rows="5" placeholder="Your Message" />
            </label>

            <button type="submit" className="submit-btn">
              Send Message <span>→</span>
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {year} Devendra Vishwakarma. All rights reserved.</p>
        <div className="footer-right">
          <span>
             <strong></strong>  <strong></strong>
          </span>
        </div>
      </footer>
    </div>
  );
}

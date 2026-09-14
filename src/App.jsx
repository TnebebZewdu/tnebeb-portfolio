import { useEffect, useState } from "react";
import "./App.css";

const profileImage =
  "https://avatars.githubusercontent.com/u/238696691?s=400&u=0280d8494130dd67a5caac531992e00eb9ce79ea&v=4";

const projects = [
  {
    number: "01",
    title: "Restaurant Ordering System",
    category: "FULL-STACK SYSTEM",
    description:
      "A QR-based restaurant ordering system connecting customers, kitchen staff, and managers through one full-stack application.",
    longDescription:
      "A full-stack restaurant ordering system designed around the real restaurant workflow. Customers can scan a table QR code, browse the digital menu, add items to a cart, place orders, and track their status. Kitchen staff receive orders in real time, while the manager dashboard provides analytics and menu management.",
    technologies:
      "React · Vite · Node.js · Express · MySQL · Socket.IO",
    role: "FULL-STACK DEVELOPMENT",
    github:
      "https://github.com/TnebebZewdu/restaurant-ordering-system",
    images: [
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/restaurant-ordering-system/master/screenshots/home.png",
        label: "Home",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/restaurant-ordering-system/master/screenshots/menu-top.png",
        label: "Menu",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/restaurant-ordering-system/master/screenshots/menu-items.png",
        label: "Menu Items",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/restaurant-ordering-system/master/screenshots/cart.png",
        label: "Cart",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/restaurant-ordering-system/master/screenshots/order-tracking.png",
        label: "Order Tracking",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/restaurant-ordering-system/master/screenshots/kitchen.png",
        label: "Kitchen Display",
      },
    ],
  },
  {
    number: "02",
    title: "WabiSeminar",
    category: "TEAM PROJECT",
    description:
      "A collaborative seminar and meeting platform with meetings, participants, chat, notes, polls, files, and agenda tools.",
    longDescription:
      "WabiSeminar is a web-based seminar and meeting platform developed as a team project. My primary contribution focused on frontend development, including the meetings interface, meeting-room experience, participant controls, chat, notes, polls, files, agenda interfaces, navigation, and responsive usability.",
    technologies:
      "React · Vite · React Router · JavaScript · CSS",
    role: "FRONTEND DEVELOPER",
    github: "https://github.com/TnebebZewdu/WabiSeminar",
    images: [
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/WabiSeminar/frontend-ui/screenshots/landing.png",
        label: "Landing Page",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/WabiSeminar/frontend-ui/screenshots/dashboard.png",
        label: "Dashboard",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/WabiSeminar/frontend-ui/screenshots/meeting-room.png",
        label: "Meeting Room",
      },
      {
        src: "https://raw.githubusercontent.com/TnebebZewdu/WabiSeminar/frontend-ui/screenshots/meeting-room-tools.png",
        label: "Meeting Room Tools",
      },
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (selectedProject) {
          closeProject();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject, selectedImage]);

  return (
    <div className="portfolio">
      <header className="navbar">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          TNEBEB
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>

          <span className="menu-lines">
            <i></i>
            <i></i>
          </span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("about")}>ABOUT</button>
          <button onClick={() => scrollToSection("skills")}>SKILLS</button>
          <button onClick={() => scrollToSection("work")}>WORK</button>
          <button onClick={() => scrollToSection("education")}>
            EDUCATION
          </button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-top">
            <span>SOFTWARE ENGINEERING · FULL-STACK DEVELOPMENT</span>
            <span>BASED IN ETHIOPIA</span>
          </div>

          <div className="hero-content">
            <div className="hero-label">PORTFOLIO / 2026</div>

            <h1>
              TNEBEB
              <span>ZEWDU</span>
            </h1>

            <div className="hero-bottom">
              <p>
                Software Engineering student building thoughtful digital
                experiences, practical systems, and full-stack applications.
              </p>

              <button
                className="circle-button"
                onClick={() => scrollToSection("work")}
                aria-label="View selected work"
              >
                <span>VIEW</span>
                <span>WORK</span>
                <strong>↘</strong>
              </button>
            </div>
          </div>

          <div className="hero-footer">
            <span>01 — HOME</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <span>02</span>
            <p>ABOUT ME</p>
          </div>

          <div className="about-grid">
            <div className="about-visual">
              <div className="about-photo-wrapper">
                <img
                  src={profileImage}
                  alt="Tnebeb Zewdu"
                  className="about-photo"
                />
              </div>

              <span className="about-photo-label">TNEBEB / 2026</span>
            </div>

            <div className="about-copy">
              <h2>
                I BUILD WITH
                <br />
                <em>CURIOSITY</em>
                <br />
                & PURPOSE.
              </h2>

              <p className="large-copy">
                I am a Software Engineering student with a growing passion
                for creating useful, well-structured digital products.
              </p>

              <p>
                My journey has taken me from learning the fundamentals of web
                development to building complete systems with frontend,
                backend, and database technologies.
              </p>

              <p>
                I enjoy turning ideas into working applications and learning
                something new with every project. I am currently focused on
                strengthening my full-stack development skills and preparing
                for professional opportunities.
              </p>

              <div className="about-meta">
                <div>
                  <span>FOCUS</span>
                  <strong>FULL-STACK DEVELOPMENT</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>SOFTWARE ENGINEERING STUDENT</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <span>03</span>
            <p>CAPABILITIES</p>
          </div>

          <div className="skills-intro">
            <h2>
              WHAT I
              <br />
              <em>WORK WITH.</em>
            </h2>

            <p>
              Technologies and tools I use while learning, building projects,
              and developing my software engineering foundation.
            </p>
          </div>

          <div className="skills-list">
            <div className="skill-row">
              <span>01</span>
              <h3>Frontend</h3>
              <p>HTML · CSS · JavaScript · React</p>
            </div>

            <div className="skill-row">
              <span>02</span>
              <h3>Backend</h3>
              <p>Node.js · Express.js · REST APIs</p>
            </div>

            <div className="skill-row">
              <span>03</span>
              <h3>Database</h3>
              <p>MySQL · Database Design</p>
            </div>

            <div className="skill-row">
              <span>04</span>
              <h3>Tools</h3>
              <p>Git · GitHub · VS Code · XAMPP</p>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading">
            <span>04</span>
            <p>SELECTED WORK</p>
          </div>

          <div className="work-intro">
            <h2>
              THINGS I'VE
              <br />
              <em>BUILT.</em>
            </h2>

            <p>
              A selection of real projects showing my experience with
              frontend development, backend systems, databases, real-time
              communication, and collaborative software development.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className="project-card project-card-clickable"
                key={project.number}
                onClick={() => openProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
              >
                <div className="project-preview">
                  <img
                    src={project.images[0].src}
                    alt={`${project.title} preview`}
                  />
                </div>

                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <small>{project.technologies}</small>
                </div>

                <button
                  className="project-arrow"
                  aria-label={`View ${project.title}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    openProject(project);
                  }}
                >
                  ↗
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="education section" id="education">
          <div className="section-heading">
            <span>05</span>
            <p>EDUCATION & LEARNING</p>
          </div>

          <div className="education-grid">
            <div>
              <span className="eyebrow">EDUCATION</span>

              <h2>
                SOFTWARE
                <br />
                <em>ENGINEERING.</em>
              </h2>
            </div>

            <div className="education-info">
              <div className="education-item">
                <span>01</span>

                <div>
                  <h3>B.Sc. Software Engineering</h3>
                  <p>Dire Dawa University</p>
                  <small>UNDERGRADUATE STUDIES</small>
                </div>
              </div>

              <div className="education-item">
                <span>02</span>

                <div>
                  <h3>Full-Stack Development</h3>
                  <p>Online Full-Stack Course</p>
                  <small>COMPLETED</small>
                </div>
              </div>

              <div className="education-item">
                <span>03</span>

                <div>
                  <h3>Continuous Learning</h3>
                  <p>Web Development · Python · Software Engineering</p>
                  <small>ONGOING</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-box">
              <div>
                <span className="section-number">06 / CONTACT</span>

                <h2 className="contact-title">
                  LET'S BUILD
                  <br />
                  SOMETHING <em>GOOD.</em>
                </h2>

                <p className="contact-text">
                  I’m open to internship opportunities, collaborations, and
                  interesting software projects. If you’d like to connect,
                  feel free to reach out.
                </p>
              </div>

              <div className="contact-details">
                <span className="contact-label">EMAIL</span>

                <a
                  href="mailto:ztnebeb@gmail.com"
                  className="contact-email"
                >
                  ztnebeb@gmail.com ↗
                </a>

                <span className="contact-label">GITHUB</span>

                <a
                  href="https://github.com/TnebebZewdu"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-github"
                >
                  github.com/TnebebZewdu ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>TNEBEB ZEWDU</strong>
          <span>SOFTWARE ENGINEERING · 2026</span>
        </div>

        <button onClick={() => scrollToSection("home")}>
          BACK TO TOP ↑
        </button>
      </footer>

      {selectedProject && (
        <div className="project-modal" role="dialog" aria-modal="true">
          <div
            className="project-modal-backdrop"
            onClick={closeProject}
          ></div>

          <div className="project-modal-content">
            <button
              className="project-modal-close"
              onClick={closeProject}
              aria-label="Close project"
            >
              ×
            </button>

            <div className="project-modal-header">
              <div>
                <span className="project-modal-number">
                  {selectedProject.number} / {selectedProject.category}
                </span>

                <h2>{selectedProject.title}</h2>
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="project-github-button"
              >
                VIEW GITHUB ↗
              </a>
            </div>

            <div className="project-modal-body">
              <div className="project-modal-info">
                <div>
                  <span>ABOUT</span>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div>
                  <span>ROLE</span>
                  <p>{selectedProject.role}</p>
                </div>

                <div>
                  <span>TECHNOLOGIES</span>
                  <p>{selectedProject.technologies}</p>
                </div>
              </div>

              <div className="project-gallery">
                {selectedProject.images.map((image) => (
                  <button
                    className="project-gallery-item"
                    key={image.src}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image.src} alt={image.label} />
                    <span>{image.label} ↗</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="image-lightbox">
          <button
            className="image-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="image-lightbox-backdrop"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          ></button>

          <div className="image-lightbox-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
            />

            <span>{selectedImage.label}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

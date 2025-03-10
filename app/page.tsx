"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillDiscord,
} from "react-icons/ai";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { TbBrandOpenai } from "react-icons/tb";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import Image from "next/image";
import profile from "../public/image.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Project {
  img: StaticImageData;
  link: string;
  title: string;
}

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const Navigation: React.FC<NavigationProps> = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }) => (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <h1 className="text-lg font-burtons">DevelopedByIshu</h1>
      
      <button 
        className="lg:hidden text-xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      <ul className="hidden lg:flex items-center space-x-4">
        <li>
          <a
            href="#projects"
            data-menuanchor="projects"
            className="nav-button"
          >
            <span>PROJECTS</span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            data-menuanchor="skills"
            className="nav-button"
          >
            <span>SKILLS</span>
          </a>
        </li>
        <li>
          <a
            className="nav-button"
            href="https://github.com/Allmight-456/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GITHUB</span>
          </a>
        </li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            <BsFillMoonStarsFill className="text-2xl" />
          </button>
        </li>
      </ul>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:hidden fixed top-[3.5rem] right-0 left-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-b-lg py-4 px-4 flex-col space-y-4 z-50`}>
        <a
          href="#projects"
          data-menuanchor="projects"
          className="nav-button w-full"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>PROJECTS</span>
        </a>
        <a
          href="#skills"
          data-menuanchor="skills"
          className="nav-button w-full"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>SKILLS</span>
        </a>
        <a
          className="nav-button w-full"
          href="https://github.com/Allmight-456/Resume"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>RESUME</span>
        </a>
        <div className="flex justify-center">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMobileMenuOpen(false);
            }}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            <BsFillMoonStarsFill className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );

  const projects: Project[] = [
    { img: web7, link: "https://repomaster.vercel.app", title: "Repo Master - READMEs Generator" },
    { img: web8, link: "https://proposalgenerator.streamlit.app", title: "Marketing Research Proposal Generator AI" },
    { img: web9, link: "https://github.com/Allmight-456/PDFSage.git", title: "PDFSage - PDF Chatbot" },
    { img: web1, link: "https://anime-haven-react.netlify.app/", title: "Anime Haven" },
    { img: web2, link: "https://github.com/Allmight-456/Go_Ticket_booking_app", title: "Ticket Booking App" },
    { img: web3, link: "https://ad-astra-landing-page.vercel.app/", title: "Ad Astra Landing Page" },
    { img: web4, link: "https://github.com/Allmight-456", title: "GitHub Projects" },
    { img: web5, link: "https://dashboard-ui-shadcn.netlify.app/", title: "Dashboard UI" },
    { img: web6, link: "https://github.com/Allmight-456/Express_Contact_app", title: "Contact App" }
  ];

  const pageTransition = {
    initial: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3
      }
    },
    exit: { 
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  // Detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Ishan Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="scroll-smooth">
        <motion.section 
          id="home" 
          className="min-h-screen bg-[#fff8e6] dark:bg-black py-20"
          initial={isMobile ? undefined : "initial"}
          whileInView={isMobile ? undefined : "animate"}
          exit={isMobile ? undefined : "exit"}
          variants={isMobile ? undefined : pageTransition}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="landing-section px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto pt-20">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-b from-teal-500 flex items-center justify-center overflow-hidden">
                  <Image
                    alt="profile"
                    src={profile}
                    className="object-cover rounded-full"
                    priority
                    fill
                    sizes="(max-width: 640px) 16rem, 20rem"
                  />
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium">
                Ishan Kumar
              </h2>
              <h3 className="text-xl sm:text-2xl py-2 text-gray-500 dark:text-gray-400">
                Web Developer
              </h3>
              <h3 className="text-xl sm:text-2xl py-2  dark:text-teal-300">Developer / Programmer</h3>
              <p className="text-md font-burtons py-5 leading-8 text-gray-800 dark:text-teal-300 max-w-2xl mx-auto px-4">
                Turning ideas into elegant solutions - crafting digital experiences that make a difference.
              </p>
              <div className="social-icons">
                <a href="https://x.com/kuma10296" target="_blank" rel="noopener noreferrer">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://www.linkedin.com/in/ishan-singh-bhardwaj" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/Allmight-456" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
                <a href="https://discord.gg/RjKVyvfpkN" target="_blank" rel="noopener noreferrer">
                  <AiFillDiscord />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="skills" 
          className="min-h-screen bg-[#f5ead0] dark:bg-black py-20"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageTransition}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="skills-section px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-4 sm:my-10 dark:bg-black dark:text-gray-200 flex-1 skill-card">
                  <div className="flex justify-center">
                    <div className="text-5xl text-teal-600 dark:text-teal-400">
                      <MdOutlineDesignServices />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                    Frontend Stacks and Frameworks
                  </h3>
                  <p className="py-2 font-burtons">
                    Creating elegant designs suited for your needs following core
                    design theory.
                  </p>
                  <h4 className="py-4 text-teal-600">React </h4>
                  <p className="text-teal-600 py-1">Next JS </p>
                  <p className="text-teal-600 py-1">TypeScript</p>
                  <p className="text-teal-600 py-1">Figma</p>
                  <p className="text-teal-600 py-1">ShadCN UI</p>
                </div>

                <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-4 sm:my-10 dark:bg-black dark:text-gray-200 flex-1 skill-card">
                  <div className="flex justify-center">
                    <div className="text-5xl text-teal-600 dark:text-teal-400">
                      <FaServer />
                    </div>
                  </div>
                  <h3 className="text-lg font-burtons font-medium pt-8 pb-2">
                    Backend, Databases and APIs
                  </h3>
                  <p className="py-2 font-burtons">
                    Developing reliable, performant and scalable backend services.
                  </p>
                  <h4 className="py-4 text-teal-600">Node JS</h4>
                  <p className="text-teal-600 py-1">Express</p>
                  <p className="text-teal-600 py-1">Go </p>
                  <p className="text-teal-600 py-1">PostgreSQL</p>
                  <p className="text-teal-600 py-1">MongoDB</p>
                </div>

                <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-4 sm:my-10 dark:bg-black dark:text-gray-200 flex-1 skill-card">
                  <div className="flex justify-center">
                    <div className="text-5xl text-teal-600 dark:text-teal-400">
                      <BiCodeAlt />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                    DevOps and Testing
                  </h3>
                  <p className="py-2 font-burtons">
                    Using Version Control, Containerization, CI/CD and Testing
                  </p>
                  <h4 className="py-4 text-teal-600">Docker</h4>
                  <p className="text-teal-600 py-1">Git</p>
                  <p className="text-teal-600 py-1">Linux</p>
                  <p className="text-teal-600 py-1">Selenium</p>
                  <p className="text-teal-600 py-1">Jira</p>
                </div>

                <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-4 sm:my-10 dark:bg-black dark:text-gray-200 flex-1 skill-card">
                  <div className="flex justify-center">
                    <div className="text-5xl text-teal-600 dark:text-teal-400">
                      <TbBrandOpenai />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                    AI/ML Development
                  </h3>
                  <p className="py-2 font-burtons">
                    Building intelligent applications with modern AI technologies and APIs
                  </p>
                  <h4 className="py-4 text-teal-600">LLM Integration</h4>
                  <p className="text-teal-600 py-1">LangChain</p>
                  <p className="text-teal-600 py-1">Prompt Engineering</p>
                  <p className="text-teal-600 py-1">AI Agents</p>
                  <p className="text-teal-600 py-1">RAG Systems</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="min-h-screen bg-[#f7eedb] dark:bg-black py-20"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageTransition}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="projects-section px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-12">
                <h2 className="text-3xl py-2 text-teal-600 dark:text-teal-400 font-medium font-burtons">
                  PROJECT GALLERY
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                  <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
                    <Image
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      src={project.img}
                      width={500}
                      height={300}
                    />
                    <div className="project-overlay">
                      <h3 className="text-white text-xl font-burtons">{project.title}</h3>
                      <p className="text-gray-200 mt-2">Click to view project</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

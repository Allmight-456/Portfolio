"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillDiscord,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/image.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // Add this useEffect to handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Head>
        <title>Ishan Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10  dark:bg-gradient-to-b dark:from-gray-600 dark:to-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
            <h1 className="text-xl font-burtons">DevelopedByIshu</h1>
            <ul className="flex items-center space-x-6">
              <li>
                <a
                  href="#projects"
                  className="font-burtons text-md bg-gradient-to-r  text-white from-cyan-500 to-teal-500 py-2 px-2  rounded-md"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="font-burtons text-md bg-gradient-to-r  text-white from-cyan-500 to-teal-500 py-2 px-2  rounded-md"
                >
                  SKILLS
                </a>
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white  py-2 px-2 rounded-md"
                  href="https://github.com/Allmight-456/Resume"
                >
                  RESUME
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl "
                />
              </li>
            </ul>
          </nav>

          <div className="text-center ">
            <div className="flex justify-center">
              <div className="relative mx-auto w-80 h-80 rounded-full bg-gradient-to-b from-teal-500 flex items-center ">
                <Image
                  alt="profile"
                  src={profile}
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium">
              Ishan Kumar
            </h2>
            <h3 className="text-2xl py-2 text-gray-500 dark:text-gray-400">
              Web Developer
            </h3>{" "}
            <h3 className="text-2xl py-2">Developer / Programmer </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-teal-300">
              Developer with expertise in building modern web applications{" "}
              <br /> using the MERN stack, Next.js, Python and PostgreSQL.
            </p>
            <div className="text-5xl flex justify-center space-x-16 ">
              <a href="https://x.com/kuma10296">
                <AiFillTwitterCircle />
              </a>
              <a href="www.linkedin.com/in/ishan-singh-bhardwaj">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Allmight-456">
                <AiFillGithub />
              </a>
              <a href="https://discord.gg/RjKVyvfpkN">
                <AiFillDiscord />
              </a>
            </div>
          </div>
        </section>

        {/* Technologies and frameworks */}
        <section
          id="skills"
          className="relative grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <div className="  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-gray-200 flex-1">
            <div className="flex justify-center">
              <Image src={design} width={100} height={100} alt="design" />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 font-burtons ">
              Frontend Stacks and frameworks
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
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:text-gray-200 flex-1">
            <div className="flex justify-center">
              <Image alt="code" src={code} width={100} height={100} />
            </div>
            <h3 className="text-lg font-burtons font-medium pt-8 pb-2 ">
              Backend , Databases and APIs
            </h3>
            <p className="py-2 font-burtons">
              Developing reliable, performant and scalable backend services.
            </p>
            <h4 className="py-4 text-teal-600">Node JS</h4>
            <p className=" text-teal-600  py-1">Express</p>
            <p className=" text-teal-600  py-1">Go </p>
            <p className=" text-teal-600 py-1">PostgreSQL</p>
            <p className=" text-teal-600  py-1">MongoDB</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:text-gray-200 flex-1">
            <div className="flex justify-center">
              <Image
                alt="consulting"
                src={consulting}
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
              DevOps and Testing
            </h3>
            <p className="py-2 font-burtons">
              Using Version Control ,Containerization , CI/CD and Testing
            </p>
            <h4 className="py-4 text-teal-600">Docker</h4>
            <p className=" text-teal-600  py-1">Git</p>
            <p className=" text-teal-600  py-1">Linux</p>
            <p className=" text-teal-600  py-1">Selenium</p>
            <p className=" text-teal-600  py-1">Jira</p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-10" id="projects">
          <div className="flex justify-center">
            <h2 className="text-3xl py-2 text-teal-600 dark:text-teal-400 font-medium font-burtons">
              PROJECT GALLERY
            </h2>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://anime-haven-react.netlify.app/">
                <Image
                  alt="web image"
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={web1}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Allmight-456/Go_Ticket_booking_app">
                <Image
                  alt="web image"
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={web2}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://ad-astra-landing-page.vercel.app/">
                <Image
                  alt="web image"
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={web3}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Allmight-456">
                <Image
                  alt="web image"
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={web4}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://dashboard-ui-shadcn.netlify.app/">
                <Image
                  alt="web image"
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={web5}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Allmight-456/Express_Contact_app">
                <Image
                  alt="web image"
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={web6}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

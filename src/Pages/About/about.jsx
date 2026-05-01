import React from "react";
import Footer from "../../Component/Footer/footer";
import shubhi from "../../assets/images/shubhii.jpeg";
import Gradient from "../../Component/Gradient/gradient";
import { faGraduationCap, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="flex w-full min-w-0 flex-1 flex-col">
      <div className="flex-1">
        <div className="mb-12">
          <h1 className="mt-4 flex justify-center text-4xl font-bold text-purple-500 dark:text-purple-400">
            About Me
          </h1>
          <Gradient width="w-24" height="h-1" margin="mx-auto" />
        </div>
        <div className="flex md:flex-row rounded-md m-4 p-4 mx-auto justify-center items-center flex-col-reverse">
          <div className="rounded-md max-w-[800px]">
            <p className="md:text-lg text-base text-gray-800 dark:text-white">
              I’m a Full Stack Developer with a strong focus on frontend
              engineering, specializing in performance, responsiveness, and user
              experience. I’ve built and scaled real-world applications,
              including SaaS platforms, dashboards, and AI-driven tools, working
              with clients and teams to build solutions for real-world needs.
              <br />
            </p>
            <br />
            <p className="text-lg text-gray-800 dark:text-white">
              <b className="md:text-3xl text-3xl">What I've Built</b>
              <br /><br/>
             <ul style={{ listStyleType: "disc", paddingLeft: "20px"}}>
             <li className="pt-3">Developed scalable admin dashboards with complex state management and interactive data visualizations</li>
             <li className="pt-3">Integrated 20+ REST APIs for data fetching, state management, and UI rendering in React applications.</li>
             <li className="pt-3">Converted Figma designs into responsive, pixel-perfect UI components</li>
             <li className="pt-3">Implemented search, filtering, and sorting to improve data accessibility and user experience</li>
             <li className="pt-3">Built role-based access control systems for managing user permissions and views</li>
             <li className="pt-3 pb-4">Automated content workflows using n8n, including scraping trending data and scheduling posts to improve consistency and engagement</li>
             </ul>
            </p>
            <div className="mt-4 flex items-center gap-1">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="rounded-full bg-gray-100 p-2 text-sm text-purple-600 dark:bg-zinc-800 dark:text-purple-400"
              />
              <a
                href="mailto:shubhibajpai51@gmail.com"
                className="text-sm text-purple-600 hover:font-bold hover:text-md dark:text-purple-400"
              >
                Send me a message
              </a>
            </div>
          </div>

          <div className="rounded-md m-4 p-4 max-w-[500px]">
            <img
              src={shubhi}
              alt="Shubhi Bajpai"
              className="object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mx-auto mb-12">
          <div className="rounded-md max-w-[600px]">
            <div className="flex items-center gap-2 mx-6">
              <FontAwesomeIcon
                icon={faSuitcase}
                className="rounded-full border border-purple-500 bg-gray-100 p-2  md:text-2xl text-xl text-purple-600 dark:bg-zinc-800 dark:text-purple-400"
              />
              <h1 className="text-3xl md:text-4xl font-bold text-purple-500 dark:text-purple-400">
                Experience
              </h1>
            </div>
            <Gradient width="w-24" height="h-1" margin="mx-18" />
            <a
              href="https://radiansys.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative m-4 rounded-lg border border-gray-900 bg-black p-6 md:p-8 text-white dark:border-gray-800 dark:bg-zinc-900 dark:text-white transform transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-lg dark:hover:shadow-purple-900/30">
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-center gap-2">
                  <span className="text-violet-400 text-sm font-semibold">
                    July 2025 - Present
                  </span>
                  <div className="h-3 w-3 flex relative">
                    <div className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping"></div>
                    <div className="relative rounded-full h-3 w-3 bg-purple-500 dark:bg-purple-400"></div>
                  </div>
                </div>

                <h1 className="md:text-2xl text-xl md:font-bold font-semibold text-white dark:text-purple-400 py-2">
                  Radiansys Technologies, Gurugram
                </h1>
                <p className="text-lg text-white dark:text-gray-200">
                  Software Engineer
                </p>
              </div>
            </a>
            <a
              href="https://celebaltech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative m-4 rounded-lg border border-gray-900 bg-black p-8 text-white dark:border-gray-800 dark:bg-zinc-900 dark:text-white transform transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-lg dark:hover:shadow-purple-900/30">
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="text-violet-400 text-sm font-semibold">
                  June 2024 - August 2024
                </span>
                <h1 className="md:text-2xl text-xl md:font-bold font-semibold text-white dark:text-purple-400 py-2">
                  Celebal Technologies
                </h1>
                <p className="text-lg text-white dark:text-gray-200">
                  SQL Developer Intern
                </p>
              </div>
            </a>
          </div>

          <div className="rounded-md max-w-[600px]">
            <div className="flex items-center gap-2 mx-6">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="rounded-full border border-purple-500 bg-gray-100 p-2 md:text-2xl text-xl text-purple-600 dark:bg-zinc-800 dark:text-purple-400"
              />
              <h1 className="font-bold text-purple-500 dark:text-purple-400 text-3xl md:text-4xl ">
                Education
              </h1>
            </div>
            <Gradient width="w-24" height="h-1" margin="mx-18" />
            <a
              href="https://invertisuniversity.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative m-4 rounded-lg border border-gray-900 bg-black p-8 text-white dark:border-gray-800 dark:bg-zinc-900 dark:text-white transform transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-lg dark:hover:shadow-purple-900/30">
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="text-violet-400 text-sm font-semibold">
                  2023-2025
                </span>
                <h1 className="text-2xl font-bold text-white dark:text-purple-400 py-2">
                  MCA
                </h1>
                <span className="text-lg text-white dark:text-gray-200">
                  Invertis University,Bareilly
                </span>
              </div>
            </a>
            <a
              href="https://kcmteducation.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative m-4 rounded-lg border border-gray-900 bg-black p-8 text-white dark:border-gray-800 dark:bg-zinc-900 dark:text-white transform transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-lg dark:hover:shadow-purple-900/30">
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="text-violet-400 text-sm font-semibold">
                  2020-2023
                </span>
                <h1 className="text-2xl font-bold text-white dark:text-purple-400 py-2">
                  BCA
                </h1>
                <span className="text-lg text-white dark:text-gray-200">
                  Khandelwal college of management and technology, ,Bareilly
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;

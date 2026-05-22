import React from "react";
import Footer from "../../Component/Footer/footer";
import shubhi from "../../assets/images/shubhii.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
// import SkillParticles from "../../Component/skillsParticles/skillspart";

const Home = () => {
  const commonClasses = `
  border-1 border-purple-600 
  hover:border-2  
  text-purple-600 
  transition-all duration-300
  hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-100 
  hover:text-black
  dark:border-purple-500 dark:text-purple-500 
  dark:hover:bg-zinc-900 dark:hover:text-black
  dark:hover:shadow-lg dark:hover:shadow-purple-900
`;
  return (
    <div className="flex w-full min-w-0 max-w-full flex-1 flex-col overflow-x-hidden">
      <div className="mx-auto box-border flex w-full min-w-0 max-w-7xl flex-1 flex-col items-stretch gap-6 py-6 sm:py-8 md:flex-row md:items-center md:justify-center md:gap-8 px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            className="box-border w-full min-w-0 max-w-[600px] md:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="box-border w-full min-h-0 max-w-full md:mx-8 md:max-w-[500px] md:h-[500px]">
              <h1 className="text-balance md:text-5xl font-bold text-purple-500 text-4xl dark:text-purple-400">
                Hello, I&apos;m Shubhi Bajpai
              </h1>
              <p className="pt-4 text-2xl  font-bold text-gray-900 sm:text-xl md:text-2xl dark:text-white">
                I am a Web developer
              </p>
              <p className="mt-3 text-pretty text-base text-gray-700 sm:text-lg md:text-xl dark:text-gray-300">
  
                I develop fast, scalable web applications and craft seamless user experiences using modern technologies. Focused on writing clean code and solving real-world problems.
              </p><br/>
              <h1 className="text-lg font-bold text-gray-900 sm:text-xl md:text- dark:text-white">React • Next.js • Node.js • MongoDB • Tailwind CSS • REST APIs</h1>
              <div className="mt-6 pt-4 flex w-full flex-col md:flex-row items-center justify-center gap-3 md:gap-4 md:justify-start">
                <a 
                 href="https://drive.google.com/file/d/1A-pSp2ezTI43CnfP1NvsvBY2DJhfTFjO/view?usp=sharing"
                  type="button"
                  className={`rounded-4xl md:px-16 py-3 md:text-base font-bold md:font-semibold px-12 text-lg ${commonClasses} `}
                >
                  Download CV
                </a>
                <div className="flex items-center justify-center gap-3 md:gap-4 md:justify-start pt-2">
                <a
                  href="https://www.linkedin.com/in/shubhibajpai51/"
                  className={`rounded-full px-3 py-3 ${commonClasses}`}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                </a>

                <a
                  href="https://github.com/Shubhibajpai"
                  className={`rounded-full px-3 py-3 ${commonClasses}`}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </a>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex">
            <motion.div
              className="aspect-square w-full max-w-[min(100%,400px)] overflow-hidden rounded-full"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                alt="Shubhi Bajpai"
                src={shubhi}
                className="h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      <Footer />
    </div>
  );
};
export default Home;

import React from "react";
import Footer from "../../Component/Footer/footer";
import jsimg from "../../assets/images/jsimg.jpg";
import tailwindimg from "../../assets/images/tailwindcss.png";
import muiimg from "../../assets/images/mui.jpg";
import htmlimg from "../../assets/images/html.png";
import cssimg from "../../assets/images/css.png";
import bootstrapimg from "../../assets/images/bootstrap.png";
import figmaimg from "../../assets/images/figma.png";
import mongodbimg from "../../assets/images/mongo.png";
import mysqlimg from "../../assets/images/sql.png";
import nodejsimg from "../../assets/images/nodejs.png";
import expressimg from "../../assets/images/express.png";
import n8nimg from "../../assets/images/n8n.png";
import Gradient from "../../Component/Gradient/gradient";
import SkillCard from "../../Component/SkillCard/skillcard";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faTailwindCss,
  faFigma,
  faNodeJs,
  faGithub,
  faOpenai,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="flex w-full min-w-0 flex-1 flex-col">
    <div className="flex-1">
      <div>
        <h1 className=" mt-6 flex justify-center text-4xl font-bold text-purple-500 dark:text-purple-400">
          Skills
        </h1>
        <Gradient width="w-14" height="h-1" margin="mx-auto"/>
        <p className="text-black dark:text-white md:text-lg justify-center text-center p-6 sm:text-base mx-auto max-w-4xl">
          Transforming ideas into scalable digital solutions using modern
          technologies. These are the tools
           I use to build fast, responsive, and user-focused applications.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 pb-8 md:grid-cols-4 md:gap-4">
        <SkillCard icon={faReact} 
        color="rgb(0, 255, 255)" 
        title="React.js" 
        className="
hover:bg-[radial-gradient(circle_at_50%_32%,rgba(0,255,255,0.25),transparent_55%)]"/>
        <SkillCard
          icon={faN}
          title="Next.js"
          className=" 
hover:bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.25),transparent_55%)]"
        />
        <SkillCard
          icon={faJs}
          color="#F7DF1E"
          className=" hover:bg-[radial-gradient(circle_at_50%_32%,rgba(250,204,21,0.18),transparent_60%)]"
          title="JavaScript"
        />
        <SkillCard icon={faHtml5} color="orange" title="HTML5"
        className="hover:bg-[radial-gradient(rgba(251,176,52,0.25),transparent_55%)]" />
        <SkillCard icon={faCss3Alt} color="skyblue" title="CSS3"
        className="hover:bg-[radial-gradient(circle_at_50%_32%,rgba(51,168,255,0.25),transparent_55%)]" />
        <SkillCard icon={faBootstrap} color="#7C3AED" title="Bootstrap"
        className="hover:bg-[radial-gradient(circle_at_60%_32%,rgba(92,69,139,0.45),transparent_55%)]" />
        <SkillCard icon={faTailwindCss} color="#38BDF8" title="Tailwind CSS"
        className="hover:bg-[radial-gradient(circle_at_50%_32%,rgba(56,213,240,0.25),transparent_55%)]" />
        <SkillCard
          icon={faFigma}
          color="pink"
          title="Figma"
          className="hover:bg-[radial-gradient(circle_at_50%_32%,rgba(242,78,245,0.28),rgba(255,141,0,0.12),rgba(162,89,255,0.15),transparent_59%)]"
        />
        <SkillCard icon={faNodeJs} color="#8CC84B" title="Node.js"
        className="hover:bg-[radial-gradient(circle_at_50%_32%,rgba(140,200,75,0.25),transparent_55%)]" />
        <SkillCard icon={faGithub} color="#white" title="GitHub"
        className="hover:bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.25),transparent_55%)]" />
        <SkillCard icon={faOpenai} title="OpenAI"
        className="hover:bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.25),transparent_55%)]" />
        <SkillCard icon={faWordpress} color="#38BDF8" title="WordPress" 
        className="hover:bg-[radial-gradient(circle_at_50%_32%,rgba(30,139,195,0.25),transparent_55%)]"/>
      </div>
    </div>
      <Footer />
    </div>
  );
};
export default Skills;

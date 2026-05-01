import React from "react";
import Footer from "../../Component/Footer/footer";
import finger from "../../assets/images/Finger.png";
import movie from "../../assets/images/movie.png";
import job from "../../assets/images/job.png";
import elearning from "../../assets/images/elearning.png";
import travel from "../../assets/images/Travel.png";
import event from "../../assets/images/Event.png";
import Gradient from "../../Component/Gradient/gradient";
import ProjectCard from "../../Component/ProjectCard/projectcard";

const Projects = () => {
  return (
    <div className="flex w-full min-w-0 flex-1 flex-col">
    <div className="flex-1">
      <div>
        <h1 className="mt-4 flex justify-center pt-4 text-4xl font-bold text-purple-500 dark:text-purple-400">
          Projects
        </h1>
        <Gradient width="w-24" height="h-1" margin="mx-auto"/>
      </div>
      <p className="text-black dark:text-white md:text-lg sm:text-base justify-center text-center p-4 ">Building scalable, high-performance applications with modern web technologies.</p>
      <div className="mx-auto grid max-w-7xl  gap-6 px-4  lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-4 items-start justify-items-center pb-8">
      <ProjectCard  
      image={finger}
      imgalt="finger & finger lawfirm"
      title="Evict Faster"
      description="Finger and Finger Law Firm is a multi-role, multi-law firm platform
            built with React.js, Tailwind CSS, Redux, and MUI for a seamless and
            responsive user experience. The platform supports multiple user
            roles, allowing various law firms to efficiently manage their
            operations. The marketing website, developed using Next.js, offers a
            fast and optimized interface, while React Query handles smooth API
            integration for dynamic content management and real-time updates."
      />
      <ProjectCard
       image={movie}
       imgalt="movie cinema ticket booking system"
       title="Movie Cinema Ticket Booking System"
       description="The Movie Cinema Ticket Booking System is a web application that
            simplifies online ticket booking, built using HTML, CSS, JavaScript,
            and Java with JSP and Servlets for backend processing. It securely
            stores data in MySQL, allowing users to browse movies, select
            showtimes, and make bookings, while admins can manage movies and
            schedules via a dashboard."
      />
      <ProjectCard
       image={travel}
       imgalt="travel management system"
       title="Travel Management System"
       description="The travel management website, built using JSP and Servlets, enables
            users to explore destinations, book travel, and check charges. It
            includes features like user authentication, account management, and
            an admin dashboard for monitoring earnings and user activity, with
            data securely stored in MySQL for efficient processing."
      />
      <ProjectCard
       image={elearning}
       imgalt="e-learning webapp"
       title="E-learning Webapp"
       description="The E-Learning Web Application is a full-stack platform built with
            the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide
            an interactive online education experience. It allows instructors to
            manage courses and students to track progress, with features like
            user authentication, personalized dashboards, and real-time updates.
            The app ensures efficient data handling and a responsive, dynamic
            frontend."
      />
      <ProjectCard
       image={job}
       imgalt="online job portal"
       title="Online job portal"
       description="The Online Job Portal is a web-based application that connects job
            seekers with employers, allowing users to browse, search, and apply
            for jobs. It features secure authentication, resume uploading, and
            an admin dashboard for efficient management of users and job
            postings. The platform ensures a user-friendly experience with
            responsive design and robust functionality."
      />
      <ProjectCard
        image={event}
        imgalt="event management system"
        title="Event Management System"
        description="The Event Management System is a dynamic web application built using React.js, Tailwind CSS, Node.js, Express, and MongoDB. It allows users to explore and manage events seamlessly, offering features like event booking, service inquiries, and contact management, all while ensuring a responsive and visually appealing interface. The backend handles secure data storage and efficient event management with MongoDB."
      />
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Projects;

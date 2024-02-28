//Project images
import project1 from "./assets/images/img-1.jpg";
import project2 from "./assets/images/img-2.jpg";
import project3 from "./assets/images/img-3.jpg";

//icon images
import htmlIcon from "./assets/icons/html-5.svg";
import cssIcon from "./assets/icons/css3.svg";
import javascriptIcon from "./assets/icons/javascript.svg";
import reactIcon from "./assets/icons/react.svg";
import phpIcon from "./assets/icons/php.svg";
import laravelIcon from "./assets/icons/laravel.svg";
import gitIcon from "./assets/icons/git.svg";
import figmaIcon from "./assets/icons/figma.svg";
import bootstrapIcon from "./assets/icons/bootstrap.svg";

const navList = ["Home", "About", "Experiences", "Skills", "Projects"];

const skillIcon = [
  { src: htmlIcon, altText: "html5" },
  { src: cssIcon, altText: "css3" },
  { src: javascriptIcon, altText: "javascript" },
  { src: reactIcon, altText: "react" },
  { src: phpIcon, altText: "php" },
  { src: laravelIcon, altText: "laravel" },
  { src: gitIcon, altText: "git" },
  { src: figmaIcon, altText: "figma" },
  { src: bootstrapIcon, altText: "bootstrap" },
];
const projectsData = [
  {
    title: "Responsive website",
    path: project1,
    altText: "Resposivenesssss",
    description:
      "A responsive web app design with consideration to Design thinking. The color pallete has been created according to the standard color theory.",
    techStack: "Tech Stack: Javascript, Html5, CSS",
    link: "https://deeptikandel.github.io/ResponsiveWeb_Project/",
    iconClass: "fa fa-globe",
  },
  {
    title: "Project 2",
    path: project2,
    altText: "a laptop ",
    description:
      "A responsive web app design with consideration to Design thinking. The color pallete has been created according to the standard color theory.",
    techStack: "Tech Stack: Javascript, Html5, CSS",
    link: "https://deeptikandel.github.io/ResponsiveWeb_Project/",
    iconClass: "fa fa-globe",
  },
  {
    title: "Projects 3",
    path: project3,
    altText: "a working table",
    description:
      "A responsive web app design with consideration to Design thinking. The color pallete has been created according to the standard color theory.",
    techStack: "Tech Stack: Javascript, Html5, CSS",
    link: "https://deeptikandel.github.io/ResponsiveWeb_Project/",
    iconClass: "fa fa-globe",
  },
];
const socialIcon = [
  {
    link: "https://www.linkedin.com/in/deeptikandel/",
    iconClass: "fab fa-linkedin",
  },
  { link: "https://github.com/Deeptikandel", iconClass: "fab fa-github" },
];

const timelineData = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "Shipit Oy Ab",
    description:
      "Develop software solutions that can be easily scaled and maintain quality by performing ccontinual tests and managing software integration.",
    buttonText: "View Work Certificate",
    date: "September 2022 - December 2023",
    workIcon: "fa fa-laptop-code",
    pdfIcon: "fa fa-file-pdf",
  },
  {
    id: 2,
    title: "Fullstack Developer Trainee",
    company: "Integrify.io",
    description:
      "Building front-end and backend using javascript frameworks with additional concepts on API development, documentation and working with Devops Practises.",
    buttonText: "View Work Certificate",
    date: "April 2022 - September 2022",
    workIcon: "fa fa-laptop-code",
    pdfIcon: "fa fa-file-pdf",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Bodhichitta Healthcare",
    description:
      "Planned and conducted use rresearch, workflow and competitor analysis.Created user stories, personas, and storyboards as well as wireframes and functional proto- types.",
    buttonText: "View Work Certificate",
    date: "March 2021 - October 2021",
    workIcon: "fa fa-laptop-code",
    pdfIcon: "fa fa-file-pdf",
  },
];

export { navList, skillIcon, projectsData, socialIcon, timelineData };

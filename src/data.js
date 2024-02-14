const navList = ["Home", "About", "Experiences", "Skills", "Projects"];

const skillIcon = [
  "fab fa-js",
  "fab fa-html5",
  "fab fa-react",
  "fab fa-sass",
  "fab fa-css3",
  "fab fa-php",
  "fab fa-laravel",
  "fab fa-node",
];
const projectsData = [
  {
    title: "Responsive website",
    src: "assets/images/img-1.jpg",
    altText: "Resposiveness",
    description:
      "A responsive web app design with consideration to Design thinking. The color pallete has been created according to the standard color theory.",
    techStack: "Tech Stack: Javascript, Html5, CSS",
    link: "https://deeptikandel.github.io/ResponsiveWeb_Project/",
    iconClass: "fa fa-globe",
  },
  {
    title: "Project 2",
    src: "assets/images/img-2.jpg",
    altText: "a laptop ",
    description: "",
  },
  {
    title: "Projects 3",
    src: "assets/images/img-3.jpg",
    altText: "a working table",
    description: "",
  },
];
const socialIcon = [
  {
    link: "https://www.instagram.com/kandeldeepti",
    iconClass: "fab fa-instagram",
  },
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

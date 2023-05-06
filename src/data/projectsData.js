import monResto from "../assets/png/monresto.png";
import jobber from "../assets/png/jobberlogo.png";
import asap from "../assets/png/asap.png";
import yoteqi from "../assets/png/yoteqi.png";
import mediasi from "../assets/png/mediasi.png";
import ridi from "../assets/png/ridi.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Monresto",
    projectDesc: "A food delivery application.",
    tags: ["Android", "Java"],
    code: "",
    demo: "https://www.monresto.net/",
    image: monResto,
    isPrivate: true,
  },
  {
    id: 2,
    projectName: "Mediasi",
    projectDesc:
      "platform aims to stop the spread of false news with a dedicated voting system  ",
    tags: ["React", "Nodejs", "MongoDB", "Express.js"],
    code: "https://gitlab.com/ichrak.harbaoui/media",
    demo: "",
    image: mediasi,
  },

  {
    id: 3,
    projectName: "ASAP",
    projectDesc: "E-commerce application",
    tags: ["React", "Nodejs", "MongoDB", "Express.js", "Typescript"],
    code: "",
    demo: "https://asapforyou.fr/",
    image: asap,
    isPrivate: true,
  },
  {
    id: 4,
    projectName: "Yoteqi",
    projectDesc: "Digital Business Card application",
    tags: ["React", "Nodejs", "MongoDB", "Express.js", "Typescript"],
    code: "",
    demo: "",
    image: yoteqi,
    isPrivate: true,
  },
  {
    id: 5,
    projectName: "Jobber",
    projectDesc:
      " A mobile application that allows you to request or offer services in real time for everyday household tasks with geolocation accuracy. ",
    tags: ["Android", "Java", "Nodejs", "MongoDB", "Express.js"],
    code: "",
    demo: "",
    image: jobber,
    isPrivate: true,
  },
  {
    id: 6,
    projectName: "K-RIDI",
    projectDesc: "A platform for human resources (HR) management",
    tags: ["React", "Spring Boot", "MySql", "Keycloak"],
    code: "",
    demo: "",
    image: ridi,
    isPrivate: true,
  },
];

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import bg1 from "../assets/bg1.png";
import github from "../assets/github.webp";
import github2 from "../assets/github.png";
import linkedin from "../assets/linkedin.webp";
import resume from "../assets/Devendra Dhakad CV.pdf";
import mmskyresume from "../assets/MMSKY Resume Devendra Dhakad.pdf";
import resumeIcon from "../assets/resume-g9ea3443c7_1920.png";
import emailIcon from "../assets/emailicons-g3b720d92e_1280.png";
import web from "../assets/web.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import html from "../assets/html5-g25407fbd1_1280.png";
import css from "../assets/css3-g6e9bf867d_1280.png";
import js from "../assets/js.webp";
import react from "../assets/reactjs.webp";
import nodejs from "../assets/nodejs0-removebg-preview.png";
import mongoDb from "../assets/mongoDb.webp";
import boy from "../assets/boy-g29910d274_1280.png";
import dev from "../assets/developer.png";
import codsoft from '../assets/cod.png'
import songWave from '../assets/songWave.jpg'
import todoList from '../assets/todoList.png'
import crypto from '../assets/crypto.png'


 
export {
  crypto,
  mmskyresume,
  codsoft,
  boy,
  dev,
  close,
  menu,
  bg1,
  github,
  linkedin,
  resume,
  resumeIcon,
  emailIcon,
  html,
  css,
  js,
  react,
  nodejs,
  mongoDb,
  github2
};

export let techImages = [
  {
    img: html,
    id: 1,
  },
  {
    img: css,
    id: 2,
  },
  {
    img: js,
    id: 3,
  },
  {
    img: react,
    id: 4,
  },
  {
    img: nodejs,
    id: 5,
  },
  {
    img: mongoDb,
    id: 6,
  },
];

export let navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
 
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

export const experiences = [
  {
    title: "Web Developer - Internship",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#9deef2",
    date: "25 July 2023 - 25 August 2023",
    points: [
      "Developing Full Stack Web Application using Html, CSS, JavaScript, React.js, Node.Js and other related technologies.",
     
    ],
  },
  
];

export const projects = [
  
  {
    name: "MusicApp",
    description:
      " The app allows users to listen to their favorite tracks, and provides standard audio controls.The key feature of this app is Audio Playback, Playlists, Responsive Design, Dynamic UI.This project showcase my proficiency in web development. ",
    tags: [
      {
        name: "HTML5",
        color: "text-green-500",
      },
      {
        name: "CSS3",
        color: "text-red-500",
      },
      {
        name: "JavaScript",
        color: "text-blue-500",  
      },
    ],
    image: songWave,
    source_code_link: "https://github.com/Devendradhakad12/SongWave_Music_App.git",
    production_link:'https://song-wave-music-app.vercel.app'
  },
  {
    name: "Crypto Coin Price Tracking",
    description:
      "Web application that enables users to Track Price of Crypto Coins, view Real-Time price updates , Charts and Graphs of Crypto Coins. Click on image to go to Crypto Coin Website.",
    tags: [
      {
        name: "React.js",
        color: "text-green-500",
      },
      {
        name: "chakraUi",
        color: "text-red-500",
      },
    
    ],
    image: crypto,
    source_code_link: "https://github.com/Devendradhakad12/CryptoCoin_PriceTracking.git",
    production_link:'https://crypto-coin-price-tracking.vercel.app '
  },
  {
    name: "Todo List App",
    description:
      "The Todo List Web App is a simple and efficient application designed and developed using HTML, CSS, and JavaScript. Its main purpose is to help users organize their tasks  in a convenient and intuitive manner.",
    tags: [
      {
        name: "HTML5",
        color: "text-green-500",
      },
      {
        name: "CSS3",
        color: "text-red-500",
      },
      {
        name: "JavaScript",
        color: "text-blue-500",  
      },
    ],
    image: todoList,
    source_code_link: "https://github.com/Devendradhakad12/Todo_List_App.git",
    production_link:'https://todo-list-app-beta-two.vercel.app'
  },
 
  
];

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import bg1 from "../assets/bg1.png";
import github2 from "../assets/github.png";
import resume from "../assets/Devendra Dhakad CV.pdf";
import web from "../assets/web.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import boy from "../assets/boy-g29910d274_1280.png";
import dev from "../assets/developer.png";
import codsoft from '../assets/cod.png'
import songWave from '../assets/songWave.jpg'
import todoList from '../assets/new-todo.png'
import crypto from '../assets/crypto.png'
import visitIcon from '../assets/visit-icon-copy.jpg'


// social media and resume icon
const linkedin = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256377/portfolio/hjaphgc72keq2lsycade.webp";
const github = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256289/portfolio/sdof20tby8dkwf7p0dyy.webp";
const emailIcon = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256357/portfolio/koc8ebiioptwrleiywaw.png";
const resumeIcon =  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256399/portfolio/pcc6jftwnbkeeut9i6c3.png";

// skills icon
const html = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256345/portfolio/hs5stk2sbvd5maimdkps.png";
const css = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256342/portfolio/fj28pkjbjaj2cadhrf2p.png";
const js = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256388/portfolio/idltbgdctywmvbmtz5ho.webp";
const react = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256387/portfolio/khdwulnbruvceunltzvn.webp";
const nodejs = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256382/portfolio/w5xhqh7uqisrpe7qky8i.png";
const mongoDb = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256376/portfolio/swepocvusk1dsemqzbwr.webp";
const nextjs =  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256398/portfolio/ma8dftpjqf5jebi66zjf.ico"
const typescript = "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256393/portfolio/dghpbqzxmlhjxlguflvp.png"
const reduxToolKit = 'https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256390/portfolio/whsroqpqxilola0rvyjq.png'



 
export {
  crypto,
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
  typescript,
  mongoDb,
  nextjs,
  github2,
  visitIcon,
  reduxToolKit
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
  {
    img: nextjs,
    id: 7,
  },
  {
    img: typescript,
    id: 8,
  },
  {
    img: reduxToolKit,
    id: 9,
  },
];


export const experiences = [
  /*   {
      title: "Web Developer - Internship",
      company_name: "CodSoft",
      icon: codsoft,
      iconBg: "#9deef2",
      date: "25 July 2023 - 25 August 2023",
      points: [
        "Developing Full Stack Web Application using Html, CSS, JavaScript, React.js, Node.Js and other related technologies.",
       
      ],
    }, */
    
  ];

export let navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: experiences.length ?  "experience" :"",
    title:experiences.length ? "Experience" :"",
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



export const projects = [
  {
    name: "Todo List App",
    description:
      "The Todo List Web App is a simple and efficient application designed and developed using Next.js, TypeScript, MongoDB and TailwindCSS. Its main purpose is to help users organize their tasks  in a convenient and intuitive manner.",
    tags: [
      {
        name: "Next.js",
        color: "text-green-500",
      },
      {
        name: "MongoDB",
        color: "text-red-500",
      },
      {
        name: "TypeScript",
        color: "text-blue-500",  
      },
      {
        name: "Mongoose",
        color: "text-green-500",  
      },
      {
        name: "TailwindCSS",
        color: "text-sky-500",  
      },
    ],
    image: todoList,
    source_code_link: "https://github.com/Devendradhakad12/todolist-app-next-ts.git",
    production_link:'https://todolist-app-next-ts.vercel.app/'
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


  
];

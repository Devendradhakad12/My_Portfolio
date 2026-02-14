import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import bg1 from "../assets/bg1.png";
import github2 from "../assets/github.png";
import resume from "../assets/Devendra_Dhakad_Resume.pdf";
import web from "../assets/web.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import boy from "../assets/boy-g29910d274_1280.png";
import dev from "../assets/developer.png";
import codsoft from "../assets/cod.png";
import visitIcon from "../assets/visit-icon-copy.jpg";
import ambuviansLogo from "../assets/ambuvians.png";
import LilyportLogo from "../assets/sasahyog_technologies_logo.jpeg";

// social media and resume icon
const linkedin =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256377/portfolio/hjaphgc72keq2lsycade.webp";
const github =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256289/portfolio/sdof20tby8dkwf7p0dyy.webp";
const emailIcon =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256357/portfolio/koc8ebiioptwrleiywaw.png";
const resumeIcon =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256399/portfolio/pcc6jftwnbkeeut9i6c3.png";

// skills icon
const html =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256345/portfolio/hs5stk2sbvd5maimdkps.png";
const css =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256342/portfolio/fj28pkjbjaj2cadhrf2p.png";
const js =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256388/portfolio/idltbgdctywmvbmtz5ho.webp";
const react =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256387/portfolio/khdwulnbruvceunltzvn.webp";
const nodejs =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256382/portfolio/w5xhqh7uqisrpe7qky8i.png";
const mongoDb =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256376/portfolio/swepocvusk1dsemqzbwr.webp";
const nextjs =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256398/portfolio/ma8dftpjqf5jebi66zjf.ico";
const typescript =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256393/portfolio/dghpbqzxmlhjxlguflvp.png";
const reduxToolKit =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1699256390/portfolio/whsroqpqxilola0rvyjq.png";

// projects Images
import songWave from "../assets/songWave.jpg";
import todoList from "../assets/new-todo.png";
import crypto from "../assets/crypto.png";
const shopCart =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1700118753/portfolio/ebjk5rrvvt2atgfyjrhe.png";
const portfolio =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1700118877/portfolio/kfniwxtxraysar2itsfr.png";
const taskTersure =
  "https://res.cloudinary.com/dvkfio4zq/image/upload/v1700120588/portfolio/refgngameuckul0tbmx8.png";

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
  reduxToolKit,
  shopCart,
  portfolio,
  taskTersure,
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
  {
    title: "Frontend Developer - Freelance",
    company_name: "Ambuvians",
    icon: ambuviansLogo,
    iconBg: "#9deef2",
    date: "01 January 2024 - 30 January 2024",
    points: [
      "Developing Healthcare Website using React.js, TypeScript, TailwindCss  and other related technologies.",
      "Developed a fully responsive and animated website using React.js and Tailwind CSS.",
      "Implemented interactive UI animations using Framer Motion to enhance user experience.",
      "Collaborated with the design team to translate Figma designs into pixel-perfect web pages.",
      "Ensured cross-device compatibility and layout optimization.",
    ],
  },
  {
    title: "Fullstack Developer - Internship",
    company_name: "Sasahyog Technologies",
    icon: LilyportLogo,
    iconBg: "#3434eb",
    date: "April 2024 - May 2025",
    points: [
      "Developed and maintained 5+ production-grade web applications using React.js, Next.js, Strapi.js, and Express.js.",
      "Designed and integrated REST APIs using Strapi for seamless frontend-backend communication. ",
      "Improved application performance through rendering optimization and efficient API handling. ",
      "Built responsive, scalable UI systems aligned with modern product standards. ",
    ],
  },
];

export let navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: experiences.length ? "experience" : "",
    title: experiences.length ? "Experience" : "",
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
    name: "ShopCart - Ecommerce ",
    description:
      "The Full Stack E-Commers Website Called ShopCart. This Is The Full Stack Project Having Proper Payment Gateway, Add to cart feature, Admin Dashboard,Orders tracking and all other necessary Features.",
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
      {
        name: "Redux Toolkit",
        color: "text-red-500",
      },
    ],
    image: shopCart,
    source_code_link:
      "https://github.com/Devendradhakad12/shop-cart-next-ts.git ",
    production_link: "https://shop-cart-next-ts.vercel.app/",
  },

  {
    name: "Todo List App - Next.js",
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
    source_code_link:
      "https://github.com/Devendradhakad12/todolist-app-next-ts.git",
    production_link: "https://todolist-app-next-ts.vercel.app/",
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
        name: "Coin Gecko API",
        color: "text-red-500",
      },
    ],
    image: crypto,
    source_code_link:
      "https://github.com/Devendradhakad12/CryptoCoin_PriceTracking.git",
    production_link: "https://crypto-coin-price-tracking.vercel.app ",
  },
  {
    name: "Todo List App - React.js",
    description:
      "The Todo List Web App is a simple and efficient application designed and developed using React.js, Node.js, MongoDB and TailwindCSS. Its main purpose is to help users organize their tasks in a convenient.",
    tags: [
      {
        name: "React.js",
        color: "text-green-500",
      },
      {
        name: "Node.js",
        color: "text-blue-500",
      },
      {
        name: "Express.js",
        color: "text-green-500",
      },
      {
        name: "MongoDB",
        color: "text-red-500",
      },
      {
        name: "JavaScript",
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
    image: taskTersure,
    source_code_link:
      "https://github.com/Devendradhakad12/FulllStack_MyTodoApp.git",
    production_link: "https://task-treasure.vercel.app",
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
    source_code_link:
      "https://github.com/Devendradhakad12/SongWave_Music_App.git",
    production_link: "https://song-wave-music-app.vercel.app",
  },

  {
    name: "My Portfolio",
    description:
      "My Personal Portfolio website , I build it using React.js and TailwindCSS.",
    tags: [
      {
        name: "React.js",
        color: "text-green-500",
      },
      {
        name: "TailwindCSS",
        color: "text-red-500",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Devendradhakad12/My_Protfolio.git",
    production_link: "https://devendra-dhakad-portfolio.vercel.app/",
  },
];

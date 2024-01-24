import React, { useState } from "react";
import myFlix from "../assets/portfolio/myFlixIcon.PNG";
import cineFlix from "../assets/portfolio/cineFlix.PNG";
import chatfmL from "../assets/portfolio/chatfmL.PNG";
import meet from "../assets/portfolio/meetIcon.PNG";
import pokedex from "../assets/portfolio/pokedexIcon.PNG";
import toDo from "../assets/portfolio/toDo.PNG";
import Modal from "react-modal";
import "./Portfolio.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cineFlix,
      title: "CineFlix Movie App",
      description:
        "CineFlix empowers users to effortlessly search and filter a diverse collection of films, providing detailed insights for each. Additionally, users can register to curate a list of favorite films. The project's objective was to create both the server-side and client-side of the application entirely from the ground up.",
      challenges:
        "The project necessitated the incorporation of various views, and implementing routing to manage these diverse perspectives and ensure smooth navigation posed a considerable challenge. Moreover, during development on my local machine, the JavaScript code could manipulate the current URL and redirect users to different pages. However, in production, deploying the application on a static host like Netlify meant server-handled routing, leading to challenges such as handling 404 error pages post-deployment. With guidance from my mentor and tutor, along with meticulous route and navigation management, I successfully addressed these issues.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      href1: " https://github.com/MSIlam/myFlix-client-mi.git",
      href2: "https://myflix-mi.netlify.app/signup",
    },
    {
      id: 2,
      src: meet,
      title: "MeetBit an event App",
      description:
        "The MeetBit App stands as an innovative progressive web application, seamlessly merging the strengths of both web and mobile apps. Its serverless architecture ensures a smooth user experience, empowering individuals to effortlessly discover, join, and engage in numerous upcoming local IT events. This fosters a sense of community and connection among event-goers.",
      challenges:
        "In this project, a major challenge I encountered was adopting the Test-Driven Development (TDD) approach, which involved writing tests before implementing the actual code—an unfamiliar methodology for me. To overcome this obstacle, I invested considerable time in acquiring proficiency with various testing tools, such as Jest for unit and integration testing, Puppeteer for end-to-end testing, and Cucumber for user acceptance testing.",
      technologies: ["React", "AWS Lambda", "Jest", "Pupeeteer"],
      href1: "https://github.com/MSIlam/meet.git",
      href2: "https://msilam.github.io/meet/",
    },
    {
      id: 3,
      src: pokedex,
      title: "Pokedex",
      description:
        "This JavaScript web application harnesses the power of external API connectivity to dynamically load and display an extensive range of Pokémon character data. Users can explore comprehensive details about each Pokémon, including their stats, creating an immersive and informative experience for fans of the Pokémon universe.",
      challenges:
        "Engaging with External APIs: I acquired proficiency in fetching data from external APIs and seamlessly incorporating it into my application, deepening my comprehension of API utilization. By crafting and refining the user interface, I refined my expertise in developing visually engaging and intuitive web applications, taking into account elements like layout and responsiveness. Along the development journey, I confronted diverse challenges, refining my capacity to recognize and overcome issues, thereby augmenting my problem-solving acumen.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "JSON",
        "JQUERY",
        "ESlint",
        "Prettier",
        "Modal",
        "Fetch",
        "Polyfill",
        "AJAX",
        "MediaQuery",
        "Mini_CSS/JS",
      ],
      href1: "https://github.com/MSIlam/Pokemon-item-app-js.git",
      href2: "https://MSIlam.github.io/Pokemon-item-app-js/",
    },
    {
      id: 4,
      src: chatfmL,
      title: "FmChat a native App",
      description:
        "The React Native Mobile FmChat App is a native application meticulously optimized for both Android and iOS platforms. Constructed using React Native and Firebase, it delivers a smooth and intuitive chat experience, encompassing functionalities such as image and location sharing, along with the capability to access messages offline.",
      challenges:
        "I implemented a button within the input field, triggering an Actionsheet containing several actions: choosing an image from the library, opening the camera, and sharing the location. To achieve this, I devised a function that initially seeks the user's consent to access their device library. Subsequently, the function employs the expo-image-picker API, facilitating the opening of the device's library and enabling the user to select an image. Analogously, the expo-location and expo-camera APIs were employed for handling other actions seamlessly.",
      technologies: ["React Native", "Expo", "Gifted Chat", "Firebase"],
      href1: "https://github.com/MSIlam/ChatFm.git",
      href2: "https://github.com/MSIlam/ChatFm.git",
    },
    {
      id: 5,
      src: myFlix,
      title: "myFlix an Angular App",
      description:
        "The Angular-powered single-page application, designed for responsiveness, caters to movie enthusiasts by providing a sophisticated user interface that delivers detailed information about films. Cinephiles can delve into a plethora of details about their preferred movies, including comprehensive analyses of genres and directorial styles, making it a comprehensive planning tool.",
      challenges:
        "Through building the mxFlix application with Angular, I gained a strong understanding of Angular services, dependency injection, routing, and most importantly, I learned TypeScript. This project was a great opportunity for me to compare and contrast Angular with React in terms of the mental model and architecture, which gave me a broader perspective on different front-end technologies.",
      technologies: [
        "Angular",
        "Material UI",
        "Node.js",
        "Typescript",
        "typedoc",
      ],
      href1: "https://github.com/MSIlam/myFlix-Angular-client.git",
      href2: "https://my-flix-angular-client-rl5m7x43i.vercel.app",
    },
    {
      id: 6,
      src: toDo,
      title: "ToDo List App",
      description:
        "A streamlined and user-friendly to-do list application designed for effortless task management and organization.",
      challenges:
        "Streamline your task management experience with our intuitive to-do list application. Adding tasks is a breeze, allowing you to efficiently organize your agenda. The functionality to mark tasks as done or undone is at your fingertips, simply double-click on a task to toggle its status. Need to remove a task? A single click on the 'X' button effortlessly deletes it from your list. Take customization to the next level by easily reordering tasks through a simple drag-and-drop interface. This minimalistic yet powerful application ensures you stay on top of your tasks with ease and efficiency.",
      technologies: ["HTML", "CSS", "JQUERY"],
      href1: "https://github.com/MSIlam/TO-DO-list-app.git",
      href2: "https://MSIlam.github.io/TO-DO-list-app/",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
          {portfolios.map(
            ({
              id,
              src,
              description,
              title,
              technologies,
              challenges,
              href1,
              href2,
            }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                  onClick={() =>
                    openModal({
                      id,
                      src,
                      description,
                      title,
                      technologies,
                      challenges,
                    })
                  }
                />
                <div className="flex items-center justify-center">
                  <a
                    href={href2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-10 py-1 m-1 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Demo
                  </a>
                  <a
                    href={href1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-10 py-1 m-1 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeModal}
        contentLabel="Project Details"
      >
        {selectedProject && (
          <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full p-4">
              <img
                src={selectedProject.src}
                alt=""
                className="rounded-2xl mx-auto w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <br />
              <h2 className="text-xl sm:text-4xl font-bold text-black">
                {selectedProject.title}
              </h2>
              <p>{selectedProject.description}</p>
              <br />
              <h2 className="sm:text-2xl font-bold text-black">
                Challenges and merits
              </h2>
              <p>{selectedProject.challenges}</p>
              <div className="sm:text-lg text-black">
                <strong>Technologies:</strong>{" "}
                {selectedProject.technologies &&
                  selectedProject.technologies.map((tech, index) => (
                    <span key={index}>
                      {index > 0 && ", "} {tech}
                    </span>
                  ))}
              </div>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;

// <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"></div>

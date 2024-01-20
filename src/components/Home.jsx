// import React from "react";
// import MyPhoto from "../assets/My_photo.jpg";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I am a Fullstack web developer
//           </h2>
//           <p className="text-gray-500 py-4 max-w-md">
//             dksdkckl;dsjjdsndddddddddddddddddddssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxx
//           </p>
//           <div>
//             <button className="group text-white w-fit px-6 py-3 my-2 flex item-centre rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// <div>
//           <img
//             src={MyPhoto}
//             alt="my profile"
//             className="rounded-2xl mx-auto w-2/3 md:w-full"
//           />
//         </div>

import React from "react";
import myPhoto from "../assets/myPic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={myPhoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
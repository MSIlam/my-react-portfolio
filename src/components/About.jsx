import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p>
          I am a passionate web developer with a diverse background in academic
          research. I find immense joy in exploring the dynamic relationship
          between programming languages and technology, constantly seeking
          innovative ways to design and shape the digital landscape. My journey
          into programming began while analyzing and visualizing complex
          research data, and I was instantly captivated by its transformative
          power. This profound interest led me to embark on a career path where
          I could refine my natural problem-solving abilities through the medium
          of programming.
        </p>
        <br />
        <p className="text-xl">
          Beyond my professional endeavors, I am fortunate to have a loving and
          supportive wife, and I take great pride in being a dedicated father to
          my three wonderful sons.
        </p>
      </div>
    </div>
  );
};

export default About;

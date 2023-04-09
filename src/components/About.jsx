import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#bddbfc]text-gray-200"
    >
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#bddbfc]text-gray-200">
        <div className=" py-16 rounded-md bg-[#bddbfc] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
          
            <div></div>
            
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            
            <div className="sm:text-right text-4xl font-bold">
              <p>
                I'm Jeremiah
              </p>
            </div>
            <div>
              <p>
                {" "}
                I've managed the database maintenance, architecture and UI / UX design for three asset management platforms and guided dev teams for the past ten years.  I'm learning the MERN stack to fill in the gaps to be a better manager and to grow professionally and personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
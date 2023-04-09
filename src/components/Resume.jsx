import React from "react";
import pdf from '../assets/truncated resume 2023.pdf'

const Resume = () => { 
  return (
    <div
      name="resume"
      id="resume"
      className="w-full h-screen bg-[#bddbfc]text-gray-200"
    >
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#bddbfc]text-gray-200">
        <div className=" py-16 rounded-md bg-[#bddbfc] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                      <div></div>
                      </div>
          <p className="sm:text-right text-4xl font-bold .m-16">
            Proficiencies
          </p>
          <br></br>
          <br></br>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                          <li>
                UI / UX
            </li>
            <li>
                Project Management
            </li>
            <li>
                QC
            </li>
            <li>
                SQL / MySQL Management
            </li>
            <li>
                Power BI / SSRS
            </li>
            <li>
                HTML / CSS
            </li>
            <li>
                Node
            </li>
            <li>
                Express
            </li>
            <li>
                React
            </li>
            
              <a className="sm:text-left text-1xl font-medium" href={pdf}>Click here for my full PDF resume</a>
            </div>
          </div>
        </div>
      </div>
    
          
    
    
  );
};
export default Resume;
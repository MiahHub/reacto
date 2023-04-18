import React from 'react';
import cat from '../assets/cat.png';
import logic from '../assets/lounge.png';
import boat from '../assets/boat.png';
import social from '../assets/socialapi.png';
import ios from '../assets/ios.png';
import web from '../assets/web.png';

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Portfolio
          </p>
          <p className='py-6 text-2xl'>Here's some recent work</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${cat})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Meme Generator
              </span>
              <p className='text-center'>A group project meme generating site based on cats employing JavaScript.</p>
              <div className='pt-8 text-center'>
                                <a href='https://github.com/Pkrysinski/cat-meme-generator'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${boat})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Boat Rental Website
              </span>
              <p className='text-center'>Another group project employing JavaScript MVC for finding and renting boats.</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/ValentaCodes/DiveIn'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://divein-production.up.railway.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
                    <div
            style={{ backgroundImage: `url(${logic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Logic Lounge
              </span>
              <p className='text-center'>A MERN stack tutoring platform</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/kfarshchian/Logic-Lounge'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href='https://logic-lounge-production.up.railway.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    App
                  </button>
                  </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${social})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Social Media APIs
              </span>
              <p className='text-center'>A collection of APIs for a social medial application</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/MiahHub/Transnational-Ramicfication'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ios})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                iOS UI / UX
              </span>
              <p className='text-center'>User interface design for an asset management iOS application.</p>
              <div className='pt-8 text-center'>
                <a href='https://camscompanion.com/software/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://qrco.de/bd61qP'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Video
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${web})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Asset Management WebApp
              </span>
              <p className='text-center'>A CBT web application built with React and Mongodb</p>
              <div className='pt-8 text-center'>
                <a href='https:/camscompanion.com'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Site
                  </button>
                </a>
                <a href='https://qrco.de/bd61qP'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Video
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
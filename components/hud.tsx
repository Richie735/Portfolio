'use client';

import { LuGithub, LuLinkedin } from 'react-icons/lu';
import Navbar from './navbar';

function Hud() {
  return (
    <>
      <Navbar />
      <div className="relative z-50 opacity-0 lg:opacity-100">
        <div className="fixed bottom-0 left-4containers flex flex-col items-center">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div className="primary-gradient h-[50vh] w-px" />
        </div>
        <div className="fixed right-4containers top-0 flex flex-col items-center">
          <div className=" primary-gradient h-[90px] w-px rotate-180" />

          <div className="group flex items-center">
            <div className="border-px absolute z-40 h-fit w-fit translate-x-10 translate-y-2  rounded-md border border-primary border-opacity-10 bg-[#222222] px-2 py-0.5 opacity-0 group-hover:opacity-100">
              <p className=" font-spaceMono text-xs font-light text-primary">
                Linkedin
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/ricardopereira735/"
              target="_blank"
              aria-label="Go to Linkedin Profile"
            >
              <LuLinkedin className="hover:scale mt-4 h-6 w-6 text-primary hover:scale-110  hover:text-white" />
            </a>
          </div>
          <div className="group">
            <div className="border-px absolute z-40 h-fit w-fit translate-x-10 translate-y-4 rounded-md border  border-primary border-opacity-10 bg-[#222222] px-2 py-0.5 opacity-0 group-hover:opacity-100 ">
              <p className=" font-spaceMono text-xs font-light text-primary">
                Github
              </p>
            </div>
            <a
              href="https://github.com/Richie735"
              target="_blank"
              aria-label="Go to Github Profile"
            >
              <LuGithub className=" mt-4 h-6 w-6 text-primary hover:scale-110 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hud;

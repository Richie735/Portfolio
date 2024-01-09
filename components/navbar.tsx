'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  PiBriefcaseBold,
  PiClockCounterClockwiseBold,
  PiHouseLineBold,
  PiInfoBold,
} from 'react-icons/pi';

const Navbar = () => {
  return (
    <>
      <div className="fixed left-[364px] top-[105px] z-50">
        <Image
          className="-translate-y-6 scale-150 select-none"
          src="/assets/svgs/Navbar.svg"
          alt="Navbar"
          width={135}
          height={140}
        />
      </div>
      <header>
        <nav className="fixed left-[356px] top-[58px] z-50">
          <ul className=" flex w-[177px] items-center justify-center gap-5 rounded-md bg-background">
            <li className="group" key="home">
              <div className="absolute -left-px -top-8 z-40 h-fit w-fit rounded-md  border border-primary border-opacity-10 bg-[#222222] px-2 py-0.5 opacity-0 group-hover:opacity-100">
                <p className=" font-spaceMono text-xs font-light text-primary">
                  Home
                </p>
              </div>
              <Link href={'#home'}>
                <PiHouseLineBold className="h-6 w-6 text-primary hover:hover:scale-110 hover:text-white" />
              </Link>
            </li>
            <li className="group" key="about">
              <div className="absolute -top-8 left-10 z-40 h-fit w-fit rounded-md border border-primary border-opacity-10 bg-[#222222] px-2 py-0.5 opacity-0 group-hover:opacity-100">
                <p className=" font-spaceMono text-xs font-light text-primary">
                  About
                </p>
              </div>
              <Link href={'#about'}>
                <PiInfoBold className="h-6 w-6 text-primary hover:hover:scale-110 hover:text-white" />
              </Link>
            </li>
            <li className="group" key="background">
              <div className="absolute -top-8 left-[65px] z-40 h-fit w-fit rounded-md  border border-primary border-opacity-10 bg-[#222222] px-2 py-0.5 opacity-0 group-hover:opacity-100">
                <p className=" font-spaceMono text-xs font-light text-primary">
                  Background
                </p>
              </div>
              <Link href={'#background'}>
                <PiClockCounterClockwiseBold className="h-6 w-6 text-primary hover:hover:scale-110 hover:text-white" />
              </Link>
            </li>
            <li className="group" key="projects">
              <div className="absolute -top-8 left-[118px] z-40 h-fit w-fit rounded-md  border border-primary border-opacity-10 bg-[#222222] px-2 py-0.5 opacity-0 group-hover:opacity-100">
                <p className=" font-spaceMono text-xs font-light text-primary">
                  Projects
                </p>
              </div>
              <Link href={'#projects'}>
                <PiBriefcaseBold className="h-6 w-6 text-primary hover:hover:scale-110 hover:text-white" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

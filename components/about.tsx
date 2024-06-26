'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { LuDownload, LuLinkedin, LuMail } from 'react-icons/lu';
import { skillsData } from '../lib/data';
import SkillCard from './skillcard';

const About = () => {
  const isAvailable = false;

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const cards = Array.from(
        document.getElementsByClassName('about__skill-card'),
      );
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        const cards = Array.from(
          document.getElementsByClassName('about__skill-card'),
        ) as HTMLElement[];
        for (const card of cards) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
      }
    };
    const cardsContainer = document.getElementById('cards');
    if (cardsContainer) {
      cardsContainer.addEventListener('mousemove', handleMouseMove);
    }

    const reachOutElement = document.getElementById('reachOut');
    if (reachOutElement) {
      reachOutElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener('mousemove', handleMouseMove);
      }
      if (reachOutElement) {
        reachOutElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="mx-0 -mt-32 h-screen lg:mx-4containersExtraGap lg:-mt-[350px] lg:scroll-mt-[134px]"
    >
      <div className="mx-4 flex items-center lg:mx-1gap">
        <h2 className="flex items-center font-spaceMono text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className=" font-spaceMono text-3xl font-normal tracking-tight text-primary lg:text-4xl">
            01.
          </span>
          About
        </h2>
        <div className="ml-1gap h-px w-full bg-white" />
      </div>

      <div className="mx-4 mt-2gap flex flex-col gap-1gap lg:mx-1container1gap lg:grid lg:grid-cols-3 lg:grid-rows-4">
        {/* Image */}
        <div className="flex w-full justify-center lg:col-span-1 lg:row-span-2">
          <div className="about__image-container relative aspect-[4/6] w-[80%] overflow-hidden rounded-2xl border-primaryFade lg:w-full">
            <div className="absolute left-0 top-0 h-full w-full">
              <Image
                src="/assets/images/Self.jpg"
                alt="Ricardo Pereira"
                layout="fill"
                objectFit="cover"
                className="about__image--filter select-none"
              />
            </div>
            <div className="relative z-10 m-4 flex h-[calc(100%-2rem)] flex-grow flex-col items-center rounded-xl border border-primaryFade" />
            <div className="absolute left-0 top-0 h-full w-full bg-primaryFade2" />
            <div className="about__image--line-effect absolute left-0 top-0 h-full w-full rounded-2xl border-[3px] border-primaryFade" />
          </div>
        </div>

        {/* Description */}
        <div className="h-full lg:col-span-2 lg:row-span-1">
          <div className="about__container relative h-full rounded-3xl border border-white border-opacity-5 bg-secondary p-6">
            <div>
              <p className="my-2 font-poppins text-base font-normal tracking-widest">
                A fresh Computer Engineering graduate, geeking out on web
                developmen and a passion for diving into new technologies.
              </p>
              <p className="my-2 font-poppins text-base font-normal tracking-widest">
                Ready to dive into real-world projects and cultivate practical
                skills.
              </p>
              <p className="my-2 font-poppins text-base font-normal tracking-widest">
                Excited about the next challenge that comes my way!
              </p>
            </div>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="h-1/5 lg:col-span-2 lg:row-span-2">
          <div className="relative flex justify-center rounded-3xl border border-white border-opacity-5 bg-secondary p-4 ">
            <div
              id="cards"
              className="grid grid-cols-4 gap-[6px] lg:grid-cols-8"
            >
              {skillsData.map((skill, index) => (
                <SkillCard key={index} title={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Status + Reach Out */}
        <div className="flex h-full items-center justify-center gap-1gap lg:col-span-1 lg:col-start-2 lg:row-span-1 lg:row-start-2 lg:flex-col">
          <div className="relative hidden h-full w-full items-center justify-center rounded-3xl border border-white border-opacity-5 bg-secondary lg:flex">
            <GrStatusGoodSmall
              className={`mr-3 h-6 w-6 opacity-0 lg:opacity-100 ${
                isAvailable ? 'text-available' : 'text-unavailable'
              }`}
            />
            <p
              className={`font-spaceMono text-base font-bold tracking-normal ${
                isAvailable ? 'text-available' : 'text-unavailable'
              }`}
            >
              {isAvailable ? 'Have a project in mind?' : 'Busy right now!'}
            </p>
          </div>

          <div
            id="reachOut"
            className="flex h-24 w-full grid-cols-4 items-center justify-center gap-[6px] rounded-3xl border border-white border-opacity-5 bg-secondary px-4 lg:h-full"
          >
            <p className="my-1 font-poppins text-base font-normal tracking-widest">
              {isAvailable ? 'Want to work together?' : 'You can reach out on:'}
            </p>

            <a
              href="mailto:richierichie735@gmail.com"
              className="about__skill-card relative flex aspect-square h-[75%] cursor-pointer items-center justify-center rounded-xl border border-white border-opacity-5 bg-secondary"
              aria-label="Email Ricardo Pereira"
            >
              <LuMail className="h-8 w-8" />
            </a>

            <a
              href="https://www.linkedin.com/in/ricardopereira735/"
              target="_blank"
              className="about__skill-card relative flex aspect-square h-[75%] cursor-pointer items-center justify-center rounded-xl border border-white border-opacity-5 bg-secondary"
              aria-label="Go to Linkedin Profile"
            >
              <div className="about__skill-card--border"></div>
              <LuLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Bullet Point + CV Button */}
        <div className="lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-2">
          <div className="relative h-full">
            <div className="about__container h-4/5 rounded-3xl border border-white border-opacity-5 bg-secondary p-6 ">
              <div>
                <h3 className="mb-1 font-spaceMono text-base font-bold tracking-normal text-primary">
                  My current mission is:
                </h3>
                <p className="font-poppins text-sm font-normal tracking-widest">
                  🛠️ Developing practical skills
                </p>
                <p className="font-poppins text-sm font-normal tracking-widest">
                  🚀 Pursuing professional certifications
                </p>
              </div>

              <div className="mt-3">
                <h3 className="mb-1 font-spaceMono text-base font-bold tracking-normal text-primary">
                  Things I'm interested in:
                </h3>

                <p className="font-poppins text-sm font-normal tracking-widest">
                  🤖 Prompt engineer
                </p>
                <p className="font-poppins text-sm font-normal tracking-widest">
                  🧠 PKM
                </p>
              </div>

              <div className="mt-3">
                <h3 className="font-spaceMono text-base font-bold tracking-normal text-primary">
                  Outside of tech, I've been:
                </h3>
                <div className="flex content-center">
                  <img
                    alt="German Flag"
                    src="https://flagsapi.com/BE/flat/64.png"
                    className="mr-[11px] mt-[3px] h-4 w-4"
                  />{' '}
                  <p className="font-poppins text-sm font-normal tracking-widest">
                    Learning German
                  </p>
                </div>
                <p className="font-poppins text-sm font-normal tracking-widest">
                  📖 Reading
                </p>
                <p className="font-poppins text-sm font-normal tracking-widest">
                  👾 Gaming
                </p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <a
                href="/assets/CV-Ricardo-Pereira.pdf"
                download={true}
                className="button__clip-path relative flex h-10 cursor-pointer items-center overflow-hidden bg-primaryFade px-5 font-spaceMono text-xl font-bold tracking-wide text-background transition-colors duration-200 ease-in-out hover:bg-primary hover:text-secondary"
              >
                Download CV <LuDownload className="ml-2 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

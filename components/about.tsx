'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { skillsData } from '../lib/data';
import Button from './button';
import SkillCard from './skillcard';

const About = () => {
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

      return () => {
        cardsContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section
      id="about"
      className=" mx-4containersExtraGap -mt-[350px] h-screen scroll-mt-[200px]"
    >
      <div className="ml-gap mr-1gap flex items-center">
        <h2 className="flex items-center font-spaceMono text-5xl font-bold tracking-tighter">
          <span className=" font-spaceMono text-4xl font-normal tracking-tight text-primary">
            01.
          </span>
          About
        </h2>
        <div className=" ml-1gap h-px w-full bg-white" />
      </div>

      <div className="mx-1container1gap mt-2gap grid grid-cols-3 gap-1gap">
        <div className="col-span-1 row-span-2 flex justify-center">
          <div className="about__image-container relative aspect-[10/16] overflow-hidden rounded-2xl border-primaryFade">
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
        <div className="col-span-2 col-start-2 row-span-1 row-start-1 h-full">
          <div className="about__container relative h-full rounded-3xl border border-white border-opacity-5 bg-secondary p-6">
            <div>
              <p className="my-1 font-poppins text-base font-normal tracking-widest">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, aspernatur sunt. Facilis impedit distinctio
                praesentium omnis tenetur, dolore, quam molestias aspernatur,
                vero laborum veniam. Officiis veniam quam dolor molestias minus?
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 col-start-2 row-span-1 row-start-2 h-full">
          <div className="about__container relative h-full rounded-3xl border border-white border-opacity-5 bg-secondary p-6">
            <div>
              <p className="my-1 font-poppins text-base font-normal tracking-widest">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, aspernatur sunt. Facilis impedit distinctio
                praesentium omnis tenetur, dolore, quam molestias aspernatur,
                vero laborum veniam. Officiis veniam quam dolor molestias minus?
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1">
          <div className="relative rounded-3xl border border-white border-opacity-5 bg-secondary p-4">
            <div id="cards" className="grid grid-cols-8 gap-[6px]">
              {skillsData.map((skill, index) => (
                <SkillCard key={index} title={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button title="Check my Cv" link="" />
        </div>
      </div>
    </section>
  );
};

export default About;

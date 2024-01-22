import Image from 'next/image';
import React from 'react';

type ProjectProps = {
  index: number;
  title: string;
  date?: string;
  tags: string[];
  icons?: {
    name: string;
    link: string;
    icon: React.ReactElement;
  }[];
  description: string;
  img: string;
};

const Project = ({
  index,
  title,
  date,
  tags,
  icons,
  description,
  img,
}: ProjectProps) => {
  let isEven: boolean;
  index % 2 === 0 ? (isEven = true) : (isEven = false);

  return (
    <div className="mb-1container1gap w-full grid-cols-12 grid-rows-6 items-center gap-[10px] lg:grid">
      <div
        className={`relative z-10 col-span-7 row-start-1 row-end-[-1] ${
          isEven ? 'col-start-1' : 'col-end-13'
        } `}
      >
        <p
          className={`${
            isEven ? 'text-start' : 'text-end'
          } mx-3 font-spaceMono text-sm font-light
            text-primary`}
        >
          {date}
        </p>
        <h3
          className={`mx-3 mb-4 font-spaceMono text-4xl font-bold tracking-normal ${
            isEven ? 'text-start' : 'text-end'
          }`}
        >
          {title}
        </h3>
        <div>
          <div className="rounded-lg border border-white border-opacity-5 bg-secondary p-6">
            <p className="my-1 font-poppins text-base font-normal tracking-widest">
              {description}
            </p>
          </div>
          <ul
            className={`mx-4 mt-2 flex ${
              isEven ? 'justify-start' : 'justify-end'
            }`}
          >
            {tags.map((tag) => (
              <li
                className="mx-px rounded-lg bg-background px-2 py-1 font-spaceMono text-sm font-light text-primary"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          {icons && (
            <ul
              className={`mx-4 mt-2 flex ${
                isEven ? 'justify-start' : 'justify-end'
              }`}
            >
              {icons.map((icon, iconIndex) => (
                <li key={iconIndex}>
                  <a
                    href={icon.link}
                    target="_blank"
                    aria-label={`${title} ${icon.name}`}
                  >
                    {React.cloneElement(icon.icon, {
                      className:
                        'hover:hover:scale-110 mx-3 h-6 w-6 text-primary hover:scale-110  hover:text-white',
                    })}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div
        className={`project--image relative z-0 col-span-7  row-start-1 row-end-[-1] hidden aspect-[16/10] max-w-[68vh] overflow-hidden rounded-lg border-2 border-secondary bg-primaryFade hover:bg-transparent lg:flex ${
          isEven ? 'col-end-[-1]' : 'col-start-1'
        }`}
      >
        <Image
          src={img}
          alt=""
          quality={85}
          layout="fill"
          objectFit="cover"
          className=" mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default Project;

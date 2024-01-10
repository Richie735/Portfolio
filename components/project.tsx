import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectProps = {
  index: number;
  title: string;
  tags: string[];
  icons: {
    name: string;
    link: string;
    icon: React.ReactElement;
  }[];
  description: string;
};

const Project = ({ index, title, tags, icons, description }: ProjectProps) => {
  let isEven: boolean;
  index % 2 === 0 ? (isEven = true) : (isEven = false);

  return (
    <div className="mb-1container1gap grid w-full grid-cols-12 grid-rows-6 items-center gap-[10px]">
      <div
        className={`relative z-10 col-span-7 row-start-1 row-end-[-1] ${
          isEven ? 'col-start-1' : 'col-end-13'
        } `}
      >
        <h4
          className={`mx-3 mb-4 font-spaceMono text-4xl font-bold tracking-normal ${
            isEven ? 'text-start' : 'text-end'
          }`}
        >
          {title}
        </h4>
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
                className="mx-3 font-spaceMono text-sm font-light text-primary"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
          {Array.isArray(icons) && (
            <ul
              className={`mx-4 mt-2 flex ${
                isEven ? 'justify-start' : 'justify-end'
              }`}
            >
              {icons.map((icon, iconIndex) => (
                <li key={iconIndex}>
                  <Link href={icon.link} target="_blank">
                    {React.cloneElement(icon.icon, {
                      className:
                        'hover:hover:scale-110 mx-3 h-6 w-6 text-primary hover:scale-110  hover:text-white',
                    })}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div
        className={`project--image relative z-0 col-span-7  row-start-1 row-end-[-1] aspect-video h-full overflow-hidden rounded-lg border-2 border-secondary bg-primaryFade hover:bg-transparent ${
          isEven ? 'col-end-[-1]' : 'col-start-1'
        }`}
      >
        <Image
          src="/assets/images/Placeholder.png"
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

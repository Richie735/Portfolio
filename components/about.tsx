import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className=" -mt-[350px] h-screen scroll-mt-[200px] px-4containersExtraGap"
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

      <div className="mt-2gap mr-1gap flex gap-1gap">
        <div className="w-1/3">
          <div className="img-container border-primaryFade relative mx-10 aspect-[10/16] overflow-hidden rounded-2xl">
            <div className="absolute left-0 top-0 h-full w-full">
              <Image
                src="/assets/images/Self.jpg"
                alt="Ricardo Pereira"
                layout="fill"
                objectFit="cover"
                className="img-effect select-none"
              />
            </div>
            <div className="relative z-10 m-4 flex h-[calc(100%-2rem)] flex-grow flex-col items-center rounded-xl border border-primary/50" />
            <div className="bg-primaryFade2 absolute left-0 top-0 h-full w-full" />
            <div className="line-bg-effect border-primaryFade absolute left-0 top-0 h-full w-full rounded-2xl border-[3px]" />
          </div>
        </div>

        <div className="w-2/3">
          <div className="m-1gap">
            <p className="font-poppins text-base font-normal tracking-widest">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae sapiente porro assumenda repudiandae, doloribus dicta
              est corrupti a aliquam quo rem ad ea doloremque voluptate officia
              nostrum quasi perferendis totam.
            </p>
            <p className="mt-1gap font-poppins text-base font-normal tracking-widest">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, aspernatur sunt. Facilis impedit distinctio
              praesentium omnis tenetur, dolore, quam molestias aspernatur, vero
              laborum veniam. Officiis veniam quam dolor molestias minus?
            </p>
          </div>
          <div className="gap-1container2gap flex justify-center">
            <div>BUTTON 1</div>
            <div>BUTTON 2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

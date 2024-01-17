import { backgroundData } from '@/lib/data';

const Background = () => {
  return (
    <section
      id="background"
      className="mx-0 mt-[1000px] h-screen lg:mx-4containersExtraGap lg:mt-0 lg:scroll-mt-[134px]"
    >
      <div className="mx-4 flex items-center lg:mx-1gap">
        <div className=" mr-1gap h-px w-full bg-white" />
        <h2 className="flex items-center font-spaceMono text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className=" font-spaceMono text-3xl font-normal tracking-tight text-primary lg:text-4xl">
            02.
          </span>
          Background
        </h2>
      </div>

      <ol className="relative mx-1gap mt-1gap border-e border-primaryFade lg:mx-1container lg:mr-[335px]">
        <div className="mb-10 me-8 h-1gap"> </div>
        {backgroundData.map((item, index) => (
          <li key={index} className="mb-10 me-8 mt-10 flex justify-end ">
            <span className="absolute -end-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-text-secondary ring-4 ring-primaryFade2">
              {item.icon}
            </span>
            <div className="flex flex-col items-end justify-end">
              <p className="mb-1 block pt-[5px] font-poppins text-sm font-normal leading-none text-primary">
                {item.duration}
              </p>
              <h3 className="mb-2 text-right font-spaceMono text-xl font-bold tracking-tight text-text-primary">
                {item.title}
              </h3>

              <p className="mb-4 font-spaceMono text-sm font-normal text-primaryFade">
                {item.place}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Background;

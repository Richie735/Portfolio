'use client';

type SkillCardProps = {
  title: string;
  icon: string;
};
const SkillCard = ({ title, icon }: SkillCardProps) => {
  return (
    <div className="about__skill-card relative h-1container w-1container rounded-xl bg-background bg-opacity-20">
      <div className="about__skill-card--border"></div>
      <div className="relative z-[2] m-px h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-xl bg-secondary">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div
            dangerouslySetInnerHTML={{ __html: icon }}
            className="h-7 w-7"
          ></div>
          <p className="mt-1 font-spaceMono text-xs font-normal tracking-wide text-text-primary">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

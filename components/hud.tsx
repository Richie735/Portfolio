import { LuGithub, LuLinkedin } from 'react-icons/lu';

function Hud() {
  return (
    <div className="relative z-50">
      <div className="fixed bottom-0 left-4containers flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-primary" />
        <div className="primary-gradient h-[50vh] w-px" />
      </div>
      <div className="fixed right-4containers top-0 flex flex-col items-center">
        <div className="primary-gradient h-[90px] w-px rotate-180" />
        <LuLinkedin className=" mt-4 h-6 w-6 text-primary" />
        <LuGithub className=" mt-4 h-6 w-6 text-primary" />
      </div>
    </div>
  );
}

export default Hud;

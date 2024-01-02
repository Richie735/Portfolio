import About from '@/components/about';
import Hud from '@/components/hud';
import Intro from '@/components/intro';

export default function Home() {
  return (
    <main className="relative">
      <Hud />
      <div className="secondary-gradient absolute left-[342px] z-0 mt-[60px] h-full w-px" />
      <Intro />
      <About />
      <div className=" h-screen"></div>
    </main>
  );
}

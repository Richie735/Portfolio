import About from '@/components/about';
import Background from '@/components/background';
import Hud from '@/components/hud';
import Intro from '@/components/intro';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main className="relative">
      <Hud />
      <div className="secondary-gradient absolute left-[342px] z-0 mt-[60px] h-full w-px opacity-0 lg:opacity-100" />
      <Intro />
      <About />
      <Background />
      <Projects />
    </main>
  );
}

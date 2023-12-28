import Hero from '@/components/hero';
import Hud from '@/components/hud';

export default function Home() {
  return (
    <main className="relative">
      <Hud />
      <div className="secondary-gradient absolute left-[342px] z-0 mt-[60px] h-full w-px" />
      <Hero />
    </main>
  );
}

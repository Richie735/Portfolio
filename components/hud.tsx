'use client';

import { useEffect, useState } from 'react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

function Hud() {
  const [text, setText] = useState('Your Text Here');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    const handleMouseOver = () => {
      let iteration = 0;
      const interval = setInterval(() => {
        setText((prevText) =>
          prevText
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return letter;
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join(''),
        );
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = document.querySelector('h1');
    if (h1Element) {
      h1Element.addEventListener('mouseover', handleMouseOver);

      // Clean up function
      return () => {
        h1Element.removeEventListener('mouseover', handleMouseOver);
      };
    }
    // Return a no-op function if h1Element is null
    return () => {};
  }, [text, letters]);

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

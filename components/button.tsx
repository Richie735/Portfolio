'use client';

import Link from 'next/link';

type ButtonProps = {
  title: string;
  link?: string | null;
  textSize?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
};

const Button = ({
  title,
  link,
  textSize,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
}: ButtonProps) => {
  const hBgColor = hoverBgColor
    ? 'hover:bg-' + hoverBgColor
    : 'hover:bg-primary';
  const hTxColor = hoverTextColor
    ? 'hover:text-' + hoverTextColor
    : 'hover:text-primary';

  return (
    <Link
      type="button"
      href={link ? link : '#'}
      className={`button__clip-path relative flex h-10 cursor-pointer items-center  justify-center overflow-hidden rounded px-5 font-spaceMono font-bold tracking-wide transition-colors duration-200 ease-in-out
    ${textSize ? 'text-' + textSize : 'text-xl'}
    ${bgColor ? 'bg-' + bgColor : 'bg-primaryFade'} 
    ${textColor ? 'text-' + textColor : 'text-background'}  
    ${hBgColor}
    ${hTxColor}`}
    >
      {title}
    </Link>
  );
};

export default Button;

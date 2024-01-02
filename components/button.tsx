'use client';

import Link from 'next/link';

type ButtonProps = {
  title: string;
  link?: string | null;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
};

const Button = ({
  title,
  link,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
}: ButtonProps) => {
  return (
    <Link
      type="button"
      href={link ? link : '#'}
      className={`clip-custom relative flex h-10 cursor-pointer items-center  justify-center overflow-hidden rounded px-5 font-spaceMono text-xl font-bold tracking-wide 
      ${textColor ? textColor : 'text-background'}  ${
        bgColor ? bgColor : 'bg-primaryFade'
      } ${hoverBgColor ? 'hover:' + hoverBgColor : 'hover:bg-primary'} ${
        hoverTextColor ? 'hover:' + hoverBgColor : ''
      } `}
    >
      {title}
    </Link>
  );
};

export default Button;

import type { ReactNode } from 'react';

type IHeroOneLogoProps = {
  src: string;
  size: number;
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneLogo = (props: IHeroOneLogoProps) => (
  <header className="text-center">
    <img
      style={{ display: 'inline' }}
      src={props.src}
      width={props.size}
      alt="logo"
    />
    <h1 className="mb-12 mt-6 whitespace-pre-line text-3xl font-bold text-gray-900">
      {props.title}
    </h1>
    {props.button}
    <div className="mt-2">{props.description}</div>
  </header>
);

export { HeroOneLogo };

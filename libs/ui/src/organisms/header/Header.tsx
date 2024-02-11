import { Caption, Link } from '../../atoms';

import photo from './portrait.png';
import EnvelopeIcon from './envelopeIcon.svg';

interface HeaderProps {
  name: string;
  description: string;
}

export const Header = ({ name, description }: HeaderProps) => (
  <header className="grid grid-cols-1 gap-0 md:grid-cols-[auto_1fr] items-center md:gap-16 mt-[-30px]">
    <div>
      <img className="min-w-32 w-1/2 md:w-96" src={photo} alt="portrait" />
    </div>
    <div>
      <Caption>THIS IS:</Caption>
      <h1 className="block text-2xl md:text-3xl lg:text-4xl font-black text-left mt-3 mb-9">
        {name}
      </h1>
      <p className="mb-8">{description}</p>
      <Link href="#contact">
        <div className="w-6 h-5 mr-3 sm:mr-4 md:mr-5 sm:scale-110 md:scale-125">
          <img src={EnvelopeIcon} alt="" />
        </div>
        Contact
      </Link>
    </div>
  </header>
);

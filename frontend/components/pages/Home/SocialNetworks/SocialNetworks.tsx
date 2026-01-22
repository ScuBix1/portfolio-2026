import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import Link from 'next/link';
import { BiLogoDiscord, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
import { HiArrowDown } from 'react-icons/hi';

type SocialNetworksProps = {
  className?: string;
};

export default function SocialNetworks(props: SocialNetworksProps) {
  const { className } = props;
  return (
    <div className={clsx(className)}>
      <div className='flex gap-2 items-center mb-4'>
        <h3 className='text-xl font-bold text-gradient-emerald-to-blue'>
          Mes réseaux sociaux
        </h3>
        <HiArrowDown className='text-2xl text-sky-400' />
      </div>

      <div className='flex flex-col gap-3'>
        <Button variant='socialNetworks' asChild>
          <Link
            href='https://github.com/ScuBix1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BiLogoGithub /> Github
          </Link>
        </Button>
        <Button variant='socialNetworks' asChild>
          <Link
            href='https://www.linkedin.com/in/bastian-monnin-036178208/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BiLogoLinkedin /> LinkedIn
          </Link>
        </Button>
        <Button variant='socialNetworks' asChild>
          <Link
            href='https://discord.com/users/284818690191392768'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BiLogoDiscord /> Discord
          </Link>
        </Button>
      </div>
    </div>
  );
}

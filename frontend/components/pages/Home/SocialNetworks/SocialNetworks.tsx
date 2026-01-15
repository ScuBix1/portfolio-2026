import { Button } from '@/components/ui/button';
import clsx from 'clsx';
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
        <Button variant='socialNetworks'>
          <BiLogoGithub /> Github
        </Button>
        <Button variant='socialNetworks'>
          <BiLogoLinkedin /> LinkedIn
        </Button>
        <Button variant='socialNetworks'>
          <BiLogoDiscord /> Discord
        </Button>
      </div>
    </div>
  );
}

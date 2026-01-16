import { AppLink } from '@/components/AppLink/AppLink';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { BsArrowLeft } from 'react-icons/bs';

type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <div className={clsx(className)}>
      <AppLink href='/'>
        <Button
          variant='ghost'
          className='rounded-full duration-300 hover:bg-black hover:text-white'
        >
          Retour <BsArrowLeft className='ml-2' />
        </Button>
      </AppLink>
    </div>
  );
};

export default Header;

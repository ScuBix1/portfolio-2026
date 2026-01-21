import { AppLink } from '@/components/AppLink/AppLink';
import { Button } from '@/components/ui/button';
import { BsArrowLeft } from 'react-icons/bs';

type BackHomeProps = {
  className?: string;
};

const BackHome = (props: BackHomeProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <AppLink href='/'>
        <Button
          variant='ghost'
          className='rounded-full duration-300 cursor-pointer hover:bg-black hover:text-white'
        >
          Retour <BsArrowLeft className='ml-2' />
        </Button>
      </AppLink>
    </div>
  );
};

export default BackHome;

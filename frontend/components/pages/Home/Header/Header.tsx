import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { BiBuilding } from 'react-icons/bi';

type HeaderProps = {
  className?: string;
};

export default function Header(props: HeaderProps) {
  const { className } = props;

  return (
    <div
      className={clsx(
        'flex flex-col-reverse items-start gap-3 sm:flex-row sm:justify-between sm:items-center sm:gap-10',
        className
      )}
    >
      <div className='flex items-center gap-3'>
        <BiBuilding className='w-5 h-5' />
        <h3 className='text-(--gray-information)'>Lyon, France</h3>
      </div>

      <Button
        variant='ghost'
        className='hover:bg-black hover:text-white duration-300 rounded-full pl-0 sm:pl-1'
      >
        <div className='relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 '></span>
          <span className='inline-flex rounded-full h-3 w-3 bg-green-500'></span>
        </div>
        Disponible pour travailler
      </Button>
    </div>
  );
}

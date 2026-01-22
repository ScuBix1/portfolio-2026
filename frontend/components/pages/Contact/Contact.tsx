import BackHome from '@/components/BackHome/BackHome';
import Main from '@/components/pages/Contact/Main/Main';
import clsx from 'clsx';

type ContactProps = {
  className?: string;
};

export default function Contact(props: ContactProps) {
  const { className } = props;

  return (
    <div
      className={clsx(
        'min-h-screen flex items-center justify-center',
        className
      )}
    >
      <main className='w-full max-w-[90%] m-3 space-y-8 border border-gray-700/50 rounded-xl p-5 backdrop-blur-xl bg-(--background)/80 z-20 sm:p-10 md:m-8 md:max-w-[85%] xl:max-w-[60%]'>
        <BackHome />
        <Main />
      </main>
    </div>
  );
}

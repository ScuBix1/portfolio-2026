import Header from '@/components/pages/Home/Header/Header';
import Main from '@/components/pages/Home/Main/Main';
import clsx from 'clsx';

type HomeProps = {
  className?: string;
};

export default function Home(props: HomeProps) {
  const { className } = props;

  return (
    <div
      className={clsx(
        'min-h-screen flex items-center justify-center',
        className
      )}
    >
      <main className='w-full max-w-xl m-3 space-y-8 border border-gray-700/50 rounded-xl p-5 backdrop-blur-xl bg-(--background)/80 z-20 sm:p-10 md:m-8'>
        <Header />
        <Main />
      </main>
    </div>
  );
}

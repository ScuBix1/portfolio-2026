import Header from '@/components/pages/About/Header/Header';
import Main from '@/components/pages/About/Main/Main';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-xl m-3 space-y-8 border border-gray-700/50 rounded-xl p-5 backdrop-blur-xl bg-(--background)/80 z-20 sm:p-10 md:m-8'>
        <Header />
        <Main />
      </main>
    </div>
  );
}

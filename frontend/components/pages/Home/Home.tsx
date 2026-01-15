import Header from '@/components/pages/Home/Header/Header';
import Main from '@/components/pages/Home/Main/Main';

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='w-full max-w-xl m-3 space-y-8 border border-gray-700/50 rounded-xl p-5 backdrop-blur-xl bg-(--background)/80 z-20 sm:p-10 md:m-8'>
        <Header />
        <Main />
      </main>
    </div>
  );
}

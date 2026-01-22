import Card from '@/components/pages/Contact/Card/Card';
import { BiMapPin } from 'react-icons/bi';
import { MdMail, MdPhone } from 'react-icons/md';

type MainProps = {
  className?: string;
};

export default function Main(props: MainProps) {
  const { className } = props;

  return (
    <div className={className}>
      <div className='space-y-6'>
        <h1 className='text-4xl font-bold text-gradient-emerald-to-blue'>
          Entrer en contact
        </h1>
        <div className='space-y-6'>
          <p className='text-pretty tracking-tight'>
            Passionné par le développement et toujours curieux de nouveaux
            défis, je serais ravi d’échanger avec vous. Parlons de votre projet
            et explorons ensemble les possibilités de collaboration !
          </p>

          <div className='space-y-4'>
            <Card>
              <MdMail className='w-5 h-5 text-emerald-400' />
              <div>
                <h3 className='font-medium text-white/75'>Email</h3>
                <a
                  href='mailto:bastian.monnin1@gmail.com'
                  className=' text-white/75 underline hover:text-emerald-400 transition-colors'
                >
                  bastian.monnin1@gmail.com
                </a>
              </div>
            </Card>
            <Card>
              <MdPhone className='w-5 h-5 text-emerald-400' />
              <div>
                <h3 className='font-medium text-white/75'>Téléphone</h3>
                <a
                  href='tel:+33652929233'
                  className=' text-white/75 underline hover:text-emerald-400 transition-colors'
                >
                  06.52.92.92.33
                </a>
              </div>
            </Card>
            <Card>
              <BiMapPin className='w-5 h-5 text-emerald-400' />
              <div>
                <h3 className='font-medium text-white/75'>Localité</h3>
                <p className=' text-white/75'>Lyon, France</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

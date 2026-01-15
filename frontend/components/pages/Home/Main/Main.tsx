import { AppLink } from '@/components/AppLink/AppLink';
import Navigation from '@/components/pages/Home/Navigation/Navigation';
import SocialNetworks from '@/components/pages/Home/SocialNetworks/SocialNetworks';

type MainProps = {
  className?: string;
};

export default function Main(props: MainProps) {
  const { className } = props;

  return (
    <>
      <div>
        <h1 className='text-4xl'>Bastian MONNIN</h1>
        <h3 className='text-xl font-bold mt-2 text-gradient-emerald-to-blue'>
          Développeur Web
        </h3>
        <p>
          Bonjour, c'est Bastian. Je suis un{' '}
          <strong>développeur web junior</strong> avec un peu plus d'un an
          d'expérience professionnelle. Je suis actuellement en recherche d'une{' '}
          <strong>alternance pour un master</strong>.{' '}
          <AppLink href='/contact' variant='emeraldToBlue'>
            Contactez-moi
          </AppLink>{' '}
          si vous souhaitez former un développeur engagé pour assurer la
          continuité et l’évolution de votre projet.
        </p>
      </div>

      <Navigation />

      <SocialNetworks />
    </>
  );
}

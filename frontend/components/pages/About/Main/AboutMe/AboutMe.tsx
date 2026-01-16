import clsx from 'clsx';

type AboutMeProps = {
  className?: string;
};

export default function AboutMe(props: AboutMeProps) {
  const { className } = props;

  return (
    <div className={clsx('space-y-6', className)}>
      <h1 className='text-4xl font-bold text-gradient-emerald-to-blue'>
        À propos de moi
      </h1>
      <div className='space-y-4 text-pretty tracking-tight'>
        <p>
          J’ai découvert le monde du <strong>développement web</strong> à l’âge
          de 15 ans, et depuis ce jour, j’ai su que c’était dans cette voie que
          je voulais avancer. Cette première curiosité est rapidement devenue
          une passion, puis un véritable projet de vie. J’ai donc naturellement
          orienté mes études dans ce domaine, avec l’envie constante
          d’apprendre, de comprendre et de créer.
        </p>
        <p>
          Aujourd’hui, je suis un <strong>développeur web</strong> junior avec
          plus d’un an d’expérience professionnelle et je recherche un{' '}
          <strong>master en alternance</strong> pour continuer à progresser
          techniquement et humainement. Même dans un marché tendu, je reste
          convaincu d’une chose : je ne renoncerai pas à mon objectif de devenir
          développeur. La persévérance, l’effort et la remise en question font
          partie de mon ADN.
        </p>
      </div>
    </div>
  );
}

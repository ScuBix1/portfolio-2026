import AboutMe from '@/components/pages/About/Main/AboutMe/AboutMe';
import Education from '@/components/pages/About/Main/Education/Education';
import ProfessionalExperience from '@/components/pages/About/Main/ProfessionalExperience/ProfessionalExperience';
import clsx from 'clsx';

type MainProps = {
  className?: string;
};

export default function Main(props: MainProps) {
  const { className } = props;

  return (
    <div className={clsx(className)}>
      <AboutMe className='mb-8' />
      <ProfessionalExperience className='mb-8' />
      <Education />
    </div>
  );
}

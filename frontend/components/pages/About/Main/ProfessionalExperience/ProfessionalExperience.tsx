import clsx from 'clsx';

type ProfessionalExperienceProps = {
  className?: string;
};

export default function ProfessionalExperience(
  props: ProfessionalExperienceProps
) {
  const { className } = props;

  return (
    <div className={clsx('space-y-4', className)}>
      <h2 className='text-2xl font-bold text-gradient-emerald-to-blue'>
        Expériences professionnelles
      </h2>
      <div className='space-y-1'>
        <p className='text-lg font-medium'>Apprenti développeur front-end</p>
        <p className='text-(--gray-information)'>Reflet Digital, 2024-2025 </p>
      </div>
      <div className='space-y-1'>
        <p className='text-lg font-medium'>Stagiaire développeur full-stack</p>
        <p className='text-(--gray-information)'>
          Iléa.app, janvier 2024 - février 2024{' '}
        </p>
      </div>
      <div className='space-y-1'>
        <p className='text-lg font-medium'>
          Intérimaire industrie (job étudiant)
        </p>
        <p className='text-(--gray-information)'>Manpower, 2019-2023</p>
      </div>
    </div>
  );
}

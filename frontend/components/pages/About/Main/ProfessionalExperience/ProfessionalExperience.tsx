import Card from '@/components/pages/About/Card/Card';
import clsx from 'clsx';

type ProfessionalExperienceProps = {
  className?: string;
};

export default function ProfessionalExperience(
  props: ProfessionalExperienceProps
) {
  const { className } = props;

  return (
    <div className={clsx('space-y-6 md:space-y-4', className)}>
      <h2 className='text-2xl font-bold text-gradient-emerald-to-blue'>
        Expériences professionnelles
      </h2>
      <Card
        className='mb-4'
        name='Apprenti développeur front-end'
        placeOrCompany='Reflet Digital'
        srcCompanyLogo='/company/reflet-digital.png'
        date='2024-2025'
        companyWebsiteUrl='https://www.refletcommunication.com/fr'
      />
      <Card
        name='Stagiaire développeur full-stack'
        placeOrCompany='Iléa.app'
        srcCompanyLogo='/company/ilea-app.png'
        date='janvier 2024 - février 2024'
      />
      <Card
        name='Intérimaire industrie (job étudiant)'
        placeOrCompany='Manpower'
        srcCompanyLogo='/company/manpower.png'
        date='2019-2023'
      />
    </div>
  );
}

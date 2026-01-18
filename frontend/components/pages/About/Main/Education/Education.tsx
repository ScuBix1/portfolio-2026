import clsx from 'clsx';
import Card from '../../Card/Card';

type EducationProps = {
  className?: string;
};

export default function Education(props: EducationProps) {
  const { className } = props;

  return (
    <div className={clsx('space-y-6 md:space-y-4', className)}>
      <h2 className='text-2xl font-bold text-gradient-emerald-to-blue'>
        Diplômes
      </h2>
      <Card
        name="Bachelor Concepteur Développeur d'application (Bac +3)"
        placeOrCompany='MyDigitalSchool'
        srcCompanyLogo='/education/my-digital-school.png'
        date='2024-2025'
      />
      <Card
        name='TP Développeur Web et Web Mobile (Bac +2)'
        placeOrCompany='OnlineFormaPro'
        srcCompanyLogo='/education/online-forma-pro.jpg'
        date='2023-2024'
      />
      <Card
        name='Baccalauréat STI2D option SIN'
        placeOrCompany='Lycée Gustave Eiffel'
        srcCompanyLogo='/education/gustave-eiffel.png'
        date='2018-2019'
      />
    </div>
  );
}

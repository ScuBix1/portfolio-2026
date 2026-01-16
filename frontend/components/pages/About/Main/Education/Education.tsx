import clsx from 'clsx';

type EducationProps = {
  className?: string;
};

export default function Education(props: EducationProps) {
  const { className } = props;

  return (
    <div className={clsx('space-y-4', className)}>
      <h2 className='text-2xl font-bold text-gradient-emerald-to-blue'>
        Diplômes
      </h2>
      <div className='space-y-1'>
        <p className='text-lg font-medium'>
          Bachelor Concepteur Développeur d'application (Bac +3)
        </p>
        <p className='text-(--gray-information)'>MyDigitalSchool, 2024-2025 </p>
      </div>
      <div className='space-y-1'>
        <p className='text-lg font-medium'>
          TP Développeur Web et Web Mobile (Bac +2)
        </p>
        <p className='text-(--gray-information)'>OnlineFormaPro, 2023-2024 </p>
      </div>
      <div className='space-y-1'>
        <p className='text-lg font-medium'>Baccalauréat STI2D option SIN</p>
        <p className='text-(--gray-information)'>
          Lycée Gustave Eiffel, 2018-2019{' '}
        </p>
      </div>
    </div>
  );
}

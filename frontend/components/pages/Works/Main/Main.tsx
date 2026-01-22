import Card from '@/components/pages/Works/Card/Card';
import projectsData from '@/data/projects.json';

type MainProps = {
  className?: string;
};

export default function Main(props: MainProps) {
  const { className } = props;

  if (projectsData.projects === undefined) {
    return null;
  }

  return (
    <div className={className}>
      <h1 className='text-5xl font-bold text-gradient-emerald-to-blue mb-8'>
        Réalisations
      </h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projectsData.projects.map((project, key) => (
          <Card project={project} key={`works-project-${key}`} />
        ))}
      </div>
    </div>
  );
}

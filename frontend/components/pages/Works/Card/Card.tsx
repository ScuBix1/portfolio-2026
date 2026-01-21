import { Button } from '@/components/ui/button';
import { ProjectType } from '@/types/project';
import { clsx } from 'clsx';
import Image from 'next/image';

type CardProps = {
  className?: string;
  project: ProjectType;
};

export default function Card(props: CardProps) {
  const { className, project } = props;

  return (
    <div
      className={clsx(
        'group overflow-hidden rounded-lg border hover:scale-105 border-neutral-800/70 bg-black/50 transition-all duration-300',
        className
      )}
    >
      <div className='relative h-48 w-full overflow-hidden'>
        <Image
          src={project.image}
          alt={`photo du projet ${project.title}`}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-110'
        />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
        <p className='text-gray-300 mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tags.map((tag, index) => (
            <span
              className='px-2 py-1 text-sm rounded-full bg-slate-800/50 textgray-300 border border-neutral-800/70'
              key={`works-project-tags-${index}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='flex gap-3'>
          <Button variant='outline' className='flex-1 text-white '></Button>
          <Button variant='ghost'></Button>
        </div>
      </div>
    </div>
  );
}

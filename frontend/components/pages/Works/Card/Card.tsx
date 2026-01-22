import { Button } from '@/components/ui/button';
import { ProjectType } from '@/types/project';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';
import { CgExternal } from 'react-icons/cg';

type CardProps = {
  className?: string;
  project: ProjectType;
};

export default function Card(props: CardProps) {
  const { className, project } = props;
  const buttonClassName =
    'flex-1 text-white bg-black backdrop-blur-sm border border-neutral-500 transition-color duration-200 ease-linear cursor-pointer p-0';

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
        <h3 className='text-xl text-white font-semibold mb-2'>
          {project.title}
        </h3>
        <p className='text-gray-300 mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tags.map((tag, index) => (
            <span
              className='px-2 py-1 text-sm rounded-full bg-slate-800/50 textgray-300 border border-neutral-800/70 text-white'
              key={`works-project-tags-${index}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          {project.githubFrontProjectLink && project.githubBackProjectLink && (
            <div className='flex gap-3 items-center flex-wrap'>
              <Button variant='outline' className={buttonClassName} asChild>
                <Link
                  href={project.githubFrontProjectLink}
                  aria-label='acceder au code sur github'
                  className='flex flex-1 px-4 py-2 items-center justify-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BiLogoGithub className='h-4 w-4 mr-2' />
                  Code Front-end
                </Link>
              </Button>
              <Button variant='outline' className={buttonClassName} asChild>
                <Link
                  href={project.githubBackProjectLink}
                  aria-label='acceder au code sur github'
                  className='flex flex-1 px-4 py-2 items-center justify-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BiLogoGithub className='h-4 w-4 mr-2' />
                  Code Back-end
                </Link>
              </Button>
            </div>
          )}
          {project.githubProjectLink && (
            <Button variant='outline' className={buttonClassName} asChild>
              <Link
                href={project.githubProjectLink}
                aria-label='acceder au code sur github'
                className='flex flex-1 px-4 py-2 items-center justify-center'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BiLogoGithub className='h-4 w-4 mr-2' />
                Code
              </Link>
            </Button>
          )}
          {project.demoProjectLink && (
            <Button variant='ghost' className={buttonClassName} asChild>
              <Link
                href={project.demoProjectLink}
                aria-label='acceder a la demonstration'
                className='flex flex-1 px-4 py-2 items-center justify-center'
                target='_blank'
                rel='noopener noreferrer'
              >
                <CgExternal className='h-4 w-4 mr-2' />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

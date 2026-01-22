import SkillsData from '@/data/skills.json';
import Image from 'next/image';
import {
  FaDocker,
  FaGithub,
  FaGitlab,
  FaNodeJs,
  FaPhp,
  FaReact,
} from 'react-icons/fa';
import {
  SiGithubactions,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiSlack,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

type MainProps = {
  className?: string;
};

export default function Main(props: MainProps) {
  const { className } = props;
  const icons = {
    FaReact,
    FaNodeJs,
    FaPhp,
    FaGithub,
    FaGitlab,
    FaDocker,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNestjs,
    SiMongodb,
    SiPostgresql,
    SiGithubactions,
    SiSlack,
  };

  return (
    <div className={className}>
      <div className='space-y-6'>
        <h1 className='text-4xl font-bold text-gradient-emerald-to-blue '>
          Compétences techniques
        </h1>

        <div className='space-y-6'>
          {SkillsData.categories.map((category, index) => (
            <div key={`skills-category-${index}`} className='space-y-4'>
              <h2 className='text-2xl font-bold text-gradient-emerald-to-blue'>
                {category.name}
              </h2>
              <div className='grid grid-cols-2 gap-4'>
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon
                    ? icons[skill.icon as keyof typeof icons]
                    : null;
                  return (
                    <div
                      key={`skills-category-skill-${index}`}
                      className='p-4 rounded-lg border border-gray-700/50 bg-black/40'
                    >
                      <h3 className='flex items-center gap-2 font-medium mb2 text-white/75'>
                        {Icon && (
                          <Icon className='text-2xl w-6 h-6 text-emerald-400' />
                        )}
                        {skill.image && (
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={24}
                            height={24}
                          />
                        )}
                        {skill.name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { AppLink } from '@/components/AppLink/AppLink';
import { clsx } from 'clsx';
import { BiChevronRight } from 'react-icons/bi';

type NavigationProps = {
  className?: string;
};

export default function Navigation(props: NavigationProps) {
  const { className } = props;
  const navigationLinkClassName = 'w-1/2';
  const biChevronRightClassName =
    'mr-5 text-2xl translate-x-0 text-gray-300 opacity-0 transition-all duration-200 group-hover:translate-x-3 group-hover:opacity-100';

  return (
    <nav className={clsx('space-y-4', className)}>
      <h3 className='text-xl font-bold text-(--emerald-title)'>Menu</h3>
      <div className='flex flex-col gap-3'>
        <AppLink
          href='/about'
          variant='menu'
          className={navigationLinkClassName}
        >
          <span>À propos</span>
          <BiChevronRight className={biChevronRightClassName} />
        </AppLink>
        <AppLink
          href='/works'
          variant='menu'
          className={navigationLinkClassName}
        >
          <span>Réalisations</span>
          <BiChevronRight className={biChevronRightClassName} />
        </AppLink>
        <AppLink
          href='/skills'
          variant='menu'
          className={navigationLinkClassName}
        >
          <span>Compétences</span>
          <BiChevronRight className={biChevronRightClassName} />
        </AppLink>
        <AppLink
          href='/contact'
          variant='menu'
          className={navigationLinkClassName}
        >
          <span>Contact</span>
          <BiChevronRight className={biChevronRightClassName} />
        </AppLink>
      </div>
    </nav>
  );
}

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type DefaultCardProps = {
  className?: string;
  srcCompanyLogo?: string;
  name: string;
  placeOrCompany: string;
  date: string;
};

type CardProps = DefaultCardProps & {
  companyWebsiteUrl?: string;
  linkClassName?: string;
};

function DefaultCard(props: DefaultCardProps) {
  const { className, srcCompanyLogo, name, placeOrCompany, date } = props;

  return (
    <div
      className={clsx(
        'flex flex-col items-start justify-start gap-1 md:flex-row md:items-center md:gap-4',
        className
      )}
    >
      {srcCompanyLogo && (
        <Image
          width={50}
          height={50}
          src={srcCompanyLogo}
          alt='Logo de la société'
          aria-hidden
        />
      )}
      <div className='space-y-1'>
        <p className='text-lg font-medium'>{name}</p>
        <p className='text-(--gray-information)'>
          {placeOrCompany}, {date}
        </p>
      </div>
    </div>
  );
}

export default function Card(props: CardProps) {
  const {
    className,
    srcCompanyLogo,
    name,
    placeOrCompany,
    date,
    companyWebsiteUrl,
    linkClassName,
  } = props;

  if (companyWebsiteUrl) {
    return (
      <Link href={companyWebsiteUrl} className={linkClassName}>
        <DefaultCard
          className={className}
          srcCompanyLogo={srcCompanyLogo}
          name={name}
          placeOrCompany={placeOrCompany}
          date={date}
        />
      </Link>
    );
  }
  return (
    <DefaultCard
      className={className}
      srcCompanyLogo={srcCompanyLogo}
      name={name}
      placeOrCompany={placeOrCompany}
      date={date}
    />
  );
}

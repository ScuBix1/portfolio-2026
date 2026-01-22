import { clsx } from 'clsx';
import { ReactNode } from 'react';
type CardProps = {
  className?: string;
  children?: ReactNode;
};

export default function Card(props: CardProps) {
  const { className, children } = props;

  return (
    <div
      className={clsx(
        'flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40',
        className
      )}
    >
      {children}
    </div>
  );
}

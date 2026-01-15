import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { ComponentProps } from 'react';

const linkVariants = cva(
  'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
  {
    variants: {
      variant: {
        default: 'text-foreground hover:text-primary',
        menu: 'border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear rounded-lg hover:bg-zinc-800/40 hover:text-white',
        emeraldToBlue:
          'font-bold text-gradient-emerald-to-blue opacity-90 hover:opacity-100 transition-opacity',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type AppLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof linkVariants>;

export function AppLink({ className, variant, ...props }: AppLinkProps) {
  return (
    <Link className={cn(linkVariants({ variant, className }))} {...props} />
  );
}

export { linkVariants };

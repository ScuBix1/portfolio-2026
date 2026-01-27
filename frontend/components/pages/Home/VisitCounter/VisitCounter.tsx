'use client';

import { useCounter } from '@/contexts/trackerContext';
import { animated, useSpring } from '@react-spring/web';

type VisitCounterProps = {
  className?: string;
};

export default function VisitCounter(props: VisitCounterProps) {
  const { className } = props;
  const { count } = useCounter();

  const { number } = useSpring({
    from: { number: 0 },
    number: count,
    config: { duration: 500 },
  });

  return (
    <div className={className}>
      <h3 className='text-xl font-bold text-gradient-emerald-to-blue'>
        Nombre de visiteurs:
      </h3>
      <animated.span className='text-2xl bold'>
        {number.to((n) => Math.floor(n))}
      </animated.span>
    </div>
  );
}

'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type CounterContextType = { count: number };

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited');

    fetch('/api/counter')
      .then((res) => res.json())
      .then((data) => setCount(data.count));

    if (!hasVisited) {
      sessionStorage.setItem('visited', 'true');
      fetch('/api/counter/up');
    }
  }, []);

  return (
    <CounterContext.Provider value={{ count }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error('useCounter doit être utilisé dans CounterProvider');
  return context;
}

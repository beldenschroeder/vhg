'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import * as styles from './Body.css';

const Body = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLElement | null>(null);

  // Focus the container element when the component mounts.
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  return (
    <main ref={containerRef} tabIndex={-1} className={styles.body}>
      {children}
    </main>
  );
};

export default Body;

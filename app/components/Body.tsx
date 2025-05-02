'use client';

import React, { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { bodyTitle } from '@/styles/typography';
import * as styles from './Body.css';

const Body = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  // Focus the container element when the component mounts.
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  return (
    <main ref={containerRef} tabIndex={-1} className={styles.body}>
      <Typography component="h2" sx={bodyTitle}>
        Von Herff Gallery
      </Typography>
    </main>
  );
};

export default Body;

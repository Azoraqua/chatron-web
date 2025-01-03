"use client";

import React, { useEffect, useState } from 'react';

type LoadingTextProps = {
  text?: string;
};

const LoadingText: React.FC<LoadingTextProps> = ({ text }) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev === 3 ? 1 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-flex`}>
      {text}
      {'.'.repeat(stage)}
    </span>
  )
};

export default LoadingText;

'use client';

import { useEffect, useState } from 'react';

export default function WindowSize() {
  const [width, setWidth] = useState(0);

  const label =
    width >= 1280
      ? 'xl'
      : width >= 1024
      ? 'lg'
      : width >= 768
      ? 'md'
      : width >= 640
      ? 'sm'
      : 'xs';

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs px-3 py-1 rounded shadow-lg z-50 font-mono">
      {width}px ({label})
    </div>
  );
}

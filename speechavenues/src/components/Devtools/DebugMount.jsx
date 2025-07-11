'use client';
import { useEffect } from 'react';

export default function DebugMount({ name = 'Component' }) {
  useEffect(() => {
    console.log(`✅ Mounted: ${name}`);
  }, []);
  return null;
}

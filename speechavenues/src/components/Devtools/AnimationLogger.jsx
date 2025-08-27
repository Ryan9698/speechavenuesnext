// 'use client';

// import { useEffect } from 'react';

// export default function AnimationLogger({ name = 'Component', delay = 0 }) {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       console.log(`🎬 Animation fired: ${name} (delay ${delay}s)`);
//     }, delay * 1000 || 0);

//     return () => clearTimeout(timeout);
//   }, [delay]);
// }

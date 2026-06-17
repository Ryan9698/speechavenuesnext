import Image from 'next/image';

export default function BannerImage({ className = '' }) {
  return (
    <Image
      src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1781730930/Speech%20Avenues/Main%20Images/hireslogo_j95mhg.webp"
      alt="Speech Avenues Therapy logo"
      width={2890}
      height={1461}
      className={`w-full h-auto object-cover ${className}`}
      sizes="100vw"
      priority
    />
  );
}

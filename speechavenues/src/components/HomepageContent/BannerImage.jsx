import Image from 'next/image';

export default function BannerImage({ className = '' }) {
  return (
    <Image
      src="/images/mainpageimages/satcbannernew.webp"
      alt="Logo"
      width={1440}
      height={617}
      className={`w-full h-auto object-cover ${className}`}
      priority
    />
  );
}

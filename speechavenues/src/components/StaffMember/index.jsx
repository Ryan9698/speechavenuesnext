import Image from "next/image";

export default function StaffMember({
  name,
  role,
  bio,
  imageUrl,
  alt,
  width,
  height,
}) {
  return (
    <div className="max-w-sm rounded shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white mx-auto sm:mx-4 md:mx-auto">
      <div className="relative w-full h-[60vh]">
        <Image
          className="object-cover object-center"
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 600px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-4 py-2 bg-gray-300">
        <div className="font-bold text-2xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-sm font-semibold text-base">{role}</p>
      </div>
      <div className="px-6 py-4 border-t">
        <p className="text-gray-600 text-sm whitespace-pre-line">{bio}</p>
      </div>
    </div>
  );
}

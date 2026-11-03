import { MapPin } from 'lucide-react';

const address = '107 Longwood Ave, Rockledge, FL 32955';
const address2 = '1071 Port Malabar Blvd, Suite 206, Palm Bay FL 32905';
const encodedAddress = encodeURIComponent(address);
const encodedAddress2 = encodeURIComponent(address2);

export default function LocationBar() {
  return (
    <div className="bg-[#304F68] text-white py-2">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-around">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex gap-2 items-center"
        >
          <MapPin size={18} />
          {address}
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress2}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex gap-2 items-center"
        >
          <MapPin size={18} />
          {address2}
        </a>
      </div>
    </div>
  );
}

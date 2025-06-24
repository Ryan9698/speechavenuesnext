import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="text-center lg:text-left p-4 bg-blue-100 rounded-lg border border-blue-300 shadow-sm">
      <p className="font-semibold text-lg mb-2">
        For inquiries or appointments:
      </p>
      <a
        href="tel:+13213382419"
        className="inline-flex items-center gap-2 justify-center lg:justify-start text-xl font-bold text-blue-700 hover:underline"
      >
        <Phone size={20} />
        321-338-2419
      </a>
    </div>
  );
}

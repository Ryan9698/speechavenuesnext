import { Phone, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="flex flex-col gap-2 items-center text-center p-4 bg-blue-100 rounded-lg border border-blue-300 shadow-sm">
      <p className="font-semibold mb-2">For inquiries or appointments:</p>
      <a
        href="tel:+13213382419"
        className="inline-flex items-center gap-2 justify-center lg:justify-start text-lg font-bold text-blue-700 hover:underline"
      >
        <Phone size={20} />
        321-338-2419
      </a>
      <a
        href="mailto:admin@speechavenues.com"
        className="inline-flex items-center gap-2 justify-center text-lg font-bold text-blue-700 hover:underline"
      >
        <Mail size={20} className="text-blue-700" />
        admin@speechavenues.com
      </a>
    </div>
  );
}

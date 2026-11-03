import { packets } from '@/data/packets';
import { Download, FileText, Users, UserRound } from 'lucide-react';

export default function PacketList() {
  const childPackets = packets.filter((p) => p.category.includes('Children'));
  const adultPackets = packets.filter((p) => p.category.includes('Adults'));

  return (
    <>
      <section aria-labelledby="children-heading" className="mb-16">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Users className="text-indigo-600" size={24} aria-hidden="true" />
          <h2
            id="children-heading"
            className="text-3xl font-bold text-gray-800"
          >
            Children's Intake Forms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {childPackets.map(({ id, title, url }) => {
            return (
              <a
                key={id}
                href={url}
                download
                className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-shadow"
                aria-label={`Download ${title}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText
                    className="text-indigo-600"
                    size={24}
                    aria-hidden="true"
                  />
                  <Download
                    className="text-gray-400"
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  PDF · Download form
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="adult-heading" className="mb-16">
        <div className="flex items-center justify-center gap-2 mb-12">
          <UserRound className="text-teal-700" size={24} aria-hidden="true" />
          <h2 id="adult-heading" className="text-3xl font-bold text-gray-800">
            Adult Intake Forms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {adultPackets.map(({ id, title, url }) => {
            return (
              <a
                key={id}
                href={url}
                download
                className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 transition-shadow"
                aria-label={`Download ${title}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText
                    className="text-teal-700"
                    size={24}
                    aria-hidden="true"
                  />
                  <Download
                    className="text-gray-400"
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  PDF · Download form
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}

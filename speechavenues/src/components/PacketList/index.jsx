"use client";
import React, { useState } from "react";
import { packets } from "../../data/PacketList";

export default function PacketList() {
  const [showChildren, setShowChildren] = useState(false);
  const [showAdults, setShowAdults] = useState(false);
  const [clickedPacket, setClickedPacket] = useState(null);

  // Function to handle download button click
  const handleDownloadClick = (packetId) => {
    setClickedPacket(packetId);
    setTimeout(() => {
      setClickedPacket(null); // Reset the state after the effect
    }, 300); // Duration matches the transition duration
  };

  return (
    <div className="packet-list my-3">
      <h2 className="text-xl font-light text-center font-sans mb-8">
        Downloadable Packets (Click for details):
      </h2>
      {/* Buttons Container(Both Children and Adult) */}
      <div className="flex flex-col md:flex-row justify-center max-w-2xl mx-auto space-y-4 md:space-y-0 md:space-x-6">
        {/* Adult Packets Dropdown Group */}
        <div className="md:w-1/2 mx-auto">
          <div className="flex justify-center">
            <button
              onClick={() => setShowAdults(!showAdults)}
              className="font-sans text-white text-xl rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg w-80 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
            >
              Adult Intake Forms
            </button>
          </div>

          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              showAdults ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg rounded-md p-1 my-2 max-h-96 overflow-y-auto">
              <ul>
                {packets
                  .filter(
                    (packet) =>
                      packet.category === "Adults" ||
                      (Array.isArray(packet.category) &&
                        packet.category.includes("Adults"))
                  )
                  .map((packet) => (
                    <li
                      key={packet.id}
                      className="bg-white border mb-1 p-2 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                    >
                      <h3 className="font-sans text-lg text-center">
                        {packet.title}
                      </h3>
                      <p className="font-sans text-center text-sm">
                        {packet.description}
                      </p>
                      {/* Download Button */}
                      <div className="flex justify-center mt-2">
                        <a
                          href={packet.url}
                          download
                          className={`bg-indigo-500 shadow-xl mx-auto text-white rounded hover:text-white hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition duration-300 p-2 ${
                            clickedPacket === packet.id
                              ? "transform -translate-y-1"
                              : ""
                          }`}
                          onClick={() => handleDownloadClick(packet.id)}
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Children Packets Dropdown */}
        <div className="text-center md:w-1/2 mx-auto">
          <button
            onClick={() => setShowChildren(!showChildren)}
            className="font-sans text-white text-xl rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg w-80 h-20 bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90"
          >
            Child Intake Forms
          </button>

          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              showChildren ? "max-h-128" : "max-h-0"
            }`}
          >
            <div className="bg-gradient-to-r from-green-500 to-blue-500 shadow-lg rounded-md p-1 mt-2">
              <ul>
                {packets
                  .filter(
                    (packet) =>
                      packet.category === "Children" ||
                      (Array.isArray(packet.category) &&
                        packet.category.includes("Children"))
                  )
                  .map((packet) => (
                    <li
                      key={packet.id}
                      className="border p-2 mb-1 rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white animate-none"
                    >
                      <h3 className="font-sans text-xl">{packet.title}</h3>
                      <p className="font-sans text-sm">{packet.description}</p>
                      <div className="flex justify-center mt-2">
                        <a
                          href={packet.url}
                          download
                          className={`bg-indigo-500 shadow-xl mx-auto text-white rounded hover:text-white hover:bg-gradient-to-r from-green-500 to-blue-500 transition duration-300 p-2 ${
                            clickedPacket === packet.id
                              ? "transform -translate-y-1"
                              : ""
                          }`}
                          onClick={() => handleDownloadClick(packet.id)}
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

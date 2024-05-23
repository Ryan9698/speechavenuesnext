import React from "react";
import Head from "next/head";
import PacketList from "@/components/PacketList";

export default function Forms() {
  return (
    <>
      <Head>
        <title>Forms - Speech Avenues</title>
        <meta name="description" content="Downloadable intake forms for Speech Avenues services. Please fill them out before you arrive." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <div>
          <h1 className="text-4xl font-bold mb-6 cursiveFont">Forms</h1>
        </div>
        <p className="mt-4">
          Below you will find downloadable intake forms for our services. We ask
          that you please print out these forms and fill them out before you
          arrive.
        </p>
        <PacketList />
      </div>
    </>
  );
}

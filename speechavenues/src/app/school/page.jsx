// app/school/page.jsx
import React from "react";
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata = {
    title: "Speech Avenues School Program",
    description: "Speech Avenues offers a comprehensive educational experience for learners with communication disorders."
};

export default function SchoolHome() {


    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 py-6">
                        <div className="relative w-full h-auto">
                            <Image 
                                src="/images/mainpageimages/enrollacademy.png" 
                                alt="Speech Avenues Academy offers personalized lesson plans tailored to your child's individual needs"
                                width={600}
                                height={900}
                                priority={true}
                                className="rounded-lg object-cover"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <h1 className="text-4xl font-bold text-gray-800 my-4 cursiveFont">School</h1>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-justify mb-4">
                                We are working diligently to open up a brand new opportunity for Brevard County learners with communication disorders. Our full time program will provide a complete educational experience within a therapeutic setting. Learners will work on independent life skills in conjunction with individualized therapies. We pride ourselves on providing a multisensory approach to academics that meets children at their level of need. We focus on relationship based learning which promotes social community building between our individuals and our staff. This approach gives children a place and a voice in our learning community which helps them to make gains that last a lifetime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Button } from "../ui/button";

const Project = () => {
  return (
    <div className="min-h-screen bg-transparent py-20 z-[25]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AgriSense AI Card */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gradient-to-br from-neutral-800 to-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-emerald-400"
              >
                AgriSense AI
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                A Smart AI-powered agricultural monitoring system for modern farming
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src="/FasalGuru.jpg"
                  height={400}
                  width={600}
                  className="h-60 w-full object-contain overflow-hidden  rounded-xl group-hover/card:shadow-xl"
                  alt="AgriSense AI Dashboard"
                  priority
                />
              </CardItem>
              <div className="mt-8">
                <CardItem translateZ={30} as="div" className="w-full">
                  <Link 
                    href="https://github.com/Ayaan-tech/T.E-COMP-MP2B" 
                    className="block w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://github.com/Ayaan-tech/T.E-COMP-MP2B';
                    }}
                  >
                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3 font-medium transition-colors">
                      View Project
                    </button>
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Vocal Scribe Card */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gradient-to-br from-neutral-800 to-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] border-white/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-purple-400"
              >
                Vocal Scribe
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                Advanced voice recognition and transcription powered by AI
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src="/Meet.jpg"
                  height={400}
                  width={600}
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="Vocal Scribe Interface"
                  priority
                />
              </CardItem>
              <div className="mt-8">
                <CardItem translateZ={30} as="div" className="w-full">
                  <Link 
                    href="https://meet-iota-flame.vercel.app/" 
                    className="block w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://meet-iota-flame.vercel.app/';
                    }}
                  >
                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-3 font-medium transition-colors">
                      View Project
                    </button>
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* ImageVision Pro Card */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gradient-to-br from-neutral-800 to-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] border-white/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-blue-400"
              >
                ImageVision Pro
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                Next-generation image processing and analysis platform
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src="/Image.jpg"
                  height={400}
                  width={600}
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="ImageVision Pro Dashboard"
                  priority
                />
              </CardItem>
              <div className="mt-8">
                <CardItem translateZ={30} as="div" className="w-full">
                  <Link 
                    href="https://github.com/Ayaan-tech/ImageVision" 
                    className="block w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://github.com/Ayaan-tech/ImageVision';
                    }}
                  >
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 font-medium transition-colors">
                      View Project
                    </button>
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default Project;
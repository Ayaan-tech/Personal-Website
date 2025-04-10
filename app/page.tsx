import React from 'react';
import Hero from '@/components/main/Hero';
import Skill from '@/components/main/skills';
import Encryption from '@/components/main/Encryption';
import Projects from '@/components/main/project';
export default function Home() {
  return (
    <main className='h-full w-full '>
      <div className='flex flex-col gap-20 relative '>
        <Hero/>
        <Skill/>
        <Encryption/>
        <Projects/>
      </div>
      
    </main>
  );
}

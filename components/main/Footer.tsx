"use client";

import React from "react";
import { Github, Disc as Discord, Twitter, Linkedin, Mail, Heart, Coffee } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-neutral-900/50 text-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Community Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Community
            </h3>
            <Link 
              href="https://github.com/Ayaan-tech" 
             
              className="flex items-center space-x-2 hover:text-purple-400 transition-colors duration-300"
            >
              <Github size={18} />
              <span>Github</span>
            </Link>
            <Link 
              href="https://discord.com/ayaanamjad123" 
             
              className="flex items-center space-x-2 hover:text-purple-400 transition-colors duration-300"
            >
              <Discord size={18} />
              <span>Discord</span>
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Social Media
            </h3>
            
            <Link 
              href="https://x.com" 
            
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Twitter size={18} />
              <span>Twitter</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/ayaanamjad" 
            
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </Link>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              About
            </h3>
            <Link 
              href="https://buymeacoffee.com/ayaan_amjd"
              className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-300"
            >
              <Heart size={18} />
              <span>Become Sponsor</span>
            </Link>
            <Link 
              href="/"
              className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-300"
            >
              <Coffee size={18} />
              <span>Learn About Me</span>
            </Link>
            <Link 
              href="mailto:amjad.quasmi@gmail.com"
              className="flex items-center space-x-2 group hover:text-orange-400 transition-colors duration-300"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Ayaan Amjad Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
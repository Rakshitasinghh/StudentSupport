
import React from 'react';
import Button from '../components/ui/Button'; 
import { User } from 'lucide-react';
import revalogo from "../assets/reva.png"
import robot from "../assets/robot.png"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f0ea]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <img src={revalogo} alt="Reva Logo" style={{ width: '220px', height: 'auto' }} />
          
        </div>
        <div className="flex items-center gap-6 text-lg font-medium text-gray-700">
          <a href="#" className="!text-black">Home</a>
          <a href="#" className="!text-black">About</a>
          <a href="#" className="!text-black">Community</a>
          <User className="w-8 h-8 cursor-pointer" />
        </div>
      </nav>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center px-10 py-16">
        {/* Robot Image */}
        <div className="flex justify-center mb-10 md:mb-0">
          <img src={robot} alt="Robot Assistant" className="max-w-sm" />
        </div>

        {/* Text and Buttons */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#f26a21]">HEY!</span>
            <span className="ml-2 text-black">Lets see</span><br />
            <span className=" text-black">what's Worrying</span><br />
            <span className=" text-black">You..</span>
          </h1>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-[#f26a21] hover:bg-[#e25c0f] text-white px-6 py-2 rounded-full">Sign in</Button>
            <Button className="bg-white border border-[#f26a21] text-[#FFFFFF] hover:bg-[#FF7B08] hover:text-white px-6 py-2 rounded-full">Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
console.log('Rendering Landing Page');}

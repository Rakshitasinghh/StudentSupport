import React from 'react';
import { User, Mic, Send } from 'lucide-react';
import revalogo from "../assets/reva.png"
import robot from "../assets/robot.png"

export default function Complaint() {
  return (
    <div className="min-h-screen bg-[#f6f0ea] flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center gap-3">
          <img src={revalogo} alt="Reva Logo" style={{ width: '220px', height: 'auto' }} />
          <div className="leading-tight">
          </div>
        </div>

        <div className="flex items-center space-x-8 text-gray-800 font-medium">
          <a href="#" className="!text-black hover:text-black">Home</a>          
          <a href="#" className="!text-black hover:text-black">About</a>
          <a href="#" className="!text-black hover:text-[#f26a21] border-b-2 border-[#f26a21]">Complaint</a>
          
          <span>👤</span>
        </div>
      </nav>  

      {/* Greet text */}
      <div className="px-10 py-4 text-lg font-medium text-[#1e1e1e]">Hi! Student...</div>

      {/* Chat Container */}
      <div className="bg-[#f26a21]  px-6 py-6 mt-auto">
        {/* Robot bubble */}
        <div className="flex items-start gap-3 mb-6">
          <img src={robot} alt="Robot" className="w-8 h-10" />
          <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full shadow max-w-[75%] w-162 ">
            Hey! Please drop your complaint below...
          </div>
        </div>
        {/* User Input Section */}
        <div className="flex items-end gap-3 ml-150">
          {/* Message input with mic inside */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 flex-grow shadow">
            <Mic className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Type a message"
              className="flex-grow outline-none text-sm text-gray-800 placeholder-gray-500 bg-transparent"
            />
          </div>

          {/* Send Button */}
          <button className="!bg-[#f29d38] p-2 rounded-full shadow hover:bg-gray-100">
            <Send className="w-4 h-4 text-[#ffffff]" />
          </button>
        </div>
      </div>
    </div>
  );
}



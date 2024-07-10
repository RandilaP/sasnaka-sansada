import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    //give me a dashboard navbar that fixed in left side with tailwind
    <div className="hidden lg:block bg-gray-800 h-screen w-64 top-0 left-0">
      <div className="text-white text-2xl font-bold p-4">Dashboard</div>
      <Link to="/dashboard" className="block text-white p-4 hover:bg-gray-700">
        Home
      </Link>
      <Link to="/gallery" className="block text-white p-4 hover:bg-gray-700">
        Gallery
      </Link>
      <Link to="/events" className="block text-white p-4 hover:bg-gray-700">
        Events
      </Link>
      <Link to="/news" className="block text-white p-4 hover:bg-gray-700">
        News
      </Link>
      <Link to="/settings" className="block text-white p-4 hover:bg-gray-700">
        Settings
      </Link>
    </div>
  );
}

export default Navbar;

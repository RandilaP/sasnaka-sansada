import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SasnakaLogo from "../../assets/SasnakaLogo.svg";
import Home from "../../assets/Home.svg";
import Gallery from "../../assets/Image.svg";
import Events from "../../assets/Calendar.svg";
import News from "../../assets/news1.svg";
import Setting from "../../assets/Settings.svg";
import Button from "../Button/Button";
import Global from "../../assets/Globe.svg";
import arrow from "../../assets/Right.svg";
import humbergur from "../../assets/Humburger.svg";
import CloseIcon from "../../assets/closeIcon.svg";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    //give me a dashboard navbar that fixed in left side with tailwind
    <div className="flex">
      <div
        className={`fixed lg:relative z-10 lg:z-auto h-full p-2 bg-white  w-80 top-0 left-0 transition-transform transform ${
          isOpen ? "translate-x-0 " : "-translate-x-full "
        } lg:translate-x-0 lg:h-auto overflow-y-auto`}
      >
        <button
          className=" absolute lg:hidden items-center"
          onClick={handleToggle}
        >
          <img src={CloseIcon} alt="Menu" className="h-6 w-6" />
        </button>

        <div
          className={`lg:block w-80  flex-col text-white text-2xl font-bold p-4 items-center `}
        >
          <img
            src={SasnakaLogo}
            alt="/"
            width={157}
            height={66}
            className="mb-4 mt-5"
          />
        </div>
        <div className={` lg:flex flex-col mt-36 items-center justify-center`}>
          <ul className={`lg:flex-grow items-center justify-center `}>
            <li
              className={`flex flex-row p-2 rounded-xl hover:bg-[#e9e8e8] mb-3 items-center ${
                location.pathname === "/dashboard" ? "bg-[#d7d7d7]" : ""
              }`}
            >
              <img src={Home} alt="/" width={30} height={30} />
              <Link
                to="/dashboard"
                className="text-black text-center font-sans font-bold text-xl p-4"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li
              className={`flex flex-row p-2 rounded-xl hover:bg-[#e9e8e8] mb-3 items-center${
                location.pathname === "/gallery" ? "bg-[#d7d7d7]" : ""
              }`}
            >
              <img src={Gallery} alt="/" width={30} height={30} />
              <Link
                to="/gallery"
                className="text-black text-center font-sans font-bold text-xl p-4"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li
              className={`flex flex-row p-2 rounded-xl hover:bg-[#e9e8e8] mb-3 items-center${
                location.pathname === "/events" ? "bg-[#d7d7d7]" : ""
              }`}
            >
              <img src={Events} alt="/" width={30} height={30} />
              <Link
                to="/events"
                className="text-black text-center font-sans font-bold text-xl p-4"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
            <li
              className={`flex flex-row p-2 rounded-xl hover:bg-[#e9e8e8] mb-3 items-center ${
                location.pathname === "/news" ? "bg-[#d7d7d7]" : ""
              }`}
            >
              <img src={News} alt="/" width={30} height={30} />
              <Link
                to="/news"
                className="text-black text-center font-sans font-bold text-xl p-4 "
                onClick={() => setIsOpen(false)}
              >
                News & Updates
              </Link>
            </li>
            <li
              className={`flex flex-row p-2 rounded-xl hover:bg-[#e9e8e8] mb-3 items-center ${
                location.pathname === "/settings" ? "bg-[#d7d7d7]" : ""
              }`}
            >
              <img src={Setting} alt="/" width={30} height={30} />
              <Link
                to="/settings"
                className="text-black text-center font-sans font-bold text-xl p-4 "
                onClick={() => setIsOpen(false)}
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col ml-4 mt-80`}
        >
          <div>
            <Button
              label="View Public Profile"
              icon={Global}
              onClick={handleToggle}
              className="bg-[#232630] text-white hover:bg-[#808080]"
            />
          </div>
          <div>
            <Button
              label="Log Out"
              icon={arrow}
              onClick={handleToggle}
              className="bg-[#BCBCBC] text-white hover:bg-[#5e6062]"
            />
          </div>
        </div>
      </div>

      <div className={`flex-1 ml-2 lg:ml-2 p-2`}>
        <button
          className={`${
            isOpen ? "hidden" : "block"
          } lg:hidden fixed items-center`}
          onClick={() => setIsOpen(true)}
        >
          <img src={humbergur} alt="Menu" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

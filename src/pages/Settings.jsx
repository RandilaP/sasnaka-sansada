import React from "react";
import Navbar from "../components/Navbar/Navbar";
import profile from "../assets/profile.jpg";
import qr from "../assets/QR.svg";
import account from "../assets/account.svg";
import security from "../assets/security.svg";
import notification from "../assets/notification.svg";
import display from "../assets/display.svg";
import event from "../assets/event.svg";
import news from "../assets/news.svg";
import help from "../assets/help.svg";

const SettingOption = ({ icon, title, description }) => {
  return (
    <div className="flex group lg:p-4 sm:p-0 items-center lg:ml-20 sm:ml-10 bg-white mb-6 rounded-2xl w-10/12 shadow-sm cursor-pointer hover:bg-gradient-to-tr hover:bg-[#e9e8e8]   transition duration-300">
      <div className="p-3 rounded-full bg-none">{icon}</div>
      <div className="ml-4 ">
        <h3 className="text-xl font-medium font-sans">{title}</h3>
        <p className=" text-gray-500 font-sans lg:text-lg sm:text-sm ">
          {description}
        </p>
      </div>
    </div>
  );
};

function Settings() {
  return (
    <div className=" flex h-screen bg-gray-100 overflow-auto">
      <Navbar />
      <div className="flex-1 ml-12">
        <h1 className="uppercase font-bold text-3xl font-sans mt-8 ">
          Settings
        </h1>
        <div className="bg-white rounded shadow-2xl mt-10 mr-10">
          <div className="flex p-16 justify-start">
            <img
              src={profile}
              className="mr-10"
              width={180}
              height={180}
              alt="/"
            />
            <div className="lg:mr-40 sm:mr-16">
              <h2 className="font-semibold font-sans mb-4 lg:text-3xl md:text-2xl sm:text-xl">
                Mark Perera
              </h2>
              <p className="uppercase lg:text-xl font-sans text-[#0098DA] font-bold sm:text-sm">
                volunteer lvl ii
              </p>
            </div>
            <div>
              <img
                src={qr}
                alt="/"
                className="rounded-md justify-center cursor-pointer hover:bg-[#e9e8e8]"
                width={40}
              />
            </div>
          </div>

          <div className="ml-4 pb-10">
            <SettingOption
              icon={<img src={account} alt="/" />}
              title="Account "
              description="Profile Information, Delete Account"
            />
            <SettingOption
              icon={<img src={security} alt="/" />}
              title="Privacy & Security"
              description="Privacy Setting, Security Setting"
            />
            <SettingOption
              icon={<img src={notification} alt="/" />}
              title="Notification"
              description="Email Notification, Push Notification"
            />
            <SettingOption
              icon={<img src={display} alt="/" />}
              title="Display"
              description="Email Notification, Push Notification"
            />
            <SettingOption
              icon={<img src={event} alt="/" />}
              title="Event Preferences"
              description="Event Registers, Event Visibility"
            />
            <SettingOption
              icon={<img src={news} alt="/" />}
              title="News Preferences"
              description="News Subscription, News Notification Setting"
            />
            <SettingOption
              icon={<img src={help} alt="/" />}
              title="Help & Support"
              description="Support Contact Information, FAQ & Help Center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

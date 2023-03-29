import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Iconly } from "react-iconly";

import { classNames } from "helpers/utils";
import { staticSidebarItems } from "./constants";
import { IconlyIconName } from "helpers/constants/common";

const Sidebar = () => {
  return (
    <div className="sticky lg:relative min-h-[830px] sm:min-h-[880px] h-[calc(100vh-1.45rem)] top-0 bottom-0 left-0 flex flex-col bg-white overflow-hidden rounded-xl lg:h-full py-3 sm:py-6 items-center w-16 sm:w-20 md:w-56">
      <div className="py-4 px-4 flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <div className="relative w-10 sm:w-11 h-10 sm:h-11 mb-2">
          <Image src="/assets/logo.png" layout="fill" quality={100} />
        </div>
        <span className="text-xl sm:text-2xl text-shades-1 font-semibold">Base</span>
      </div>
      <div className="my-4 w-full">
        <ul className="md:block flex flex-col justify-center">
          {staticSidebarItems.map((item) => {
            return (
              <li
                key={uuidv4()}
                className={classNames(
                  "from-[#ACA9FF]/0 via-[#ACA9FF]/0 py-4 hover:text-ly-indigo-600",
                  "hover:fill-ly-indigo-600 text-shades-6 fill-shades-6",
                  "hover:from-[#ACA9FF]/5 bg-gradient-to-r cursor-pointer",
                  "active:from-[#ACA9FF]/10 active:via-[#ACA9FF]/5"
                )}
              >
                <div className="flex px-5 items-center justify-center md:justify-start">
                  <Iconly name={item.icon} set="bold" />
                  <span className="hidden md:inline-block md:ml-2">{item.text}</span>
                  {item.notices !== 0 && (
                    <span className="hidden md:inline-block ml-auto bg-red-200 text-red-600 px-1 rounded-md text-xs font-medium">
                      {item.notices}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full px-5 mt-7 lg:mt-auto">
        <div className="relative hidden md:flex flex-col items-center justify-center rounded-2xl bg-ly-blue-50/30 p-4 h-40">
          <div className="absolute w-36 h-36 -top-7 saturate-[0.8] hue-rotate-[35deg]">
            <Image src="/assets/illustration.png" layout="fill" />
          </div>
          <button className="bg-ly-indigo-500 text-ly-indigo-50 py-2 px-5 rounded-lg mt-auto text-sm hover:bg-ly-indigo-600 transition-all duration-150 ease-out">
            Upgrade Now
          </button>
        </div>
      </div>
      <div className="w-full px-2 md:px-5 mt-auto sm:mt-7 pb-3">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-[50px] h-12 bg-red-200 rounded-2xl">
              <Image src="/assets/avatar.png" layout="fill" quality={100} />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-sm text-shades-1 font-semibold">
                Easin Arafat
              </span>
              <span className="text-xs text-shades-6">Free Account</span>
            </div>
          </div>
          <button className="text-shades-6 hover:text-shades-5 bg-transparent mt-4 md:mt-0 md:ml-2">
            <Iconly name={IconlyIconName.LOGOUT} set="bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

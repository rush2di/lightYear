import { Fragment } from "react";
import { Iconly } from "react-iconly";
import { Menu, Transition } from "@headlessui/react";

import { IDashSectionProps } from "./types";
import { IconlyIconName } from "helpers/constants/common";

const DashSection: React.FC<IDashSectionProps> = ({
  headingLevel,
  children,
  title,
}) => {
  const CutomHeading = headingLevel || "h1";

  return (
    <section className="bg-white border border-shades-9 rounded-xl p-6 w-full space-y-6">
      <div className="flex items-center justify-between relative">
        <CutomHeading className="font-semibold text-lg">{title}</CutomHeading>
        <Dropdown />
      </div>
      {children}
    </section>
  );
};

const Dropdown: React.FC = () => {
  return (
    <Menu as={Fragment}>
      <Menu.Button className="group flex items-center cursor-pointer p-3 outline-none">
        <div className="w-1 h-1 rounded-full bg-shades-6 group-hover:bg-shades-7 transition-all duration-200 ease-out pointer-events-none"></div>
        <div className="w-1 h-1 rounded-full bg-shades-6 group-hover:bg-shades-7 transition-all duration-200 ease-out pointer-events-none mx-[2px]"></div>
        <div className="w-1 h-1 rounded-full bg-shades-6 group-hover:bg-shades-7 transition-all duration-200 ease-out pointer-events-none"></div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-50 top-4 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-ly-blue text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Iconly
                    name={IconlyIconName.EDIT}
                    set={active ? "bold" : "bulk"}
                  />
                  <span className="ml-3">Edit</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-ly-blue text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Iconly
                    name={IconlyIconName.PAPERPLUS}
                    set={active ? "bold" : "bulk"}
                  />
                  <span className="ml-3">Duplicate</span>
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-ly-blue text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Iconly
                    name={IconlyIconName.HIDE}
                    set={active ? "bold" : "bulk"}
                  />

                  <span className="ml-3">Archive</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-ly-blue text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Iconly
                    name={IconlyIconName.FOLDER}
                    set={active ? "bold" : "bulk"}
                  />
                  <span className="ml-3">Move</span>
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-ly-blue text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Iconly
                    name={IconlyIconName.DELETE}
                    set={active ? "bold" : "bulk"}
                  />
                  <span className="ml-3">Delete</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DashSection;

import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { Iconly } from "react-iconly";
import { Menu, Transition } from "@headlessui/react";

import type { IDropdownProps } from "./types";
import { exampleDropdownItems } from "./constants";

const Dropdown: React.FC<IDropdownProps> = ({ items }) => {
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
          {items.map((group) => {
            return (
              <div key={uuidv4()} className="px-1 py-1">
                {group.map(({ text, icon }) => {
                  return (
                    <Menu.Item key={uuidv4()}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-ly-blue text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <Iconly name={icon} set={active ? "bold" : "bulk"} />
                          <span className="ml-3">{text}</span>
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
export { exampleDropdownItems };

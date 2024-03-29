import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

import { HiOutlineUser, HiShoppingCart } from "react-icons/hi";
import { HiBars3, HiMiniXMark, HiMiniBell } from "react-icons/hi2";

const navigation = [
  {
    name: "Login",
    href: "/login",
    icon: HiOutlineUser,
  },
  {
    name: "Cart",
    href: "/cart",
    icon: HiShoppingCart,
  },
];

export const Header = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiMiniXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-11 w-auto rounded-full" src="/image.png" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="/"
                      className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      SoSiS Shop
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={
                      "relative inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-gray-900 text-white m-2"
                    }
                  >
                    {<item.icon className="h-6 w-6" aria-hidden="true" />}
                    {item.name}
                  </Link>
                ))}
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <HiMiniBell className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

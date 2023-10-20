"use client";

import React, { useState } from "react";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import {
  FaBarsStaggered,
  FaDAndDBeyond,
  FaHackerNews,
  FaLitecoinSign,
  FaNewspaper,
  FaPooStorm,
} from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Divider, Link } from "@nextui-org/react";
import { usePathname } from "next/dist/client/components/navigation";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const userItems = [
    {
      name: "Dashboard",
      logo: <FiHome />,
      route: "/",
    },

    {
      name: "Profile",
      logo: <FiUser />,
      route: "/profile",
    },
    {
      name: "Posts",
      logo: <FaPooStorm />,
      route: "/posts",
    },
    {
      name: "Settings",
      logo: <FiSettings />,
      route: "/settings",
    },
  ];

  const adminItems = [
    {
      name: "Dashboard",
      logo: <FiHome />,
      route: "/",
    },

    {
      name: "Profile",
      logo: <FiUser />,
      route: "/profile",
    },
    {
      name: "Create Post",
      logo: <FaDAndDBeyond />,
      route: "/createPost",
    },
    {
      name: "Posts",
      logo: <FaPooStorm />,
      route: "/posts",
    },
    {
      name: "News",
      logo: <FaNewspaper />,
      route: "/news",
    },
    {
      name: "Add News",
      logo: <FaHackerNews />,
      route: "/addNews",
    },
    {
      name: "Settings",
      logo: <FiSettings />,
      route: "/settings",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isAdmin = true;

  return (
    <div className="flex flex-col h-full">
      <nav
        className={
          isOpen
            ? "py-8 px-3  bg-gray-50 min-h-screen lg:h-full  w-52 z-50 translate-x-0 fixed lg:relative duration-200"
            : "py-8 px-3  bg-gray-50 min-h-screen h-full  -translate-x-96 duration-200 absolute"
        }
      >
        <div>
          <h3 className="text-lg font-semibold">
            Space <span className="text-xl uppercase font-bold">Scope</span>
          </h3>
        </div>

        <ul className="pt-7">
          {isAdmin
            ? adminItems.map(({ name, logo, route }, index) => (
                <li
                  className=" py-3 hover:text-cyan-500 duration-500"
                  key={index}
                >
                  <Link
                    className={
                      pathname === route
                        ? "text-lg   bg-cyan-500 text-white flex space-x-2 items-center p-2 rounded-2xl font-semibold"
                        : "text-lg  text-black hover:text-cyan-500 flex space-x-2 items-center p-2"
                    }
                    href={route}
                  >
                    <span className="text-xl">{logo} </span>
                    <span className="mt-1">{name}</span>
                  </Link>
                </li>
              ))
            : // TODO : We will work with later
              userItems.map(({ name, logo, route }, index) => (
                <li key={index}>
                  <span>{logo} </span>
                  <Link href={route}>{name}</Link>
                </li>
              ))}

          {/* TODO : We will do check a user authenticate or not */}
          <Divider className="my-4" />
          <li>
            <Link
              className={
                pathname === "/authenticate/login"
                  ? "text-lg   bg-cyan-500 text-white flex space-x-2 items-center p-2 rounded-2xl font-semibold"
                  : "text-lg  text-black hover:text-cyan-500 flex space-x-2 items-center p-2"
              }
              href="/authenticate/login"
            >
              <span className="text-xl">
                <FaLitecoinSign />
              </span>
              <span className="mt-1">Login</span>
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen ? (
        <div className="w-full z-50 bg-white lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-cyan-500 text-2xl absolute top-4 right-4 duration-200 hover:scale-105"
          >
            <RxCross1 />
          </button>
        </div>
      ) : (
        <div className="z-50 bg-white fixed top-0 w-full lg:hidden">
          <div className="py-5 px-3">
            <h3 className="text-lg font-semibold">
              Space <span className="text-xl uppercase font-bold">Scope</span>
            </h3>
          </div>

          <button
            onClick={toggleSidebar}
            className="text-cyan-500 text-2xl absolute top-4 right-4 duration-200 hover:scale-105"
          >
            <FaBarsStaggered />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

"use client"
import {FiSearch} from "react-icons/fi"
import {FaEarthAmericas} from "react-icons/fa6"
import {AiFillMessage} from "react-icons/ai"
import {IoNotificationsSharp} from "react-icons/io5"
import { Avatar } from "@nextui-org/react"


const TopAvator = () => {
  return (
    <div className="w-full bg-gray-50 px-10 lg:px-0  lg:py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 px-3">
          <FiSearch className="text-2xl text-cyan-500" />
          <input
            className="bg-transparent focus:outline-none outline-none text-xl mt-1 "
            placeholder="Search..."
            type="text"
          />
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-cyan-500 text-2xl flex space-x-3 items-center">
            <FaEarthAmericas className="cursor-pointer hover:text-cyan-600" />
            <AiFillMessage className="cursor-pointer hover:text-cyan-600" />
            <IoNotificationsSharp className="cursor-pointer hover:text-cyan-600" />
          </div>



          {/* TODO : WE will add avator later */}
          <Avatar
            isBordered
            color="default"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>
      </div>
    </div>
  );
};

export default TopAvator;

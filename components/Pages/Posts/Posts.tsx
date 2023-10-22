"use client";

import { useAuthenticateUser } from "@/app/hooks/useAuthenticateUser";
import { usePosts } from "@/app/hooks/usePosts";
import { Divider, User } from "@nextui-org/react";
import moment from "moment";
import { FiEdit, FiDelete } from "react-icons/fi";
import {BiSolidLike} from "react-icons/bi"
import { AiOutlineComment } from "react-icons/ai";

const Posts = () => {
  const [user] = useAuthenticateUser();
  const [data] = usePosts();



  return (
    <section className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 gap-y-12 ">
        {data?.map((post: any, index: any) => (
          <div className="relative" key={index}>
            <User
              name={post?.author?.name}
              description={moment(post?.createdAt).format("lll")}
              avatarProps={{
                src: user?.image as string,
              }}
            />

            {/* Title and Content */}
            <h3 className="text-xl  py-2">{post?.title}</h3>
            <p className="text-gray-600 leading-relaxed">{post?.content}</p>

            <div className="absolute right-0 top-0">
              <div className="flex space-x-3 items-center">
                <button className="text-purple-400 text-xl hover:scale-110 duration-200">
                  <FiEdit />
                </button>
                <button className="text-red-400 text-xl hover:scale-110 duration-200">
                  <FiDelete />
                </button>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex space-x-3">
              <button className="text-blue-400 text-xl hover:scale-110 duration-200">
                <BiSolidLike />
              </button>
              <button  className="text-gray-400 text-xl hover:scale-110 duration-200">
                <AiOutlineComment />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;

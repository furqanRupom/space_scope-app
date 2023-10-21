"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const SocialLogin: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/");
    return <></>;
  }
  return (
    <div>
      <div className="flex items-center justify-center space-x-4 mt-3">
        <button
          onClick={() => signIn("github")}
          className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-cyan-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          <FaGithub className="w-6 h-6 mr-3" />
          Github
        </button>
        <button
          onClick={() => signIn("google")}
          className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-cyan-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          <FaGoogle className="w-6 h-6 mr-3" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

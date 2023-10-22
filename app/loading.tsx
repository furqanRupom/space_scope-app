"use client"
import { Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";



const loading = () => {
    const {status} = useSession()
    if(status === 'loading'){
        return (
          <div className="flex items-center justify-center absolute bg-white z-50 w-full h-full inset-0 text-4xl">
            <Spinner size="lg" color="secondary" />
          </div>
        );
    }
    return (
      <div className="flex items-center justify-center absolute bg-white z-50 w-full h-full inset-0 text-4xl">
        <Spinner size="lg" color="secondary" />
      </div>
    );
};

export default loading;
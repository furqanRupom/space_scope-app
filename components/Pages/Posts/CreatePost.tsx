"use client";
import { useAuthenticateUser } from "@/app/hooks/useAuthenticateUser";
import { usePosts } from "@/app/hooks/usePosts";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Avatar,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreatePost = () => {
  const [user] = useAuthenticateUser();
  const [,refetch] = usePosts()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {register,handleSubmit} = useForm()



  const onSubmit = async(data:any) =>{
    const email = user?.email

    const cookData = {
        email,
        title:data?.title,
        content:data?.content
    }

     try {
        const sendData = await axios.post('/api/post',cookData);
        toast.success('New Post Successfully Created!');
        refetch();
        return sendData.data
     } catch (error:any) {
        toast.error(error.message);
     }
  }


  return (
    <>
      <div className="py-12 px-5 flex items-center justify-center space-x-5">
        <Avatar isBordered src={user?.image as string} />

        <Input
          onClick={onOpen}
          isReadOnly
          type="email"
          variant="faded"
          defaultValue="What About New Space?"
          className="max-w-3xl text-2xl"
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex flex-col gap-1">
                  Log in
                </ModalHeader>
                <ModalBody>
                  <Input
                  isRequired
                  type="title"
                  label=" Post title"
                  className="max-w-full"
                  {...register('title')}
                />

                <Textarea
                  isRequired
                  label="Content"
                  labelPlacement="outside"
                  placeholder="Enter Post Content Here"
                  className="max-w-full text-2xl"
                  {...register('content')}
                />

                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="primary" onPress={onClose}>
                    CREATE
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

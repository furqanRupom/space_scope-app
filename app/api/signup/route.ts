import prisma from "@/prisma/client";
import {NextRequest,NextResponse} from "next/server"
import bcrypt from "bcryptjs"


export const POST = async (request:NextRequest) =>{

    try {
        const { name, email, password } = await request.json();
        const user = prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(!user){
          const hashedPassword = await bcrypt.hash(password,10)

          const addedUser = await prisma.user.create({
            data: {
                name:name,
                email:email,
                password:hashedPassword,
                post:{},
                profile:{}
            }
          })
        }

    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:400})
    }


}
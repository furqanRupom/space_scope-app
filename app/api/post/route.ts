


import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export const POST = async (request:NextRequest) =>{
    try {
        const data = await request.json()
        console.log(data)

        const {email,title,content} = data

        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(user){
            const id =  user?.id
            const createPost = await prisma.post.create({
                data:{
                    title:title,
                    content:content,
                    authorId:id
                }
            })
            return NextResponse.json({ data: createPost }, { status: 201 });
        }

        return NextResponse.json({message:'user not found'},{status:400})



    } catch (error:any) {
           return NextResponse.json({message:error.message},{status:400})
    }
}




export const GET = async () =>{
    try {
        const posts = await prisma.post.findMany({
            include:{
                author:true
            },
            orderBy:[
                {createdAt:'desc'}
            ]
        })

        return NextResponse.json({posts:posts},{status:200})

    } catch (error:any) {
       return NextResponse.json({message:error?.message},{status:404})
    }
}
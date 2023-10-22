import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const usePosts =  () =>{
    const {data,refetch} = useQuery({
        queryKey:['post'],
        queryFn:async () =>{
            const {data} = await axios.get('/api/post')
            console.log(data.posts)
            return data.posts
        }
    })
    return [data,refetch]
}
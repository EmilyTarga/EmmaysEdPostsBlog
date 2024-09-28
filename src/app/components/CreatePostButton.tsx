'use client'
import { Button } from "@mui/material"

export default function CreatePostButton() {

    return <Button className="lg:ml-5 lg:mt-0 mt-2" variant="contained" href={`/post/create`}>Create Post</Button>
}
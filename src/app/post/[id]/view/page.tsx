import { Button, Card, Chip } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';

export default async function Page({ params }: { params: { id: string } }) {
    let data = await fetch(`${process.env.API_URI}/posts/${params.id}`, { cache: 'no-store' })
    let post = await data.json()

    return (
    <main className="flex mt-5 lg:mt-0 lg:justify-center flex-col items-center w-screen h-screen">
        <Card variant="outlined" className="p-5 lg:w-1/2 h-max ">
            <h1 className="text-center mb-5 text-2xl">{post.title}</h1>
            <div className="mb-5">
                <Chip color="primary" label={`Subject: ${post.subject}`} className="mr-5 font-bold" />
                <Chip icon={<FaceIcon />} label={`Author: ${post.author}`} variant="outlined" className="font-bold" />
            </div>
                
            <p className="min-h-[50vh]">
                {post.content}
            </p>
            <div className="flex justify-between">
                <Button variant="contained" href={'/home'}>Back</Button>
            </div>
        </Card>
    </main>

    )
}
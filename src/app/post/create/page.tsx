"use client"
import Link from "next/link";
import { createPost } from "../../../lib/actions";
import { Button, Card, TextField } from "@mui/material";

export default function Page() {
    return (
    <main className="flex mt-5 lg:mt-0 lg:justify-center flex-col items-center w-screen h-screen">
        <Card variant="outlined" className="p-5 lg:w-1/2 ">
            <h1 className="text-center mb-5">New Post</h1>
        <form className="flex flex-col item-center gap-4" action={createPost}>
            <TextField id="outlined-basic" label="Title" variant="outlined"  name="title" />
            <TextField id="standard-multiline-flexible" label="Content" multiline minRows={4} variant="outlined" name="content"/>
            <TextField id="outlined-basic" label="Subject" variant="outlined"  name="subject" />
            <TextField id="outlined-basic" label="Author" variant="outlined"  name="author" />
            <div className="flex justify-between">
                <Button variant="contained" href={'/home'}>Back</Button>
                <Button color="success" variant="contained" type="submit">Save</Button>
            </div>
        </form>
        </Card>
    </main>
    )   
}
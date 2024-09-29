import { Button, Card, TextField } from "@mui/material"
import { deletePost, updatePost } from "../../../../lib/actions"
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";


export default async function Page({ params }: { params: { id: string } }) {
  let session = await auth()
  if (session) {
    session.user.isAdmin ? null : redirect(`/post/${params.id}/view`)
  } else {
    redirect(`/post/${params.id}/view`)
  }

  let data = await fetch(`${process.env.API_URI}/posts/${params.id}`, { cache: 'no-store' })
  let post = await data.json()

  const deletePostWithId = deletePost.bind(null, params.id);
  const updatePostsWithId = updatePost.bind(null, params.id);

  return (
    <main className="flex mt-5 lg:mt-0 lg:justify-center flex-col items-center w-screen h-screen">
      <Card variant="outlined" className="p-5 lg:w-1/2 ">
        <h1 className="text-center mb-5">Edit Post</h1>
        <p className="mt-5">
          adfa
          afdsfasd
        </p>
        <form className="flex flex-col item-center gap-4" action={updatePostsWithId}>
          <TextField id="outlined-basic" label="Title" variant="outlined" name="title" defaultValue={post.title} />
          <TextField id="standard-multiline-flexible" label="Content" multiline minRows={4} variant="outlined" name="content" defaultValue={post.content} />
          <TextField id="outlined-basic" label="Subject" variant="outlined" name="subject" defaultValue={post.subject} />
          <TextField id="outlined-basic" label="Author" variant="outlined" name="author" defaultValue={post.author} />
          <div className="flex justify-between">
            <Button variant="contained" href={'/home'}>Back</Button>
            <Button color="success" variant="contained" type="submit">Save</Button>
          </div>
        </form>
        <form className="mt-2 flex w-100 justify-end" action={deletePostWithId}>
          <Button variant="contained" type="submit" color="error">Delete</Button>
        </form>
      </Card>
    </main>

  )
}

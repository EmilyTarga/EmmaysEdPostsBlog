import { Button, dividerClasses, Pagination } from "@mui/material"
import Search from "../components/Search";
import PostList from "../components/PostList";
import PaginationNext from "../components/Pagination";
import { auth, signOut } from "../../auth";
import CreatePostButton from "../components/CreatePostButton";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {


const session = await auth();

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  let limit = query == "" ? 1 : 10;

  
  const totalPages = await fetch(`${process.env.API_URI}/posts/count`, { cache: 'no-store' })
  .then((response) => response.text())
  .then((result) => Number(result));
  

  return (
    <main className="flex mt-5 lg:mt-0 lg:justify-center flex-col items-center h-screen">
      <div className="mb-5 flex justify-end flex-col lg:flex-row lg:w-1/2 w-3/4">
      <Search placeholder="Search" />
        {session.user.isAdmin ? <CreatePostButton /> : <div></div>}
    </div>
    <div className="h-1/2 mb-5 flex content-start items-start gap-2 lg:w-1/2 w-3/4 flex-wrap">
      <PostList query={query} currentPage={page} limit={limit}/>    
    </div>
      <div>
        {query == "" && session.user.isAdmin ? <PaginationNext totalPages={totalPages}/> : <div></div>} 
      </div>
    </main>
 )
}
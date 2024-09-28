import PostCard from "./PostCard";

export default async function PostList({
  query,
  currentPage,
  limit
}: {
    query?: string;
    currentPage?: number;
    limit?: number;
}) {

   const data = await fetch(`${process.env.API_URI}/posts/search?search=${query}&limit=${limit}&page=${currentPage}`,  { cache: 'no-store' });
   const posts = await data.json(); 
 
  return (
    <>
        {posts.map((post: { _id: any; title: any; content: any; }) => (
          <PostCard key={post._id} id={post._id} title={post.title} body={(post.content).substring(0, 250)}/>))} 
    </>
    )
}
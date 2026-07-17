/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPosts } from "../service/getPosts"

const BlogsPage = async () => {
  
  const posts = await getPosts()
  console.log(posts);

  return (
    <div>
      Blogs Page
      {
        posts.map((post: any) => (
          <>
            <h2 key={post.id}>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ))
      }
    </div>
  )
}

export default BlogsPage
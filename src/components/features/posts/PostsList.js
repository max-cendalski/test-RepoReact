import './posts.css'
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";


const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const renderPosts = posts.map(post=> (
    <article className='post' key={post.id}>
      <h3>{post.title}</h3>
      <h3>{post.content.substring(0, 100)}</h3>
    </article>
  )
  )

  return (
    <section id="posts-container">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  )
}

export default PostsList

import './posts.css'
import { useSelector } from "react-redux";
import { selectAllPosts } from './postsSlice';
import AddPostForm from './AddPostForm';
import Users from '../users/Users';


const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const renderPosts = posts.map(post=> (
    <article className='post' key={post.id}>
      <h3>{post.title}</h3>
      <h4>{post.content.substring(0, 100)}</h4>
    </article>
  )
  )

  return (
    <>
      <section id="posts-container">
      <AddPostForm />
        <h2>Posts</h2>
        {renderPosts}
      </section>
      <Users />
    </>
  )
}

export default PostsList

import './posts.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice';
import AddPostForm from './AddPostForm';





const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  },[postsStatus, dispatch])

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderPosts = orderedPosts.map(post=> (
    <article className='post' key={post.id}>
      <h3>{post.title}</h3>
      <h4>{post.content.substring(0, 100)}</h4>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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
    </>
  )
}

export default PostsList

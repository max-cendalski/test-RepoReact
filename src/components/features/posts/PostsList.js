import './posts.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import PostsExcerpt from './PostsExcerpt';
import { useParams } from 'react-router-dom';

import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice';
import AddPostForm from './AddPostForm';





const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  },[postStatus, dispatch])

  let content;

  if (postStatus === 'loading')  {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <>
      <section id="posts-container">
      <AddPostForm />
        <h2>Posts</h2>
        {content}
      </section>
    </>
  )
}

export default PostsList

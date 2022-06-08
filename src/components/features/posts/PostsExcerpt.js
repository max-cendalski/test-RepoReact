import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import {Link} from 'react-router-dom';


const PostsExcerpt = ({post}) => {
  return (
      <article className='post'>
      <h2>{post.title}</h2>
      <h4>{post.body.substring(0, 75)}...</h4>
      <p className='post-credit'>
        <Link to = {`/post/${post.id}`} className="post-credit-link">View Post </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';


const PostsExcerpt = ({post}) => {
  return (
      <article className='post'>
      <h3>{post.title}</h3>
      <h4>{post.content.substring(0, 100)}</h4>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt

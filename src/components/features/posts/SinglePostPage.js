import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuhor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons"

import { useParams } from "react-router-dom";

const SinglePostPage = () => {
// retrieve postId
const {postId} = useParams()

const post = useSelector((state) => selectPostById(state,Number(postId)))

if(!post) {
  return (
    <section>
      <h2>Post not Found!</h2>
    </section>
  )
}
return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuhor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export  default SinglePostPage;

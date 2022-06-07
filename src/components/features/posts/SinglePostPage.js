import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuhor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons"

const SinglePostPage = () => {

const post = useSelector((state) => selectPostById(state, postId))

if(!post) {
  return (
    <section>
      <h2>Post not Found!</h2>
    </section>
  )
}

  return (
    <article>

    </article>
  )
}

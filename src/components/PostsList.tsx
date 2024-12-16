import { useState } from "react"
import Modal from "./Modal"
import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"

interface PostData {
  author: string,
  body: string
}
function PostsList({ isPosting, onStopPosting }: { isPosting: boolean, onStopPosting: () => void }) {
  const [posts, setPosts] = useState<PostData[]>([])

  function addPostHandler(postData: PostData) {
    setPosts(existingPosts => [postData, ...existingPosts])
  }


  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={crypto.randomUUID()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>)}
    </>
  )
}

export default PostsList
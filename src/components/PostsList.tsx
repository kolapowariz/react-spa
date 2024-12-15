import { useState } from "react"
import Modal from "./Modal"
import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"

function PostsList() {
  const [enteredValue, setEnteredValue] = useState("")
  const [enteredAuthor, setEnteredAuthor] = useState("")
  const [modalIsVisible, setModalIsVisible] = useState(true)

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredValue(event.target.value)
  }
  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onBodychange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredValue} />
        <Post author="Wariz" body="React is good" />
      </ul>
    </>
  )
}

export default PostsList
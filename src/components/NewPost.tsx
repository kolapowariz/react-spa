import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }: { onCancel: () => void, onAddPost: (postData: { body: string, author: string }) => void }) {
  const [enteredValue, setEnteredValue] = useState("")
  const [enteredAuthor, setEnteredAuthor] = useState("")

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredValue(event.target.value)
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value)
  }

  function submitHandler(event: React.FormEvent) {
    event.preventDefault()
    const postData = {
      body: enteredValue,
      author: enteredAuthor
    }
    onAddPost(postData)
    onCancel()
    console.log(postData)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  )
}

export default NewPost;
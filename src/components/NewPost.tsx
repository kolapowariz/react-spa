import { ChangeEventHandler } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onBodychange, onAuthorChange }: { onBodychange: ChangeEventHandler<HTMLTextAreaElement> | undefined, onAuthorChange: ChangeEventHandler<HTMLInputElement> | undefined }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodychange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
    </form>
  )
}

export default NewPost;
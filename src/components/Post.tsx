import classes from './Post.module.css';

function Post({ author, body }: { author: string, body: string }) {

  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  )
}

export default Post
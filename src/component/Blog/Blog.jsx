import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  const { album, authorImg, authorName, name, publishDate, time } = props.blog;
  const markAsRead = props.markAsRead;
  const bookMark = props.bookMark;

  return (
    <div className="blog-cart">
      <img src={album} alt="" />
      <div className="author-container">
        <div className="author-info">
          <img src={authorImg} alt="" />
          <div>
            <h5>{authorName}</h5>
            <p>{publishDate}</p>
          </div>
        </div>
        <p>
          <span className="time">{time} min read</span>{" "}
          <FontAwesomeIcon onClick={() => bookMark(name)} icon={faBookmark} />
        </p>
      </div>
      <h2 className="cart-title">{name}</h2>
      <div className="has">
        <p>#beginners</p>
        <p>#programming</p>
      </div>
      <div className="anchor-button">
        <a onClick={() => markAsRead(time)}>Mark as read</a>
      </div>
      <hr />
    </div>
  );
};

export default Blog;

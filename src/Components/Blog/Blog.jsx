import "./Blog.css";
import {BsFillBookmarkFill } from 'react-icons/bs';
const Blog = (props) => {
  const { cover_img, author_img, authorName, name, publishDate, time } = props.blog;
  const markAsRead = props.markAsRead;
  const bookMark = props.bookMark;

  return (
    <div className="blog-cart">
      <img src={cover_img} alt="" />
      <div className="author-container">
        <div className="author-info">
          <img src={author_img} alt="" />
          <div>
            <h5>{authorName}</h5>
            <p>{publishDate}</p>
          </div>
        </div>
        <p>
          <span className="time">{time} min read <span onClick={() => bookMark(name)} ><a className="cursor-pointer">< BsFillBookmarkFill /></a></span></span>
        </p>
      </div>
      <h2 className="cart-title">{name}</h2>
      <div className="hasTag">
        <p>#beginners</p>
        <p>#programming</p>
      </div>
      <div className="anchor-button border-bottom pb-4">
        <a className="" onClick={() => markAsRead(time)}>Mark as read</a>
      </div>
      
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Question from "../Quesion/Question";
import Question from "../Quesion/Question";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //total read time
  const [blogTime, setBlogTime] = useState(0);
  const markAsRead = (time) => {
    setBlogTime(blogTime + parseInt(time));
  };

  //bookMark cart list
  const [cartTitles, setCartTitle] = useState([]);
  const bookMark = (name) => {
    const getName = cartTitles.find((cartTitle) => cartTitle === name);
    if (getName) {
      toast('😬  Already Added!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    const newCartTitle = [...cartTitles, name];

    setCartTitle(newCartTitle);
  };
  return (
    <div className="main-container">
      <div className="blogs-container">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            markAsRead={markAsRead}
            bookMark={bookMark}
          ></Blog>
        ))}

        <Question></Question>

      </div>
      
      <div className="cart">
        <Cart blogTime={blogTime} cartTitle={cartTitles}></Cart>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Blogs;

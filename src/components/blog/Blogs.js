import React from "react";
import "./blogs.scss";
import { blogData } from "../../data";
import Button from "react-bootstrap/Button";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h2 className="subtitle">Blogs</h2>
      <div className="blogs-wrapper">
        {blogData.map((blog) => {
          return (
            <div className="blog-card" key={blog.title}>
              <img src={blog.src} alt={blog.altText} />

              <div className="blog-content">
                <h3 className="child blog-title">{blog.title}</h3>
                <p className="child blog-description">{blog.description}</p>
                <Button variant="outline-success">Read more</Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;

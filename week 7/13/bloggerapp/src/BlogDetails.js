import React from 'react';

const blogs = [
  { id: 1, title: "React Tips", date: "2025-07-01" },
  { id: 2, title: "Understanding JSX", date: "2025-07-15" },
  { id: 3, title: "Hooks Deep Dive", date: "2025-08-01" }
];

function BlogDetails() {
  return (
    <div>
      <h2>📝 Blog Details</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <b>{blog.title}</b> - {blog.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
}

export default BlogDetails;

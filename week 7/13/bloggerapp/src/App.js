import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("book");

  const renderContent = () => {
    // 1. Using if-else
    if (view === "book") {
      return <BookDetails />;
    } else if (view === "blog") {
      return <BlogDetails />;
    } else if (view === "course") {
      return <CourseDetails />;
    } else {
      return <h3>Please select a view.</h3>;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📚 Blogger App</h1>

      {/* 2. Conditional Rendering using Ternary */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setView("book")}>Book</button>
        <button onClick={() => setView("blog")}>Blog</button>
        <button onClick={() => setView("course")}>Course</button>
      </div>

      {/* 3. Conditional Rendering using Switch-like structure */}
      {renderContent()}
    </div>
  );
}

export default App;

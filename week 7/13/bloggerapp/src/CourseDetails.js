import React from 'react';

const courses = [
  { id: 1, name: "React Basics", duration: "3 Weeks" },
  { id: 2, name: "Advanced React", duration: "4 Weeks" }
];

function CourseDetails() {
  // 4. Conditional Rendering using logical AND
  return (
    <div>
      <h2>📚 Course Details</h2>
      {courses.length && (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <b>{course.name}</b> - {course.duration}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseDetails;

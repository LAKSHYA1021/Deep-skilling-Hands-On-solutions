import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div>
      <h2>My Academy Cohort Dashboard</h2>
      <CohortDetails 
        name="React Basics" 
        startDate="2025-07-01" 
        endDate="2025-08-01" 
        status="ongoing" 
      />
      <CohortDetails 
        name="Spring Boot Training" 
        startDate="2025-06-01" 
        endDate="2025-07-01" 
        status="completed" 
      />
    </div>
  );
}

export default App;

import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, startDate, endDate, status } = props;

  const headingStyle = {
    color: status === 'ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>Cohort Status: {status}</h3>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
        <dt>End Date:</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;

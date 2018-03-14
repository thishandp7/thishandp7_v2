import React from 'react';
import styleable from 'react-styleable';
import css from './education.css';

const Education = (props) => {
  return(
    <div>
      <h2>Education</h2>
      <ul>
        {
          props.education.map((ed, i) => {
            return(
              <li key={i}>
                <h3>{ed.title}</h3>
                <span>{ed.college}</span> - <span>{ed.location}</span><span>{ed.gpa}</span>
                <span className={props.css.gradDate}>{ed.gradDate}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default styleable(css)(Education);

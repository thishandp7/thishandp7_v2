import React from 'react';
import styleable from 'react-styleable';
import css from './technicalSkills.css';

const TechnicalSkills = (props) => {
  return(
    <div>
      <h2>Technical Skills</h2>
      <ul>
        {
          props.technicalSkills.map((t, i) => {
            return (<div key={i}>
              {
                <h3>{t[0]}</h3>
              }
              {
                t[1].map((s, j)=>{
                  return <span key={j}>{s.skill}: {s.skillLevel} | </span>;
                })
              }
            </div>);
          })
        }
      </ul>
    </div>
  );
};

export default styleable(css)(TechnicalSkills);

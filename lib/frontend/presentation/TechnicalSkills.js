import React from 'react';
import styleable from 'react-styleable';
import css from './technicalSkills.css';

const TechnicalSkills = (props) => {
  return(
    <div className={props.css.technicalSkillsBody}>
      <h2>TECHNICAL SKILLS</h2>
      <ul>
        {
          props.technicalSkills.map((t, i) => {
            return (<div key={i}>
              {
                <h3>{t[0]}</h3>
              }
              <div className={props.css.mainContainer}>
                {
                  t[1].map((s, j)=>{
                    return <div key={j}  className={props.css.skillContainer}>
                      <div  className={props.css.skill}>{s.skill}</div>
                      <div  className={props.css.skillLevel}>{s.skillLevel}</div>
                    </div>;
                  })
                }
              </div>
            </div>);
          })
        }
      </ul>
    </div>
  );
};

export default styleable(css)(TechnicalSkills);

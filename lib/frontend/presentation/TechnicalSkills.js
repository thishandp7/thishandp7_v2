import React from 'react';
import styleable from 'react-styleable';
import css from './technicalSkills.css';
import Skill from './Skill';

const TechnicalSkills = (props) => {
  return(
    <div className={props.css.technicalSkillsBody}>
      <h2>TECHNICAL SKILLS</h2>
      {/* <ul>
        {
          props.technicalSkills.map((t, i) => {
            return (<div key={i}>
              {
                <h3 className={props.css.skillSet}>{t[0]}</h3>
              }
              <div className={props.css.mainContainer}>
                {
                  t[1].map((s, j)=>{
                    return <Skill key={j} s={s}/>;
                  })
                }
              </div>
            </div>);
          })
        }
      </ul> */}
    </div>
  );
};

export default styleable(css)(TechnicalSkills);

import React from 'react';
import styleable from 'react-styleable';
import css from './skill.css';

const Skill = (props) => {

  const cubes = (years) => {
    return <ul className={props.css.skillDataContainer}>{
      Array.from(Array(years), (i, j) => {
        return <div
          className={props.css.skillData}
          key={j}>
        </div>;
      })
    }</ul>;
  };

  return(
    <div className={props.css.skillContainer}>
      <p className={props.css.skill}>{props.s.skill}</p>{
        cubes(props.s.skillLevel)
      }
    </div>
  );
};

export default styleable(css)(Skill);

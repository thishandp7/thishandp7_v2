import React from 'react';
import styleable from 'react-styleable';
import css from './experience.css';

const Experience = (props) => {
  return(
    <div className={props.css.experienceBody}>
      <h2>EXPERIENCE</h2>
      <ul>
        {
          props.experience.map((ex, i) => {
            return(
              <li key={i}>
                <span className={props.css.period}>{ex.period}</span>
                <h3>{ex.companyName} - {ex.location}</h3>
                <h4>{ex.title}</h4>
                <ul>
                  {
                    ex.description.map((d, j) => {
                      return(
                        <li key={j}>
                          <span>{d.line}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default styleable(css)(Experience);

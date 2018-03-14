import React from 'react';
import styleable from 'react-styleable';
import css from './projects.css';

const Projects = (props) => {
  return(
    <div>
      <h2>Projects</h2>
      <ul>
        {
          props.projects.map((p, i) => {
            return(
              <li key={i}>
                <span className={props.css.period}>{p.period}</span>
                <h3>{p.name}</h3>
                <span>{p.description}</span>
                <div className={props.css.tools}>
                  <b>Tools Used: </b>
                  {
                    p.Tools.map((t) => {
                      return <span key={t}>{t}</span>;
                    })
                  }
                </div>
                <a href={p.repoLink}>Check out the repositiory here</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default styleable(css)(Projects);

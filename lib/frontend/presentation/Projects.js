import React from 'react';
import styleable from 'react-styleable';
import css from './projects.css';
import ToolsData from './ToolsData';

const Projects = (props) => {
  return(
    <div className={props.css.projectsBody}>
      <h2>PROJECTS</h2>
      <ul>
        {
          props.projects.map((p, i) => {
            return(
              <li key={i}>
                <span className={props.css.period}>{p.period}</span>
                <h3>{p.name}</h3>
                <div className={props.css.pieChart}>
                  <h4>Tools Used: </h4>
                  <ToolsData tools={p.Tools}/>
                </div>
                <span className={props.css.description}>{p.description}</span>
                <div className={props.css.tools}>
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

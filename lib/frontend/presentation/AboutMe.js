import React from 'react';
import styleable from 'react-styleable';
import css from './aboutMe.css';

const AboutMe = (props) => {
  return(
    <div>
      <div className={props.css.image}>
      </div>
      <div>
        <h1>THISHAN D PATHMANATHAN</h1>
      </div>
      <div>
        Software Engineer | Graphic Designer
      </div>
      <div>
        <h2>About Me</h2>
        <div>
          {props.summary}
        </div>
      </div>
    </div>
  );
};

export default styleable(css)(AboutMe);

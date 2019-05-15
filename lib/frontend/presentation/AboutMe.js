import React from 'react';
import styleable from 'react-styleable';
import css from './aboutMe.css';
import img from '../../res/thishandpathmanathan.jpg';

const AboutMe = (props) => {
  return(
    <div className={props.css.aboutme}>
      <div className={props.css.image}>
        <img src={img}/>
      </div>
      <div className={props.css.name}>
        <h1>THISHAN D PATHMANATHAN</h1>
        <div>
          Software Engineer | Graphic Designer
        </div>
      </div>
      <div className={props.css.profile}>
        <h2>ABOUT ME</h2>
        <div>
          {props.summary}
        </div>
      </div>
    </div>
  );
};

export default styleable(css)(AboutMe);

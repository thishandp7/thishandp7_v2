import React from 'react';
import styleable from 'react-styleable';
import css from './hexagon.css';

const Hexagon = (props) => {

  const styles = {
    position: 'absolute',
    transform: `scale(${0.5}, ${0.5})`
  };

  return(
    <div style={styles}>
      <div className={props.css.hex}>
        <div className={props.css.top}>
        </div>
        <div className={props.css.middle}>
        </div>
        <div className={props.css.bottom}>
        </div>
      </div>
      <div className={props.css.shadow}>
        <div className={props.css.topS}>
        </div>
        <div className={props.css.middleS}>
        </div>
        <div className={props.css.bottomS}>
        </div>
      </div>
    </div>
  );
};

export default styleable(css)(Hexagon);

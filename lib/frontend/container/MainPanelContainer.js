import React from 'react';
import styleable from 'react-styleable';
import css from './mainPanelContainer.css';

class MainPanelContainer extends React.Component{
  render(){
    return(
      <div className={this.props.css.body}>
      </div>
    );
  }
}

export default styleable(css)(MainPanelContainer);

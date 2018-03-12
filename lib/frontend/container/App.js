import React from 'react';
import styleable from 'react-styleable';
import css from './primary.css';
import MainPanelContainer from './MainPanelContainer';
import SidePanelContainer from './SidePanelContainer';

class App extends React.Component{
  render() {
    return(
      <div>
        <div className={this.props.css.col2}>
        </div>
        <div className={this.props.css.col2}>
          <SidePanelContainer />
        </div>
        <div className={this.props.css.col6}>
          <MainPanelContainer />
        </div>
        <div className={this.props.css.col2}>
        </div>
      </div>
    );
  }
}

export default styleable(css)(App);

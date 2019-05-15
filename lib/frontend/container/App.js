import React from 'react';
import styleable from 'react-styleable';
import css from './primary.css';
import config from '../.././config';
import MainPanelContainer from './MainPanelContainer';
import SidePanelContainer from './SidePanelContainer';

class App extends React.Component{
  render() {
    return(
      <div className={this.props.css.mainBody}>
        <div className={this.props.css.sub}>
          <SidePanelContainer config={config} />
        </div>
        <div className={this.props.css.body}>
          <MainPanelContainer config={config} />
        </div>
      </div>
    );
  }
}

export default styleable(css)(App);

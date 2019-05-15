import React from 'react';
import styleable from 'react-styleable';
import css from './mainPanelContainer.css';
import Education from '.././presentation/Education';
import Experience from '.././presentation/Experience';
import Projects from '.././presentation/Projects';
import TechnicalSkillsContainer from './TechnicalSkillsContainer';
import axios from 'axios';

class MainPanelContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      education: [],
      experience: [],
      projects: [],
      technicalSkills: []
    };
  }

  async componentDidMount(){
    let res = await axios.get(`http://localhost:${this.props.config.port}/data`);
    console.info(`http://${this.props.config.host}:${this.props.config.port}/data`);
    this.setState({
      education: res.data.Education,
      experience: res.data.Experience,
      projects: res.data.Projects,
    });
  }

  render(){
    return(
      <div className={this.props.css.body}>
        <div>
          <Education education={this.state.education}/>
        </div>
        <div>
          <Experience experience={this.state.experience}/>
        </div>
        <div>
          <Projects projects={this.state.projects}/>
        </div>
        <div>
          <TechnicalSkillsContainer config={this.props.config}/>
        </div>
      </div>
    );
  }
}

export default styleable(css)(MainPanelContainer);

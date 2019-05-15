import React from 'react';
import TechnicalSkills from '.././presentation/TechnicalSkills';
import axios from 'axios';
import _ from 'lodash';

class TechnicalSkillsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      'techSkills':[]
    };
  }

  shouldComponentUpdate(){
    if(this.state.techSkills.length < 1){
      return true;
    }
    else{
      return false;
    }
  }

  async componentDidMount(){
    let res = await axios.get(`http://localhost:${this.props.config.port}/techSkillsData`);
    console.info(`http://${this.props.config.host}:${this.props.config.port}/data`);
    let arr = _.toPairs(res.data);
    this.setState({
      techSkills: arr
    });
  }

  render() {
    return(
      <div>
        <TechnicalSkills technicalSkills={this.state.techSkills}/>
      </div>
    );
  }
}

export default TechnicalSkillsContainer;

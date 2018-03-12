import React from 'react';
import styleable from 'react-styleable';
import css from './sidePanelContainer.css';
import AboutMe from '.././presentation/AboutMe';
import axios from 'axios';
import ContactInfo from '.././presentation/ContactInfo';
//import config from '../../config';

class SidePanelContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      summary:'',
      contactInfo: {}
    };
  }

  async componentDidMount(){
    let res = await axios.get('http://localhost:8035/data');
    this.setState({
      summary: res.data.Summary,
      contactInfo: res.data.ContactInfo
    });
  }

  render(){
    console.info(this.state.contactInfo);
    return(
      <div className={this.props.css.body}>
        <AboutMe summary={this.state.summary}/>
        <div>
        </div>
        <ContactInfo contactInfo={this.state.contactInfo}/>
      </div>
    );
  }
}

export default styleable(css)(SidePanelContainer);

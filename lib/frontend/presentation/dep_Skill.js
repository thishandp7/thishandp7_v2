import React from 'react';
import css from './skill.css';
import styleable from 'react-styleable';
import { arc } from 'd3-shape';
import { select } from 'd3-selection';
//import { transition, active } from 'd3-transition';


class Skill extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      color:'#a5a5a5',
      arc1:'',
      arc2:'',
      baseArc:'',
      centerC:'',
    };
    this.svgEl = null;
    this.svgRef = (element) => {
      this.svgEl = element;
    };

    this.fullAngle = 2 * Math.PI;
    this.angle = this.fullAngle / 11;
  }

  animate = () => {
    let node = select(this.svgEl);
    let skillLvl = this.props.s.skillLevel;

    let level = null;
    let color = null;

    switch(true){
      case (skillLvl < 4) :
        level = 'Novice';
        color = '#c64141';
        break;
      case (skillLvl < 7) :
        level = 'Proficient';
        color = '#c6bd41';
        break;
      case (skillLvl <= 11) :
        level = 'Expert';
        color = '#41c64e';
        break;
    }

    node.on('mouseover', () => {
      node.select('.centerPie')
        .transition()
        .attr('fill', color);
      node.select('.grpPie')
        .transition()
        .attr('d', this.state.arc2);
      node.select('text')
        .transition()
        .text(level);
    }).on('mouseout', () => {
      node.select('.centerPie')
        .transition()
        .attr('fill', '#a5a5a5');
      node.select('.grpPie')
        .transition()
        .attr('d', this.state.arc1);
      node.select('text')
        .transition()
        .text(this.props.s.skill);
    });

  }

  componentDidMount() {

    //let node = select(this.svgEl);

    let arc1 = arc()
      .innerRadius(45)
      .outerRadius(55)
      .startAngle(0)
      .endAngle(this.angle * this.props.s.skillLevel);

    let arc2 = arc()
      .innerRadius(45)
      .outerRadius(60)
      .startAngle(0)
      .endAngle(this.angle * this.props.s.skillLevel);

    let baseArc = arc()
      .innerRadius(45)
      .outerRadius(50)
      .startAngle(0)
      .endAngle(this.fullAngle);

    let centerC = arc()
      .innerRadius(0)
      .outerRadius(40)
      .startAngle(0)
      .endAngle(this.fullAngle);

    this.setState({
      arc1: arc1(),
      arc2: arc2(),
      baseArc: baseArc(),
      centerC: centerC(),
    });

  }

  render(){
    this.animate();
    return(
      <div className={this.props.css.skillContainer}>
        <svg ref={this.svgRef} className={this.props.css.MainSvgPie} width="10" height="10" style={{padding: '100%', border: '1px, solid', backgroundColor: 'white'}}>
          <g className={this.props.css.base}>
            <path className={this.props.css.basePie} d={this.state.baseArc} fill='#ededed'/>
          </g>
          <g className={this.props.css.grp}>
            <path className='grpPie' d={this.state.arc1} fill='#2e65c2'/>
          </g>
          <g className={this.props.css.center}>
            <path className='centerPie' d={this.state.centerC} fill={this.state.color}/>
            <text className={this.props.css.SkillName} dy='0.35em' textAnchor='middle' fontSize='1.0em'>
              {this.props.s.skill}
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

export default styleable(css)(Skill);

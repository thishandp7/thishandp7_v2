import React from 'react';
import styleable from 'react-styleable';
import css from './toolsData.css';
import { arc } from 'd3-shape';
import { select } from 'd3-selection';
import _ from 'lodash';
import { transition, active } from 'd3-transition';

class ToolsData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      arcBase:null,
      center:null,
      arcData:null,
      length:this.props.tools.length,
      lum: 47,
      svgWidth:160,
      svgHeight:160
    };

    this.dataElRefs = [];
    this.centerPieRef = null;
    this.fullAngle = 4 * Math.PI;
    this.angle = 2 * Math.PI / 10;
  }

  createColor = (i) => {
    return `hsl(218, 62%, ${47 + (i * 7)}%)`;
  }

  getPercentage = (index) => {
    let acc = 0;
    for (var i = 0; i < this.props.tools.length; i++) {
      acc += parseInt(_.values(this.props.tools[i]));
    }
    return (100 / acc) * parseInt(_.values(this.props.tools[index]));
  }

  animate = () => {

    for (var i = 0; i < this.dataElRefs.length; i++) {
      let color = this.createColor(i);
      let node = select(this.dataElRefs[i]);
      let centerPie = select(this.centerPieRef);
      let precentageText;
      let index = i;
      node.on('mouseover', () => {
        centerPie.select('.centerPie')
          .transition()
          .attr('fill', '#044187');
        node.select('.dataPie')
          .transition()
          .attr('fill', '#044187');
        precentageText = centerPie
          .append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', '1.4em')
          .attr('y', 8)
          .style('fill', '#ffffff')
          .text(() => { return `${Math.round(this.getPercentage(index))}%`;});
      }).on('mouseout', () => {
        centerPie.select('.centerPie')
          .transition()
          .attr('fill', '#d8d8d8');
        node.select('.dataPie')
          .transition()
          .attr('fill', color);
        precentageText.transition().text('');
      });
    }
  }

  componentWillMount(){

    let arcBase = () => { return null;};
    let center = () => { return null;};
    let arcData = () => { return null;};
    let arcDataHover = () => { return null;};

    this.setState({
      arcBase: arcBase,
      center: center,
      arcData: arcData,
      arcDataHover: arcDataHover,
    });
  }

  componentDidMount() {
    let arcBase = arc()
      .innerRadius((i) => { return (5) * (17 - (i * 2.2)) + 6; })
      .outerRadius((i) => { return (5) * (16 - (i * 2.2)) + 1; })
      .startAngle(Math.PI)
      .endAngle(this.fullAngle);

    let center = arc()
      .innerRadius(0)
      .outerRadius(() => { return 5 * (14 - (this.state.length) * 2);})
      .startAngle(0)
      .endAngle(this.fullAngle);

    let arcData = arc()
      .innerRadius((i) => { return 5 * (17 - (i * 2.2)) + 6; })
      .outerRadius((i) => { return 5 * (16 - (i * 2.2)) + 1; })
      .startAngle(Math.PI)
      .endAngle((i, d) => { return (d * this.angle) + 1;});

    let arcDataHover = arc()
      .innerRadius((i) => { return 5 * (17 - (i * 2.2)) + 6; })
      .outerRadius((i) => { return 5 * (16 - (i * 2.2)) + 1; })
      .startAngle(Math.PI)
      .endAngle((i, d) => { return (d * this.angle + 10) + 1;});

    this.setState({
      arcBase: arcBase,
      center: center,
      arcData: arcData,
      arcDataHover: arcDataHover,
    });

  }

  render() {
    this.animate();
    return(
      <div>
        <svg className={this.props.css.MainSvg} width="280px" height="270px" style={{ border: '1px, solid', backgroundColor: 'none'}}>
          {
            this.props.tools.map((d, i) => {
              return <g key={i} transform={`translate(${80},${80})`}>
                <g ref={(element) => { this.centerPieRef = element; }}>
                  <path className='centerPie' d={this.state.center()} fill='#d8d8d8'></path>
                </g>
                <g>
                  <path d={this.state.arcBase(i + 1)} fill='#ededed'></path>
                </g>
                <g ref={(element) => { this.dataElRefs[i] = element;}} >
                  <path className='dataPie' d={this.state.arcData(i + 1, Object.values(d))} fill={this.createColor(i + 1)}></path>
                </g>
                <g>
                  <text y={11.5 * (7 - i)} x={95} >{Object.keys(d)}</text>
                </g>
                <g className='lines'>
                  <polyline points={`0,${10.8 * (7 - i)} 90,${10.8 * (7 - i)}`} style={{ fill:'none', stroke:'gray', strokeWidth:'1'}} />
                  <circle cx={90} cy={10.8 * (7 - i)} r='1' stroke="#2e65c2" strokeWidth="3"/>
                </g>
              </g>;
            })
          }
        </svg>
      </div>
    );
  }
}

export default styleable(css)(ToolsData);

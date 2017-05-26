import React, { Component } from 'react';
import Arrow from './Arrow';
import PropTypes from 'prop-types';
import TipContainer from './TipContainer';

export default class Microtip extends Component {

  static propTypes = {
    content: PropTypes.any,
    duration: PropTypes.number,
    delay: PropTypes.number,
    easing: PropTypes.string,
    position: PropTypes.string
  };
  
  state = {
    isShowing: false
  };

  render() {
    let { isShowing } = this.state;
    return (
      <div
        style={ this.getStyle() }
        onMouseEnter={ this.showTooltip }
        onMouseLeave={ this.hideTooltip }>

        <Arrow {...this.props} isShowing={isShowing} />

        <TipContainer {...this.props} isShowing={isShowing}>
          {this.props.content}
        </TipContainer>

        { this.props.children }
      </div>
    );
  }

  getStyle = () => {
    return {
      position: 'relative',
      display: 'inline-block'
    };
  }

  showTooltip = () => {
    this.setState({
      isShowing: true
    });
  }

  hideTooltip = () => {
    this.setState({
      isShowing: false
    });
  }
}


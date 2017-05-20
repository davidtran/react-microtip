import React, { Component } from 'react';

export default class TipContainer extends Component {

  render() {
    return (
      <div style={{
        ...this.getBaseStyle(),
        ...this.getAnimationStyle()
      }}>{ this.props.children }</div>
    )
  };

  getBaseStyle = () => {
    let { duration, easing, delay } = this.props;
    let opacity = this.props.isShowing ? 1 : 0;
    let pointerEvents = this.props.isShowing ? 'auto' : 'none';
    return {
      transform: 'translate3d(0, 0, 0)',
      backfaceVisibility: 'hidden',
      willChange: 'transform',
      transition: `all ${duration} ${easing} ${delay}`,
      position: 'absolute',
      zIndex: 10,
      transformOrigin: 'top',
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(17, 17, 17, .9)',
      borderRadius: 4,
      padding: '.5em 1em',
      whiteSpace: 'nowrap',
      boxSizing: 'content-box',
      opacity: opacity,
      pointerEvents: pointerEvents,
      color: 'white'
    };
  }

  getAnimationStyle = () => {
    const animationStyle = this.getAnimationStyleByPosition();
    if (this.props.isShowing === false) {
      return animationStyle.enter;
    } else {
      return {
        ...animationStyle.enter,
        ...animationStyle.active
      }
    }
  }

  getAnimationStyleByPosition = () => {
    switch (this.props.position) {
      case 'top':
        return {
          enter: {
            marginBottom: 11,
            transform: 'translate3d(-50%, 0, 0)',
            bottom: '100%',
            left: '50%'
          },
          active: {
            transform: 'translate3d(-50%, -5px, 0)'
          }
        };

      case 'bottom':
        return {
          enter: {
            transform: 'translate3d(-50%, 0, 0)',
            top: '100%',
            left: '50%'
          },
          active: {
            transform: 'translate3d(-50%, 10px, 0)'
          }
        };

      case 'left':
        return {
          enter: {
            bottom: 'auto',
            left: 'auto',
            right: '100%',
            top: '50%',
            transform: 'translate3d(10px, -50%, 0)',
            marginRight: 11
          },
          active: {
            transform: 'translate3d(0, -50%, 0)'
          }
        }

      case 'right':
        return {
          enter: {
            bottom: 'auto',
            left: '100%',
            top: '50%',
            transform: 'translate3d(-10px, -50%, 0)',
            marginLeft: 11
          },
          active: {
            transform: 'translate3d(0, -50%, 0)'
          }
        }
    }
  }


}
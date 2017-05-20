import React, { Component } from 'react';

export default class Arrow extends Component {

  render() {
    return (
      <div style={{
        ...this.getBaseStyle(),
        ...this.getArrowStyle(),
        ...this.getAnimationStyle()
      }}></div>
    );
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

  getAnimationStyleByPosition() {
    switch (this.props.position) {
      case 'top':
        return {
          enter: {
            transform: 'translate3d(-50%, 0, 0)',
            bottom: '100%',
            left: '50%'
          },
          active: {
            transform: 'translate3d(-50%, -5px, 0)'
          }
        }

      case 'bottom':
        return {
          enter: {
            transform: 'translate3d(-50%, -10px, 0)',
            bottom: 'auto',
            left: '50%',
            top: '100%'
          },
          active: {
            transform: 'translate3d(-50%, 0, 0)'
          }
        }

      case 'left':
        return {
          enter: {
            bottom: 'auto',
            left: 'auto',
            right: '100%',
            top: '50%',
            transform: 'translate3d(10px, -50%, 0)'
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
            transform: 'translate3d(-10px, -50%, 0)'
          },
          active: {
            transform: 'translate3d(0, -50%, 0)'
          }
        }
    }

  }

  getBaseStyle = () => {
    let { duration, easing, delay } = this.props;
    return {
      transform: 'translate3d(0, 0, 0)',
      backfaceVisibility: 'hidden',
      willChange: 'transform',
      transition: `all ${duration} ${easing} ${delay}`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 10,
      transformOrigin: 'top',
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      opacity: this.props.isShowing ? 1 : 0,
      pointerEvents: this.props.isShowing ? 'auto' : 'none'
    };
  }

  getArrowStyle = () => {
    switch (this.props.position) {
      case 'top':
        return {
          backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E")',
          height: 6,
          width: 18,
          marginBottom: 5
        };

      case 'bottom':
        return {
          backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E")',
          height: 6,
          width: 18,
          marginTop: 5,
          marginBottom: 0
        };

      case 'left':
        return {
          backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E")',
          height: 18,
          width: 6,
          marginRight: 5,
          marginBottom: 0
        };

      case 'right':
        return {
          backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E")',
          height: 18,
          width: 6,
          marginBottom: 0,
          marginLeft: 5
        };
    }
  }
}


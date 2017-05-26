(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react','./Arrow','prop-types','./TipContainer'],b);else if('undefined'!=typeof exports)b(exports,require('react'),require('./Arrow'),require('prop-types'),require('./TipContainer'));else{var c={exports:{}};b(c.exports,a.react,a.Arrow,a.propTypes,a.TipContainer),a.index=c.exports}})(this,function(a,b,c,d,e){'use strict';function f(r){return r&&r.__esModule?r:{default:r}}function g(r,s){if(!(r instanceof s))throw new TypeError('Cannot call a class as a function')}function h(r,s){if(!r)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return s&&('object'==typeof s||'function'==typeof s)?s:r}function j(r,s){if('function'!=typeof s&&null!==s)throw new TypeError('Super expression must either be null or a function, not '+typeof s);r.prototype=Object.create(s&&s.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(r,s):r.__proto__=s)}Object.defineProperty(a,'__esModule',{value:!0});var k=f(b),l=f(c),m=f(d),n=f(e),o=Object.assign||function(r){for(var t,s=1;s<arguments.length;s++)for(var u in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,u)&&(r[u]=t[u]);return r},p=function(){function r(s,t){for(var v,u=0;u<t.length;u++)v=t[u],v.enumerable=v.enumerable||!1,v.configurable=!0,'value'in v&&(v.writable=!0),Object.defineProperty(s,v.key,v)}return function(s,t,u){return t&&r(s.prototype,t),u&&r(s,u),s}}(),q=function(r){function s(){var t,u,v,w;g(this,s);for(var x=arguments.length,y=Array(x),z=0;z<x;z++)y[z]=arguments[z];return w=(u=(v=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this].concat(y))),v),v.state={isShowing:!1},v.getStyle=function(){return{position:'relative',display:'inline-block'}},v.showTooltip=function(){v.setState({isShowing:!0})},v.hideTooltip=function(){v.setState({isShowing:!1})},u),h(v,w)}return j(s,r),p(s,[{key:'render',value:function(){var u=this.state.isShowing;return k.default.createElement('div',{style:this.getStyle(),onMouseEnter:this.showTooltip,onMouseLeave:this.hideTooltip},k.default.createElement(l.default,o({},this.props,{isShowing:u})),k.default.createElement(n.default,o({},this.props,{isShowing:u}),this.props.content),this.props.children)}}]),s}(b.Component);q.propTypes={content:m.default.any,duration:m.default.number,delay:m.default.number,easing:m.default.string,position:m.default.string},a.default=q});
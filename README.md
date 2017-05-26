# React Micro Tip
Minimal, beautiful React tooltip component. Only 3kb minifed and gzip.
<p align="center">
<img src="https://cloud.githubusercontent.com/assets/1154740/26487958/cd2ca988-422b-11e7-8daa-ddb56d256f06.png" alt="React Microtip">
</p>

## Installation
*npm*
```
npm install react-microtip --save
```

*yarn
```
yarn add react-microtip --save
```

## Usage
```js
import Microtip from 'react-microtip';

<Microtip
  content={"This tip is nice!"}
  duration={180}
  delay={0}
  easing="ease-in-out"
  position="top">
  <div>My Button</div>
</Microtip>
```

## Properties
| Property | Is Required? | Description | Default value |
|----------|--------------|-------------|---------------|
| content  | **true**     | Content of tooltip ||  
| duration | false |The duration of tooltip transition | 180 |
| delay    | false |The delay time before showing the tooltip | 0 |
| easing   | false |The easing applied while transitioning the tooltip | ease-in-out |
| position | false |The position of tooltip. There are 8 available positions: top, top-left, top-right, bottom, bottom-left, bottom-right, left, right | top |

## Credits
- David Tran [JSLancer.com](http://jslancer.com)

This project is inspired by [Microtip](https://github.com/ghosh/microtip) library

import './index.pug';
import './index.scss';
import { $, inner } from './utils';
import * as data from './data.json';
 
console.log(data);
data.forEach(el => {
  let tag = `
  <div class='item'>
    <h3>${el.title}</h3>
    <p>${el.description}</p>
  </div>`
  inner($('.container'), tag);
})
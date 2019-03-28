import './index.pug';
import './index.scss';
import { $, inner } from './utils';
import * as data from './data.json';
 
data.forEach(el => {
  let tag = `
  <div class='item' style="background: url('./assets/backg${Math.floor(Math.random() * (13)) + 1}.png'); background-size: cover;">
    <h2>${el.title}</h2>
    <p>${el.description}</p>
  </div>`
  inner($('.container'), tag);
})
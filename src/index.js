import './index.pug';
import './index.scss';
import { $, inner } from './utils';
import { isTSEnumMember } from 'babel-types';

const randomPic = function() {
  return(Math.floor(Math.random() * (13)) + 1);
}

let items = document.getElementsByClassName('item');
for(let item of items) {
  console.log(item);
  item.style.background = `url('./assets/backg${randomPic()}.png')`;
  item.style.backgroundSize = 'cover';
}
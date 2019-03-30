import './index.pug';
import './index.scss';
import { $, inner } from './utils';

const randomPic = function() {
  return(Math.floor(Math.random() * (13)) + 1);
}

let items = document.getElementsByClassName('item');
items.forEach(element => {
  console.log(element);  
});
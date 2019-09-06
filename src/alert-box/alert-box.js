/**
* This format uses the ES2015/ES6 class.
* You define an export before 'class' and you then import
* it by referencing the path of this file and then referring it
* with curly braces:
*
* import { AlertBox } from './alert-box/alert-box;
* Note that AlertBox is the same name as your class!
*
*/
// export class AlertBox {   sayHi() {
//     alert("Hello ");
// }
// }

import {a,b} from '../write-text/write-text.js';

function sayHi(user) {
    alert("hello"+a);
  }
  
  function sayBye(user) {
    alert("bye" + b);
  }
  
  export {sayHi, sayBye};
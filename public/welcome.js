'use strict';

export default function (message) {
  if (NODE_ENV === 'development') {
    console.log(message);
  }
  if (tester === 'konst') {
    console.log(message);
  }

  let ggg = 'adadad';
  console.log(ggg);

  alert(`Welcome ${message}`);
};
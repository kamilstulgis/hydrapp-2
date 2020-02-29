"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


let glass = 0;
const counter = document.querySelector('.glass__counter--js');
const add = document.querySelector('.glass__add--js');
const del = document.querySelector('.glass__del--js');

counter.innerHTML=`${glass}`;

add.addEventListener('click', (e)=> {
  e.preventDefault();
  glass += 1;
  if(glass < 0 ? glass = 0 : counter.innerHTML=`${glass}`);
  console.log(glass);
});

del.addEventListener('click', (e)=> {
  e.preventDefault();
  glass -= 1;
  if(glass < 0 ? glass = 0 : counter.innerHTML=`${glass}`);
  console.log(glass);
});
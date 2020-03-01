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
const key = new Date().toISOString().slice(0, 10);

const history = document.querySelector('.history__days--js');
const historyGlass = document.querySelector('.history__glass--js');


console.log(glass);
counter.innerHTML=`${glass}`;

add.addEventListener('click', (e)=> {
  e.preventDefault();
  glass += 1;
  if(glass < 0 ? glass = 0 : counter.innerHTML=`${glass}`);
  localStorage.setItem(key,glass);
  console.log(glass);
  console.log(localStorage.getItem(glass));
});

del.addEventListener('click', (e)=> {
  e.preventDefault();
  glass -= 1;
  if(glass < 0 ? glass = 0 : counter.innerHTML=`${glass}`);
  localStorage.removeItem(key,glass);
  localStorage.setItem(key,glass);
  console.log(glass);
});
console.log(localStorage.getItem(key));

history.innerHTML=`<p>${key}</p>`;
historyGlass.innerHTML=`<p>${localStorage.getItem(key)}</p>`;


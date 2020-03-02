"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const counter = document.querySelector('.glass__counter--js');
const add = document.querySelector('.glass__add--js');
const del = document.querySelector('.glass__del--js');
let glass = 0;
const key = new Date().toISOString().slice(0, 10);

const history = document.querySelector('.history__days--js');
const historyGlass = document.querySelector('.history__glasses--js');


const local = () => {
  if (localStorage.getItem(key)) {
    glass = parseInt(localStorage.getItem(key));
    counter.innerHTML = `${glass}`;
    history.innerHTML = `${key}`;
    historyGlass.innerHTML = `${localStorage.getItem(key)}`;

  } else {
    glass = 0;
    counter.innerHTML = `${glass}`;
    history.innerHTML = `${key}`;
    historyGlass.innerHTML = `${glass}`;
  }

  add.addEventListener('click', (e) => {
    e.preventDefault();
    glass += 1;
    localStorage.setItem(key, glass);
    counter.innerHTML = `${glass}`;
    console.log(glass);

    history.innerHTML = `${key}`;
    historyGlass.innerHTML = `${localStorage.getItem(key)}`;
  });


  del.addEventListener('click', (e) => {
    e.preventDefault();
    if (glass <= 0) {
      glass = 0;
      localStorage.setItem(key, glass);
    } else {
      glass -= 1;
      localStorage.removeItem(key, glass);
      counter.innerHTML = `${glass}`;
      localStorage.setItem(key, glass);
    }
    history.innerHTML = `${key}`;
    historyGlass.innerHTML = `${localStorage.getItem(key)}`;
    console.log(glass);
  });

}

local();
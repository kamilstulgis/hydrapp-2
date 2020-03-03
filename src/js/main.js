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
    // history.innerHTML = `${key}`;
    // historyGlass.innerHTML = `${localStorage.getItem(key)}`;

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

    // history.innerHTML = `${key}`;
    // historyGlass.innerHTML = `${localStorage.getItem(key)}`;
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
    // history.innerHTML = `${key}`;
    // historyGlass.innerHTML = `${localStorage.getItem(key)}`;
    console.log(glass);
  });
}

const historyBtn = document.querySelector('.history__btn--js');

const hist = () => {

  historyBtn.addEventListener('click', (e) => {
    // DODAĆ IF, by nie pobieralo caly czas tej samej zawartosci
    e.preventDefault();
    for (let i = 0; i <= localStorage.length - 1; i++) {
      let day = document.createElement('p');
      let number = document.createElement('p');
      let elKey = `${localStorage.key(i)}`;

      console.log(`${localStorage.key(i)}`);
      console.log(`${localStorage.getItem(elKey)}`);

      history.appendChild(day);
      historyGlass.appendChild(number);
      day.innerHTML = `${localStorage.key(i)}`;
      number.innerHTML = `${localStorage.getItem(elKey)}`;
      // history.innerHTML = `${localStorage.key(i)}`;

    }
  });
}

local();
hist();
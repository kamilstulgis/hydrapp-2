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
const historyLitre = document.querySelector('.history__litre--js');

const index = document.querySelector('.index--js');

if (index) {


  let local = () => {

    if (localStorage.getItem(key)) {
      glass = parseInt(localStorage.getItem(key));
      counter.innerHTML = `${glass}`;
      history.innerHTML = `${key}`;
      historyGlass.innerHTML = `${localStorage.getItem(key)}`;
      historyLitre.innerHTML = `${localStorage.getItem(key) * 0.25} L`;

    } else {
      glass = 0;
      counter.innerHTML = `${glass}`;
      history.innerHTML = `${key}`;
      historyGlass.innerHTML = `${glass}`;
      historyLitre.innerHTML = `${glass * 0.25} L`;
    }

    add.addEventListener('click', (e) => {
      e.preventDefault();
      glass += 1;
      localStorage.setItem(key, glass);
      counter.innerHTML = `${glass}`;
      console.log(glass);

      history.innerHTML = `${key}`;
      historyGlass.innerHTML = `${localStorage.getItem(key)}`;
      historyLitre.innerHTML = `${localStorage.getItem(key) * 0.25} L`;
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
      historyLitre.innerHTML = `${localStorage.getItem(key) * 0.25} L`;
    });
  }
  local();
}

const hist = document.querySelector('.hist--js');

if (hist) {
  const story = () => {
    let myArr = [];
    let keys;
    let val;
    
    for (let i = 0; i < localStorage.length; i++) {
      keys = `${localStorage.key(i)}`;
      val = `${localStorage.getItem(keys,i)}`;
      myArr.push(`${keys} - ${val}`);
    }

    for (let el of myArr) {
      let date = document.createElement('p');
      let amountGlass = document.createElement('p');
      let litre = document.createElement('p');
      console.log(el);

      date.innerHTML = `${el.slice(0,10)}`;
      amountGlass.innerHTML = `${el.slice(12,16)}`;
      litre.innerHTML=`${el.slice(12,16)*0.25} L`;
      history.appendChild(date);
      historyGlass.appendChild(amountGlass);
      historyLitre.appendChild(litre);
    }
  }
  story();

} else {
  console.log('nie ma');
}
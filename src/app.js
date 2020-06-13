import "regenerator-runtime";
import './styles/style.css';
import './components/list-surah.js'
import './components/isi-surah.js'
// import Navigo from 'navigo';

// const root = null;
// const useHash = true; // Defaults to: false
// const hash = '#!'; // Defaults to: '#'
// const router = new Navigo(root, useHash, hash);

// router
//   .on({
//     '/surah/:ke': function (params) {
//       renderDetail(params.ke);
//     },
//     '/': function () {
//       renderList()
//     }
//   })
//   .resolve();

const routes = {
  '/' : home,
  '/surah/:' : contact,
};

let data = {}

function renderList () {
  fetch('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
    .then(response => response.json())
    .then(res => {
      createList(res);
      data = res;
    });
}

function renderDetail (params) {
  fetch(`https://al-quran-8d642.firebaseio.com/surat/${params}.json?print=pretty`)
    .then(response => response.json())
    .then(res => {
      createSurahPage(res, params);
    });
}

window.addEventListener('DOMContentLoaded', renderList);

const createList = obj => {
  document.getElementById('search').style.display = ''
  document.getElementById('detail').style.display = 'none'
  const rootElement = document.querySelector('#app');
  const newElement = document.createElement('list-surah')
  newElement.listSurah = obj;
  newElement.setAttribute('class', 'parent-list container');
  rootElement.innerHTML=``;
  rootElement.appendChild(newElement);
  document.getElementById('header').scrollIntoView()
}

const createSurahPage = (obj, params) => {
  document.getElementById('detail').style.display = ''
  document.getElementById('search').style.display = 'none'
  document.getElementById('surah-name').innerText = data.filter(item => item.nomor == params)[0].nama
  const rootElement = document.querySelector('#app');
  const newElement = document.createElement('isi-surah')
  newElement.isiSurah = obj;
  newElement.setAttribute('class', 'container mx-auto my-12');
  rootElement.innerHTML='';
  rootElement.appendChild(newElement);
  document.getElementById('header').scrollIntoView();
}

const btn = document.getElementById('ip');
btn.addEventListener('keyup', (e) => {
  const newData = data.filter(item => item.nama.includes(e.target.value));
  createList(newData)
});
import style from './style.css';
import html from './index.html';

const imageTag = document.querySelector('img');
const cropRequestUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=SsSqGDRjyoH2TXKUZJ98g5EeFuLZecnk&s=';
let searchName = 'cats';
async function getGifFromGify() {
    const response = await fetch(cropRequestUrl + searchName, { mode: 'cors' });
    const responseData = await response.json();
    imageTag.src = responseData.data.images.original.url;
}

getGifFromGify();
const myButton = document.querySelector('button');
myButton.addEventListener('click', getGifFromGify);
const searchBar = document.querySelector('.search');
const searchIconContainer = document.querySelector('span');
searchIconContainer.addEventListener('click', changeSearch);
function changeSearch() {
    if (!(searchBar.value === '')) {
        searchName = `${searchBar.value}`;
        getGifFromGify();
    }
}

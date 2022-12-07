import style from './style.css';
import html from './index.html';

const imageTag = document.querySelector('img');
const cropRequestUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=SsSqGDRjyoH2TXKUZJ98g5EeFuLZecnk&s='
let searchName = 'cats';
fetch(
    cropRequestUrl + searchName
    , { mode: 'cors' }
)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        imageTag.src = response.data.images.original.url;
    })

const myButton = document.querySelector('button');
myButton.addEventListener('click', changeCatgif);

function changeCatgif() {
    fetch(
        cropRequestUrl + searchName
        , { mode: 'cors' }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            imageTag.src = response.data.images.original.url;
        }).catch(function (err) {
            console.error(err);
            searchName = 'cats';
        })

}

const searchBar = document.querySelector('.search');
const searchIconContainer = document.querySelector('span');
searchIconContainer.addEventListener('click', changeSearch);
function changeSearch() {
    if (!(searchBar.value == '')) {
        searchName = `${searchBar.value}`;
        changeCatgif();
    }
}

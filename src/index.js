import style from './style.css';
import html from './index.html';

const imageTag = document.querySelector('img');
fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=SsSqGDRjyoH2TXKUZJ98g5EeFuLZecnk&s=cats'
    , { mode: 'cors' }
)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        imageTag.src = response.data.images.original.url;
    })
//setInterval(() => { window.location.reload() }, 10000);
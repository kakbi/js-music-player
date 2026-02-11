import { songs } from './songs.js';
import { music, playMusic } from './player.js';
import { image, title, artist, background } from './elements.js';

let musicIndex = 0;

export function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

export function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

export function initPlayer() {
    loadMusic(songs[musicIndex]);
}

import { playBtn } from './elements.js';

export const music = new Audio();

let isPlaying = false;

export function togglePlay() {
    isPlaying ? pauseMusic() : playMusic();
}

export function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

export function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

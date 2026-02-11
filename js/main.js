import { playBtn, prevBtn, nextBtn, playerProgress } from './elements.js';
import { togglePlay, music } from './player.js';
import { changeMusic, initPlayer } from './controls.js';
import { updateProgressBar, setProgressBar } from './progress.js';

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));

music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);

playerProgress.addEventListener('click', setProgressBar);

initPlayer();

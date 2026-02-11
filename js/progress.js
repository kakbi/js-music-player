import { music } from './player.js';
import {
    progress,
    durationEl,
    currentTimeEl,
    playerProgress,
} from './elements.js';

export function updateProgressBar() {
    const { duration, currentTime } = music;

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');

    if (duration) {
        durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    }

    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

export function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

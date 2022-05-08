import throttle from 'lodash.throttle';

const iFrameEl = document.querySelector('iframe');

// Player initialization
const player = new Vimeo.Player(iFrameEl);

// Saved playback time to local storage
const onPlay = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
    console.log(parseInt(localStorage.getItem('videoplayer-current-time')));
};

// Usage time update
player.on('timeupdate', throttle(onPlay, 1000));

// Resuming playback from a saved position
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
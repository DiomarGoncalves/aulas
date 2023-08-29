const videoList = document.getElementById('video-list');
const videoFrame = document.getElementById('video-frame');

videoList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI' && target.dataset.videocode) {
    const videoCode = target.dataset.videocode;
    videoFrame.src = `https://www.youtube.com/embed/${videoCode}`;
    }
});
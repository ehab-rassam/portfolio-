const videos = document.querySelectorAll('.bg-video');
let current = 0;

function showNextVideo() {
  videos[current].classList.remove('active');
  current = (current + 1) % videos.length;
  videos[current].classList.add('active');
}

setInterval(showNextVideo, 6000); // يبدّل كل 6 ثوانٍ

let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    song.play(); // Page load হওয়ার সাথে সাথে গান প্লে হবে
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}

function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    } else {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
};

if (song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.currentTime = progress.value;
};

document.querySelector('.fa-backward').addEventListener('click', () => {
    song.currentTime = Math.max(0, song.currentTime - 10); // 10 সেকেন্ড পেছনে যাও
});

document.querySelector('.fa-forward').addEventListener('click', () => {
    song.currentTime = Math.min(song.duration, song.currentTime + 10); // 10 সেকেন্ড সামনে যাও
});

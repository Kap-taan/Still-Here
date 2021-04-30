console.log("Hello World");
console.log("Today We Will be Building Personal Music Player :)");

const musicContainer = document.querySelector('.music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');

const title = document.getElementById('title');
const covers = document.getElementById('Cover');

const songs = ['Dream', 'Fall_Off', 'Living_Legend', 'Naa_Ha_Time', 'Roll_Up', 'Saza-E-Maut', 'Still_Here_Intro', 'Villain', 'Whats_My_Name'];

let songIndex = 8;

loadSong(songs[songIndex]);

let song;

function loadSong(song){
    title.innerHTML = song;
    audio.src=`Songs/${song}.mp3`;
    // covers.src=`Images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

playBtn.addEventListener('click', () =>{
        const isPlaying = musicContainer.classList.contains('play');
        if(isPlaying){
            pauseSong();
        }else{
            playSong();
        }
})

prevBtn.addEventListener('click', () => {
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex]);

  playSong();

})

nextBtn.addEventListener('click', () => {
    songIndex--;
    if(songIndex>songs.length-1){
        songIndex=0;
    }
    loadSong(songs[songIndex]);

  playSong();

})



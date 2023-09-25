
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Spotify");

    // Initialize the variables
    let songindex = 0;
    let audio = new Audio("songs/1.mp3");
    let masterplay = document.getElementById('masterplay');
    let myprogressbar = document.getElementById('myprogressbar');
    let gif = document.getElementById('gif');
    let songitem = Array.from(document.getElementsByClassName('songitem'));
    let mastersongname=document.getElementById('mastersongname');

    // Define songs using an array of objects
    let songs = [
        {
            songname: "3 doors down--here without you",
            filepath: "songs/1.mp3",
            coverpath: "covers/cover1.jpg" 
        },
        {
            songname: "inside lweyn davis--500 miles",
            filepath: "songs/2.mp3",
            coverpath: "covers/cover2.jpeg" 
        },
        {
            songname: "akon--lonely",
            filepath: "songs/3.mp3",
            coverpath: "covers/cover3.jpg" 
        },
        {
            songname: "joji--sanctuary",
            filepath: "songs/4.mp3",
            coverpath: "covers/cover4.jpeg" 
        },
        {
            songname: "justin bieber--stay",
            filepath: "songs/5.mp3",
            coverpath: "covers/cover5.jpeg" 
        },
    ];

    songitem.forEach((element, i) => {
        console.log(element, i);
        element.getElementsByTagName("img")[0].src = songs[i].coverpath;
        element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
    });

    //play pause click
    masterplay.addEventListener("click", () => {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            console.log("JavaScript code is executing.");
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        } else {
            audio.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        }
    });

    // Listen to the 'timeupdate' event
    audio.addEventListener('timeupdate', () => {
        // Calculate progress as a percentage
        const progress = (audio.currentTime / audio.duration) * 100;
        console.log(progress);

        // Update your progress bar or seekbar here
        // For example, you can update the value of myprogressbar:
        myprogressbar.value = progress;
    });

    myprogressbar.addEventListener('change', () => {
        audio.currentTime = myprogressbar.value * audio.duration / 100;
    });

    const makeallplays = () => {
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        });
    }

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element, songindex) => {
        element.addEventListener('click', () => {
            console.log(element);
            makeallplays();
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
            audio.src = songs[songindex].filepath;
            mastersongname.innerText=songs[songindex].songname;
            audio.currentTime = 0;
            audio.play();
            gif.style.opacity=1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
        });
    });
    document.getElementById('next').addEventListener('click',()=>{
        if(songindex>=4){
            songindex=0;
        }
        else{
        songindex +=1;}
        audio.src = songs[songindex].filepath;
        mastersongname.innerText=songs[songindex].songname;
        audio.currentTime = 0;
        audio.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    });
    document.getElementById('previous').addEventListener('click',()=>{
        if(songindex<=0){
            songindex=0;
        }
        else{
        songindex -=1;}
        audio.src = songs[songindex].filepath;
        mastersongname.innerText=songs[songindex].songname;
        audio.currentTime = 0;
        audio.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    });
});

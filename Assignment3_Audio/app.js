// defining variables for DOM elements
const arrow = document.querySelector("#arrow");
const navbar = document.querySelector(".navbar");

// importing audio files
const track1 = new Audio('./assets/sounds/track1.mp3');
const track2 = new Audio('./assets/sounds/track2.mp3');
const track3 = new Audio('./assets/sounds/track3.mp3');



// waiting for window to load all sound files and images completely before proceeding
window.addEventListener("load", () => {
    // event listeners
    // checking when a audio file ends playing, making the arrow display, and getting ready for audio change
    track1.addEventListener('ended', function () {
        console.log('Audio1 finished playing');
        track_fin = 1;
        arrow.style.display = "block";
    });
    track2.addEventListener('ended', function () {
        console.log('Audio2 finished playing');
        track_fin = 2;
        arrow.style.display = "block";
    });
    track3.addEventListener('ended', function () {
        console.log('Audio3 finished playing');
        track_fin = 3;
        replay.style.display = "block";
        navbar.style.display = "flex";
    });

    let track_fin = 0;

    // click event listener for the play button
    play.addEventListener("click", () => {
        play.style.display = "none";
        cover.style.display = "none";
        s1.style.display = "block";
        track1.play();
    });

    // click event listener for the arrow button
    let count = 0; //count helps in deciding which scene has to be displayed next
    arrow.addEventListener("click", () => {
        if (count == 0 && track_fin == 1) {

            s1.style.display = "none";
            s3.style.display = "none";
            s2.style.display = "block";
            count++;
            track1.pause();
            track2.play();
            arrow.style.display = "none";
        } else if (count == 1 && track_fin == 2) {
            s2.style.display = "none";
            s1.style.display = "none";
            s3.style.display = "block";
            arrow.style.display = "none";
            track2.pause();
            track3.play();

        }

    });

    // click event listener for replay button
    replay.addEventListener("click", () => {
        s3.style.display = "none";
        s1.style.display = "none";
        replay.style.display = "none";
        cover.style.display = "block";
        navbar.style.display = "none";
        play.style.display = "block";
        count = 0;
        track_fin = 0;
        track3.pause();
    });




});
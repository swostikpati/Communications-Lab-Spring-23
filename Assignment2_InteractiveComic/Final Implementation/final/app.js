// declaring variables
let svgObject;
let svgDoc;
let innerDoc;
let allFrames;
let allFramesArr;
let filteredFrames;
let keepScrollP = document.querySelector(".keep-scrolling");
let coverP = document.querySelector(".cover-page");
let frameIndex = 1;
let visibleFrameArr;

// audio import frame by frame
let aud_frame1 = new Audio("/assets/sound_effects/frame1.wav");
let aud_frame2 = new Audio("./assets/sound_effects/frame2u.mp3");
let aud_frame6 = new Audio("./assets/sound_effects/frame6.mp3");
let aud_frame13 = new Audio("./assets/sound_effects/frame13.wav");
let aud_frame25 = new Audio("./assets/sound_effects/frame25.mp3");
let aud_frame30 = new Audio("./assets/sound_effects/frame30.mp3");
let aud_frame33 = new Audio("./assets/sound_effects/frame33.mp3");
let aud_frame40 = new Audio("./assets/sound_effects/frame40.wav");
let aud_frame45 = new Audio("./assets/sound_effects/frame45.mp3");
let aud_frame49 = new Audio("./assets/sound_effects/frame49.wav");
let aud_frame59 = new Audio("./assets/sound_effects/frame59.mp3");
let aud_frame62 = new Audio("./assets/sound_effects/frame62.mp3");
let curr_music = aud_frame1; //initializing the frame that is playing

// everything happens after page load so as to avoid errors from element not existing
window.addEventListener("load", () => {

    // Selecting the SVG object
    svgObject = document.getElementById('comic_object');
    // Accessing the document inside the object - very important to access any element and manipulate within the SVG
    svgDoc = svgObject.contentDocument;
    // Finally accessing the SVG element and all its children
    innerDoc = svgDoc.documentElement;

    // Selecting all the fraems in the SVG - including additional sublayers present in the layers I created
    allFrames = innerDoc.querySelectorAll('g');

    // Converting the NodeList to an array
    // allFramesArr = Array.from(allFrames);
    allFramesArr = [...allFrames];

    // Filtering the frames to only include the ones with the id starting with 'f' - based on the naming convention I used
    filteredFrames = allFramesArr.filter((frame) => { if (frame.id[0] == "f") return true; });

    // Creating an array of arrays - each array contains the frames that are to be displayed at a particular scroll percentage
    createFilteredFramesArr();

    // Calculating the increment in scroll percentage for each frame
    incr = 100 / filteredFramesArr.length;

    //Clearing the entire screen of all the frames of the SVG
    clearScreen();
    // Displaying the cover image
    coverP.style.display = "block";

    // Event listener for the scroll event
    window.addEventListener("scroll", () => {

        // Getting the current scroll percentage
        let scrollP = getScrollbarPercentage();

        //  Calculating the current frame index
        frameIndex = Math.floor(scrollP / incr);
        console.log(scrollP, frameIndex);

        // Clearing the screen of the previously displayed frame - if any
        clearScreen();
        // Displaying first frame array - image, speech bubble, and text
        displayCurrFrame();

    });
});

// Declaring some more global variables essential to create the filtered frames array
let j = 0;
let prevFrames = [];
let prevFramesArr = [];
let incr;
let filteredFramesArr = [];
let fFAIndex = 0;



function createFilteredFramesArr() {
    let i = 0;
    let currFrameArr = [];
    let flag = true;
    while (flag) {
        let currFrame = filteredFrames[i];
        currFrameArr.push(currFrame);
        let frameNo;
        frameNo = getFrameNo(currFrame);
        i++;
        while ((i < filteredFrames.length - 1) && frameNo == getFrameNo(filteredFrames[i])) {
            currFrameArr.push(filteredFrames[i]);
            if (i > filteredFrames.length - 1) {
                flag = false;
                break;
            }
            frameNo = getFrameNo(filteredFrames[i]);
            i++;
        }
        filteredFramesArr[fFAIndex] = currFrameArr;
        currFrameArr = [];
        fFAIndex++;
        if (i > filteredFrames.length - 1) {
            flag = false;
            break;
        }

    }
}

// gets the frame number from the frame id
function getFrameNo(frame) {
    // for one digit frame ids
    if (frame.id.length == 3) {
        return parseInt(frame.id[1]);
    }
    // for two digit frame ids
    else if (frame.id.length == 4) {
        return parseInt(frame.id[1] + frame.id[2]);
    }
}

// removes all the frames from the screen including the cover page
function clearScreen() {
    for (let i = 0; i < filteredFrames.length; i++) {
        filteredFrames[i].style.display = 'none';
    }
    coverP.style.display = "none";

}

// gets the scrollbar percentage
function getScrollbarPercentage() {
    //  getting the scrolltop, scrollheight, and clientheight of the document
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // calculating the scroll percentage
    const scrollbarPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    return scrollbarPercentage;
}

// displays the current frame and also plays the sound effect/music associated with the frame
function displayCurrFrame() {
    // getting the current frame array
    visibleFrameArr = filteredFramesArr[frameIndex];

    // checking for the sound effect/music to be played and calling the function with the frame number to play the sound effect/music
    if (frameIndex - 1 == 1) playMusic(1);
    if (frameIndex - 1 == 2) playMusic(2);
    if (frameIndex - 1 == 6) playMusic(6);
    if (frameIndex - 1 == 13) playMusic(13);
    if (frameIndex - 1 == 25) playMusic(25);
    if (frameIndex - 1 == 30) playMusic(30);
    if (frameIndex - 1 == 33) playMusic(33);
    if (frameIndex - 1 == 40) playMusic(40);
    if (frameIndex - 1 == 45) playMusic(45);
    if (frameIndex - 1 == 49) playMusic(49);
    if (frameIndex - 1 == 59) playMusic(59);
    if (frameIndex - 1 == 62) playMusic(62);
    if (frameIndex - 1 == 69) playMusic(69);

    // displaying the current frame array
    for (let i = 0; i < visibleFrameArr.length; i++) {

        visibleFrameArr[i].style.display = "block";

    }
}

// ref: https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript
// function to detect idle time
function idleLogout() {
    // 
    let t;
    // flag essential to avoid calling functions on undefined variables in the beginning
    let flag = false;
    // calling the function of resetTimer on specific DOM elements
    window.onload = resetTimer;
    window.addEventListener('scroll', resetTimer, true);

    // calling the function to handle in the event that there screen is idle for more than 20 seconds
    function triggerIdleHandler() {
        console.log("You have been inactive for 20 seconds");
        // music pauses
        curr_music.pause();
        // the screen is cleared and the keep scrolling message is displayed
        clearScreen();
        keepScrollP.style.display = "block";

    }

    // function to reset the timer on specific events
    function resetTimer() {
        console.log("reset timer");
        // the setTimeout is cleared
        clearTimeout(t);
        // a new timer is set
        t = setTimeout(triggerIdleHandler, 20000);  // time is in milliseconds

        // handling edge case on window onload
        if (flag) {
            // removing the keep scrolling message
            keepScrollP.style.display = "none";
            // displaying the current frame and restarting the frame music/sound effect
            displayCurrFrame();
            curr_music.play();
        }
        flag = true;

    }
}
// calling the function to detect idle time
idleLogout();

// function to map sound effects to specific frames
function playMusic(fn) {
    switch (fn) {
        // In each of these cases, the current playing music is first paused, changed to the new sound effect, and then played again
        // This avoids overlapping of sound effects from different frames
        case 1: {
            curr_music.pause();
            curr_music = aud_frame1;
            curr_music.play();
            break;
        }
        case 2: {
            curr_music.pause();
            curr_music = aud_frame2;
            curr_music.play();
            break;
        }
        case 6: {
            curr_music.pause();
            curr_music = aud_frame6;
            curr_music.play();
            break;

        }
        case 13: {
            curr_music.pause();
            curr_music = aud_frame13;
            curr_music.play();
            break;
        }
        case 25: {
            curr_music.pause();
            curr_music = aud_frame25;
            curr_music.play();
            break;
        }
        case 30: {
            curr_music.pause();
            curr_music = aud_frame30;
            curr_music.play();
            break;
        }
        case 33: {
            curr_music.pause();
            curr_music = aud_frame33;
            curr_music.play();
            break;
        }
        case 40: {
            curr_music.pause();
            curr_music = aud_frame40;
            curr_music.play();
            break;
        }
        case 45: {
            curr_music.pause();
            curr_music = aud_frame45;
            curr_music.play();
            break;
        }
        case 49: {
            curr_music.pause();
            curr_music = aud_frame49;
            curr_music.play();
            break;
        }
        case 59: {
            curr_music.pause();
            curr_music = aud_frame59;
            curr_music.play();
            break;
        }
        case 62: {
            curr_music.pause();
            curr_music = aud_frame62;
            curr_music.play();
            break;
        }
        // stopping the music in the last frame
        case 69: {
            curr_music.pause();

            break;
        }
    }
}
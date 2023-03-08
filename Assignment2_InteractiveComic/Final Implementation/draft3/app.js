let svgObject;
let svgDoc;
let innerDoc;
let allFrames;
let allFramesArr;
let filteredFrames;

let keepScrollP = document.querySelector(".keep-scrolling");
let coverP = document.querySelector(".cover-page");

// // Get the total height of the document
// const docHeight = document.documentElement.scrollHeight;

// // Get the visible height of the window
// const windowHeight = window.innerHeight;

// // Calculate the proportion of the scrollbar height to the total height
// const scrollbarHeight = windowHeight / docHeight;


let frameIndex = 1;
// let currVisFrame;
let visibleFrameArr;

// audio import
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
// let curr_music;
let curr_music = aud_frame1; //initializing

window.addEventListener("load", () => {


    svgObject = document.getElementById('comic_object');
    svgDoc = svgObject.contentDocument;
    innerDoc = svgDoc.documentElement;



    allFrames = innerDoc.querySelectorAll('g');
    // allFramesArr = Array.from(allFrames);
    allFramesArr = [...allFrames];
    filteredFrames = allFramesArr.filter((frame) => { if (frame.id[0] == "f") return true; });


    createFilteredFramesArr();

    incr = 100 / filteredFramesArr.length;

    clearScreen();
    coverP.style.display = "block";
    // innerDoc.style.display = "None";
    // filteredFrames[0].style.display = 'block';
    // body.style.backgroundImage = "url('./assets/cover_page.jpg')";
    alert("This is a scroll comic! Scroll along to see the story unfold!");
    // for (let i = 1; i < filteredFrames.length; i++) {
    //     // allFrames[i].querySelector("image").style.width = "490px";
    //     // allFrames[i].querySelector("image").style.height = "490px";
    //     // if (allFrames[i].querySelector("image")) {
    //     //     console.log(allFrames[i].id);
    //     //     allFrames[i].querySelector("image").style.width = "200px";
    //     // }


    //     filteredFrames[i].style.display = 'none';
    // }
    // let prevScroll = 0;

    window.addEventListener("scroll", () => {

        let scrollP = getScrollbarPercentage();

        frameIndex = Math.floor(scrollP / incr);
        console.log(scrollP, frameIndex);

        clearScreen();
        displayCurrFrame();
        // visibleFrameArr = filteredFramesArr[frameIndex];
        // for (let i = 0; i < visibleFrameArr.length; i++) {

        //     visibleFrameArr[i].style.display = "block";

        // }




        // console.log(scrollP);
        // // Mapping color changes
        // if (scrollP / frameIndex >= incr) {
        //     nextFrame();
        //     // prevScroll = scroll;
        // }
        // if (scrollP / frameIndex <= incr) {
        //     prevColor();
        //     // prevScroll = scroll;
        // }

        /*let scroll = window.scrollY;

        // console.log(thumbPosition);

        console.log(scroll);
        if (scroll - prevScroll > 100) {
            displayFrames();
            prevScroll = scroll;
        }
        if (scroll - prevScroll < -100) {
            removeFrames();
            prevScroll = scroll;
        }*/


    });
});


let j = 0;
let prevFrames = [];
let prevFramesArr = [];
let incr;
let filteredFramesArr = [];
let fFAIndex = 0;




// function nextFrame() {
//     let frame = allFrames[frameIndex];

//     if (frameIndex < allFrames.length - 1) {
//         frameIndex++;

//     }
//     // if (frame.id[2] == "i" || frame.id[3] == "i") {
//     //     for (let i = 0; i < prevFrames.length; i++) {
//     //         prevFrames[i].style.display = "none";
//     //     }
//     //     prevFramesArr.push(prevFrames);
//     //     prevFrames = [];
//     // }
//     frame.style.display = "block";
//     // prevFrames.push(frame);


// }

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
            // console.log("Frame no:", frameNo);
            currFrameArr.push(filteredFrames[i]);
            if (i > filteredFrames.length - 1) {
                // filteredFrames.push(currFrameArr);
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

function getFrameNo(frame) {
    // console.log(frame);
    if (frame.id.length == 3) {
        // console.log(frame.id[1])
        return parseInt(frame.id[1]);
    }
    else if (frame.id.length == 4) {
        // console.log(frame.id[1] + frame.id[2]);
        return parseInt(frame.id[1] + frame.id[2]);
    }
}

// function prevColor() {
//     if (frameIndex > 0) {
//         frameIndex--;
//     }

//     let frame = allFrames[frameIndex];
//     frame.style.display = "none";

// }

function clearScreen() {
    for (let i = 0; i < filteredFrames.length; i++) {
        filteredFrames[i].style.display = 'none';
    }
    coverP.style.display = "none";

}
// function displayFrames() {
//     let frame = allFrames[j];

//     if (j < allFrames.length - 1) {
//         j++;
//     }

//     if (frame.id[0] == "f") {
//         if (frame.id[2] == "i" || frame.id[3] == "i") {
//             for (let i = 0; i < prevFrames.length; i++) {
//                 prevFrames[i].style.display = "none";
//             }
//             prevFramesArr.push(prevFrames);
//             prevFrames = [];
//         }
//         frame.style.display = "block";
//         prevFrames.push(frame);
//     }
//     else {
//         displayFrames();
//     }
//     // frame.style.display = "block";
//     // check

// }

// function removeFrames() {

//     let frame = allFrames[j];
//     if (j > 1) {
//         j--;
//     }
//     frame.style.display = "none";
//     if (frame.id[0] == "f") {

//         let currFrame = prevFramesArr.pop();
//         for (let i = 0; i < currFrame.length; i++) {
//             currFrame[i].style.display = "none";
//             j--;
//         }
//         frame = allFrames[j];
//         frame.style.display = "none";
//         let displayFrame = prevFramesArr[prevFramesArr.length - 1];
//         for (let i = 0; i < displayFrame.length; i++) {
//             displayFrame[i].style.display = "block";
//         }
//     }
//     else {
//         removeFrames();
//     }

// }

function getScrollbarPercentage() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollbarPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    return scrollbarPercentage;
}

// function removeFrames() {
//     // allFrames[j].style.display = "none";
//     // if (j > 1) {
//     //     j--;
//     // }

//     // write the exact opposite of displayFrames
//     if (j > 1) {
//         j--;
//     }
//     let frame = allFrames[j];


//     if (frame.id[0] == "f") {
//         // implement the opposite of the if statement in displayFrames

//         frame.style.display = "none";
//         // if (frame.id[2] == "i" || frame.id[3] == "i") {
//         //     frame = allFrames[j - 1];
//         //     // frame.style.display = "block";
//         //     while (frame.id[0] == "f") {
//         //         frame.style.display = "block";
//         //         j--;
//         //         frame = allFrames[j - 1];
//         //         if (frame.id[2] == "i" || frame.id[3] == "i") {
//         //             frame.style.display = "block";
//         //             break;
//         //         }
//         //     }
//         // }

//     }
//     else {
//         removeFrames();
//     }

// }

function displayCurrFrame() {
    visibleFrameArr = filteredFramesArr[frameIndex];

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

    for (let i = 0; i < visibleFrameArr.length; i++) {

        visibleFrameArr[i].style.display = "block";

    }
}

// ref: https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript
function idleLogout() {
    let t;
    window.onload = resetTimer;
    // window.onmousemove = resetTimer;
    // window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    // window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
    // window.ontouchmove = resetTimer;  // required by some devices 
    // window.onclick = resetTimer;      // catches touchpad clicks as well
    // window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true); // improved; see comments
    // window.addEventListener('click', resetTimer, false); // improved; see comments
    // window.addEventListener('touchstart', resetTimer, false); // improved; see comments
    // window.addEventListener('keypress', resetTimer, false); // improved; see comments
    // window.addEventListener('mousemove', resetTimer, false); // improved; see comments

    let flag = false;

    function yourFunction() {
        // your function for too long inactivity goes here
        // e.g. window.location.href = 'logout.php';
        console.log("You have been inactive for 10 seconds");
        curr_music.pause();
        clearScreen();
        keepScrollP.style.display = "block";

    }

    function resetTimer() {
        console.log("reset timer");
        clearTimeout(t);

        t = setTimeout(yourFunction, 10000);  // time is in milliseconds
        if (flag) {
            keepScrollP.style.display = "none";
            displayCurrFrame();
            curr_music.play();
        }
        flag = true;

    }
}
idleLogout();

function playMusic(fn) {
    switch (fn) {
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
        case 69: {
            curr_music.pause();

            break;
        }
    }
}
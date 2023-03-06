// An array of colors from sunrise to sunset to use for the background
const skyColors = [
    // Sunrise
    "#ff6666", // Red
    "#ff9966", // Orange
    "#ffcc66", // Yellow-orange
    "#ffff66", // Yellow

    // Daytime
    "#66ccff", // Light blue
    "#3399ff", // Blue
    "#0066ff", // Dark blue

    // Sunset
    "#ff99cc", // Pink
    "#ff6699", // Red-orange
    "#ff3333", // Red
    "#cc3300", // Dark orange

    // Nighttime
    "#000033", // Dark blue
    "#000066", // Blue-black
    "#000033", // Dark blue
    "#000000"  // Black
];
// declaring variables
let color;
let colorIndex = 0;

// Finding the increment in the scroll bar when the background changes
let incr = 100 / skyColors.length;

// Event Listener for the scroll event
window.addEventListener("scroll", () => {

    // Finding the current position of the scrollbar in the screen in terms of percentage
    let scrollP = getScrollbarPercentage();
    console.log(scrollP);

    // Mapping color changes
    if (scrollP / colorIndex >= incr) {
        nextColor();
        prevScroll = scroll;
    }
    if (scrollP / colorIndex <= incr) {
        prevColor();
        prevScroll = scroll;
    }
});

function nextColor() {
    color = skyColors[colorIndex];
    if (colorIndex < skyColors.length - 1) {
        colorIndex++;
    }
    document.body.style.backgroundColor = color;
}

function prevColor() {
    if (colorIndex > 0) {
        colorIndex--;
    }

    color = skyColors[colorIndex];
    document.body.style.backgroundColor = color;
}

function getScrollbarPercentage() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollbarPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    return scrollbarPercentage;
}
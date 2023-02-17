// Making an IntersectionObserver object and defining a specific funtion to excute
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        // Switching between adding and removing the show-steps class based
        if (entry.isIntersecting) {
            entry.target.classList.add("show-steps");
        }
        else {
            entry.target.classList.remove("show-steps");
        }
    });
});
// reference: https://www.youtube.com/watch?v=T33NN_pPeNI

// Selecting DOM Elements
const hiddenSteps = document.querySelectorAll(" .hidden-steps");
const up_arrow = document.querySelector("#top_arrow");

// Executing the observe function for each element with the specific class
hiddenSteps.forEach((elem) => observer.observe(elem));

// To find the location of the scrollbar
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    // When the scrollbar hits a particular point in the website, toggle between display block and none
    if (scroll > 900) {
        up_arrow.style.display = "block";
    }
    else {
        up_arrow.style.display = "none";
    }
});

//reference: https://stackoverflow.com/questions/2481350/how-can-i-get-the-scrollbar-position-with-javascript

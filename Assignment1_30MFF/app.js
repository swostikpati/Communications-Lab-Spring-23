// Making an IntersectionObserver object and defining a specific funtion to excute
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
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

// Executing the observe function for each element with the specific class
hiddenSteps.forEach((elem) => observer.observe(elem));


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show-steps");
        }
        else {
            entry.target.classList.remove("show-steps");
        }
    });
});
// reference: https://www.youtube.com/watch?v=T33NN_pPeNI

const hiddenSteps = document.querySelectorAll(" .hidden-steps");

hiddenSteps.forEach((elem) => observer.observe(elem));


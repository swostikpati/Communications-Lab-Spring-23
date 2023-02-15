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

const hiddenSteps = document.querySelectorAll(".steps-container .hidden-steps");

hiddenSteps.forEach((elem) => observer.observe(elem));


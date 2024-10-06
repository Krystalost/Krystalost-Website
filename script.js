document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        bar.style.width = skill;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        bar.style.width = skill;
    });
});
// script.js
document.getElementById('youtubeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Bağlantının normal işlevini durdur
    alert('Bu bağlantıya tıkladığınızda, YouTube sayfasına yönlendirileceksiniz!');
    window.location.href = this.href; // Bağlantıya yönlendir
});

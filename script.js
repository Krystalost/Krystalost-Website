document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.querySelector(".welcome-text");
    const mainText = document.querySelector(".main-text");

    // "Welcome" yazısının animasyonu tamamlandığında
    welcomeText.addEventListener("animationend", () => {
        welcomeText.style.display = "none"; // "Welcome" gizlenir
        mainText.style.display = "block"; // "I'm waiting for..." gösterilir
        setTimeout(() => {
            mainText.style.opacity = "1"; // Görünürlük artırılır
            mainText.style.transform = "scale(1)"; // Normal boyutlandırma
        }, 100); // Hafif gecikme
    });
});

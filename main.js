document.querySelectorAll(".notice-title").forEach(item => {
    item.addEventListener("click", () => {
        const content = item.nextElementSibling;

        document.querySelectorAll(".notice-content").forEach(el => {
            if (el !== content) el.style.display = "none";
        });

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});

const targetDate = new Date("2026-05-31T23:59:59+09:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (distance <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

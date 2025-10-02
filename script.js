const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let time = 25 * 60; // 25 minutes in seconds
let interval;

function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timer.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

startBtn.addEventListener("click", () => {
    interval = setInterval(() => {
        if(time > 0){
            time--;
            updateTimer();
        } else {
            clearInterval(interval);
            alert("Time's up!");
        }
    }, 1000);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    time = 25 * 60;
    updateTimer();
});

updateTimer(); // initial display

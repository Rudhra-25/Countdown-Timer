let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;
let isPaused = false;

  const timerDisplay = document.getElementById("timer");
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const pauseButton = document.getElementById("pauseButton");
  const resetButton = document.getElementById("resetButton");

  function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    timerDisplay.textContent = formatTime(elapsedTime);
  }

  startButton.addEventListener("click", () => {
    if (!isRunning) {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateTimer, 1000);
      isRunning = true;
      isPaused = false;
    }
  });

  stopButton.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(timerInterval);
      isRunning = false;
      isPaused = false;
    }
  });

  pauseButton.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(timerInterval);
      isRunning = false;
      isPaused = true;
    }
  });

  resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    isRunning = false;
    isPaused = false;
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00";
  });

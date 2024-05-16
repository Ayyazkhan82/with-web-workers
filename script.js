document.addEventListener("DOMContentLoaded", function (){
    let counter = 0;
    const counterDisplay = document.getElementById("counter");

    let incrementBtn = document.getElementById("incrementBtn");

    let decrementBtn = document.getElementById("decrementBtn");

    incrementBtn.onclick = function (){
        counter++;
        counterDisplay.innerHTML = counter;
    };

    decrementBtn.onclick = function (){
        counter--;
        counterDisplay.innerHTML = counter;
    };

    const heavyworker = new Worker('worker.js');

    document.getElementById("heavyBtn").addEventListener("click", function (){
        heavyworker.postMessage('start');
    });
});
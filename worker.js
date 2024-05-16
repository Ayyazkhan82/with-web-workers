

self.onmessage = function (event) {
    const message = event.data;
    if (message === 'start') {
        const result = heavyCalculation();
        postMessage(result);
    }
};

function heavyCalculation(){
    let result = 0;
    for (let i = 0; i < 1000000560; i++){
        result += Math.sqrt(i);
    }
    console.log("Heavy calculation done. Result:", result);
}
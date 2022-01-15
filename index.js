window.onload = init;


function init() {

    let myCanvas = document.getElementById("clock");

    if (myCanvas.getContext) {
        let ctx = myCanvas.getContext('2d');

        update(ctx);

    } else {
        alert("Canvas is not supported");
    }


}

function update(ctx) {
    
    let currentTime = new Date();
    let seconds = currentTime.getSeconds();
    let minutes = currentTime.getMinutes();
    let hours = currentTime.getHours();

    let secondsDegrees = (seconds - 15) * 6;
    let minutesDegrees = (minutes - 15) * 6;
    let hoursDegrees = (hours - 3 + minutes / 60) * 30;

    ctx.save();

    ctx.clearRect(0, 0, 400, 300);

    ctx.beginPath();
    ctx.arc(200, 150, 120, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.translate(200, 150);
    ctx.rotate((6 / 360) * secondsDegrees);
    ctx.translate(-200, -150);

    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 40);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();

    secondsDegrees++;

    ctx.save();

    ctx.translate(200, 150);
    ctx.rotate((1 / 3600) * minutesDegrees);
    ctx.translate(-200, -150);

    

    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 50);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
    ctx.save();
    

    minutesDegrees++;

    ctx.save();

    ctx.translate(200, 150);
    ctx.rotate((0.16 / 36000) * hoursDegrees);
    ctx.translate(-200, -150);

    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 80);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
    ctx.save();

    hoursDegrees++;

    requestAnimationFrame(function () {
        update(ctx);
    });

}
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
        let dateToday = new Date();
        let hr = dateToday.getHours().toString().padStart(2, '0');
        let min = dateToday.getMinutes().toString().padStart(2, '0');
        let sec = dateToday.getSeconds().toString().padStart(2, '0');

        if (hr < 10) { hr = '0' + hr;}
        if (min < 10) { min = '0' + min;}
        if (sec < 10) { sec = '0' + sec;}

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = sec;


})



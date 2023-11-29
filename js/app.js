let min = 0;
let hr = 0;
let seg = 0;
let id;
const btnIniciar = document.querySelector("#btnIniciar");
const btnPausar = document.querySelector("#btnPausar");
const btnReiniciar = document.querySelector("#btnReset");

const cronometro = () => {
  const crono = document.querySelector("#cronometro");
  seg++;

  if(seg < 10){
    seg = '0'+ seg;
  }

  if (seg === 60) {
    seg = 0;
    min++;
  }

  if (min === 60) {
    min = 0;
    hr++;
  }

  crono.innerHTML = `${hr} : ${min} : ${seg}`;
};

const pause = () =>{
  clearInterval(id);
}

const reset = () =>{
  const crono = document.querySelector("#cronometro");
  clearInterval(id);
  hr = 0;
  min = 0;
  seg = 0;
  crono.innerHTML = `${hr} : ${min} : ${seg}`;

}

btnIniciar.addEventListener("click", () =>{id = setInterval(cronometro,1000)});
btnPausar.addEventListener('click', pause);
btnReiniciar.addEventListener('click', reset);
AOS.init();

const dataAniversario = new Date("Jul 6, 2023 19:00:00");
const stampAniversario = dataAniversario.getTime();

const contaTempo = setInterval(function(){
    const dataAtual = new Date();
    const stampAtual = dataAtual.getTime();

    const tempoAteOAniversario = stampAniversario - stampAtual;
    
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diaAteOAniversario = Math.floor(tempoAteOAniversario / diaEmMs);
    const horaAteOAniversario = Math.floor((tempoAteOAniversario % diaEmMs) / horaEmMs);
    const minutoAteOAniversario = Math.floor((tempoAteOAniversario % horaEmMs) / minutoEmMs);
    const secAteOAniversario = Math.floor((tempoAteOAniversario % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diaAteOAniversario}d ${horaAteOAniversario}h ${minutoAteOAniversario}m ${secAteOAniversario}s`;

})


const home = document.querySelector("[data-button-home]")
const local = document.querySelector("[data-button-local]");
const contato = document.querySelector("[data-button-contato]");


home.addEventListener("click", function(){
    document.getElementById('home').scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });
});

local.addEventListener("click", function(){
    document.getElementById('local').scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });
});

contato.addEventListener("click", function(){
    document.getElementById('contato').scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });
});

console.log(contato);
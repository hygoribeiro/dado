var dados = document.getElementById("dados");
 dados.addEventListener('click',function() {
    var numeroAleatorio = Math.floor(Math.random() * 6 ) + 1;

    dice.innerHTML = numeroAleatorio
 })

 var style = document.createElement("style");
style.innerHTML = "@keyframes roll { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
document.head.appendChild(style);


dados.addEventListener("click", function () {
    dados.classList.add("rolling");

    setTimeout(function () {
        var numeroAleatorio = Math.floor(Math.random() * 6 ) + 1;

        dados.innerHTML = numeroAleatorio;

        dados.classList.remove("rolling");

    },1000);
});
let mybutton = document.getElementById("top");

// Quando o usuário rolar para baixo 20px da parte superior do documento, mostre o botão
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

function backToTop() {
document.documentElement.scrollTop = 0;
}
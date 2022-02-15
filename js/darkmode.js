let body = document.getElementById("body");

function cambiarClases() {
  let conf = confirm("¿Esta seguro?");
  if (conf) {
    body.classList.toggle("body-dark");
    body.children[0].children[0].classList.toggle("nav-dark");
    body.children[1].classList.toggle("targeta-presentacion-dark");
    body.children[2].classList.toggle("footer-dark");
  }
}

document.getElementById("display").addEventListener("click", cambiarClases);
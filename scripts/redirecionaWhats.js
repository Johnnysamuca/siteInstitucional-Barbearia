const botaoMarcaConsulta = document.querySelector(".btn-temp");

function redirecionaWhats() {
  const phoneNumber = "5524999419788";
  const message = "Olá gostaria de ser atendida(o)";
  const whatsUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.location.href = whatsUrl;
}

botaoMarcaConsulta.addEventListener("click", redirecionaWhats);

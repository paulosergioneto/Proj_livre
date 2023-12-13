function sendForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Aqui você pode enviar os dados para o servidor para processamento,
  // que então enviaria um e-mail. Não é seguro enviar e-mails diretamente do lado do cliente.

  // Exemplo de chamada de API do WhatsApp
  var whatsappLink = "https://api.whatsapp.com/send?phone=5521970295571&text=Olá,%20meu%20nome%20é%20" + name + "%20e%20meu%20pedido%20é:%20" + message;
  window.location.href = whatsappLink;
}
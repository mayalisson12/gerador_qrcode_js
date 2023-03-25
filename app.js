document.addEventListener("DOMContentLoaded", function() {
    // Adicionar o listener de evento para o botão
    document.getElementById("generate-btn").addEventListener("click", function() {
      // Gerar o QR Code com os dados preenchidos no formulário
      var ssid = document.getElementById("ssid").value;
      var encryption = document.getElementById("encryption").value;
      var password = document.getElementById("password").value;
  
      // Remover o QR Code anterior, se existir
      var qrCodeDiv = document.getElementById("qr-code");
      while (qrCodeDiv.firstChild) {
        qrCodeDiv.removeChild(qrCodeDiv.firstChild);
      }
  
      // Gerar o novo QR Code
      var qrcode = new QRCode(document.getElementById("qr-code"), {
        text: "WIFI:T:" + encryption + ";S:" + ssid + ";P:" + password + ";;",
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
  
      // Exibir a mensagem de recarregar a página
      var qrMessage = document.getElementById("qr-message");
      if (!qrMessage) {
        qrMessage = document.createElement("p");
        qrMessage.id = "qr-message";
        qrMessage.innerText = "Recarregue a página para gerar um novo QR Code";
        document.body.appendChild(qrMessage);
      }
    });
  });
  
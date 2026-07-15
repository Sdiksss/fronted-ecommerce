import { useState } from 'react';
import '../cart/styles/CartPayment.css'



const CartPayment = () => {
    
  const [operationCode, setOperationCode] = useState("");

  const handleWhatsAppSend = () => {
    const phoneNumber = "51900001090"; // Perú (51) + tu número
    const message = `Hola, este es mi comprobante de pago. Código de operación: ${operationCode}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="payment-method">
      <h2>Método de pago</h2>
      <p>Escanea este código QR para pagar con Yape:</p>
      <img src="/qr-yape.png" alt="QR Yape" className="qr-image" />

      <p>O deposita a la cuenta BCP:</p>
      <ul>
        <li>Banco: BCP</li>
        <li>Número de cuenta: 123-4567890-0-12</li>
        <li>CCI: 00212345678901234567</li>
      </ul>

      <p>Una vez hecho el pago, sube la captura o coloca el código de operación:</p>
      <input
        type="text"
        placeholder="Código de operación"
        value={operationCode}
        onChange={(e) => setOperationCode(e.target.value)}
      />
      <input type="file" accept="image/*" />

      <button onClick={handleWhatsAppSend}>Enviar por WhatsApp</button>
    </section>
  );
};

export default CartPayment;
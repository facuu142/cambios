import "./buyTicket.css"
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";
import { MercadoPagoIcon } from '../../Icons/SocialMedia/MercadoPagoIcon';

const BuyTicket =  ({ isOpen, onClose}) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <div className="left-side">
          <h2 style={{ marginTop: "7%" }}>Ticket</h2>
          <p>Fecha: {}</p>
          <p>Ubicación: {}</p>
          <p>Horario: {}</p>
          <p style={{ marginTop: "10%" }}>Vendedor <br></br>
          </p>
          <p style={{ marginTop: "10%" }}>Tips<br></br><br></br>
          Disfruta de tu entrada digital para ingresar a tus eventos favoritos,recorda no compartir tu Qr
           a ningun desconocido y llevar tu celular cargado al evento para poder ingresar con tu entrada digita.</p>
        </div>
        <div className="right-side">
        <button className="close-button" onClick={onClose}>X</button>
<h2>Resumen de compra</h2>
        <p>Evento: {}</p>
          <p>Precio: {}</p>
          <p>Impuesto: {}</p>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2%" }}>
            <p>Metodo de pago</p>
            <p style={{color:"rgb(76, 187, 224)"}}><MercadoPagoIcon /> Mercado Pago</p>
          </div>
          <p style={{ marginTop: "10%" }} className="line"></p>
          <p>Total: {}</p>
          <p style={{ marginTop: "30%", textAlign: "center" }}>Sera redireccionado a la aplicacion de Mercado Pago para finalizar la compra.</p>
          <div style={{ marginTop: "5%",display: "flex", justifyContent: "center" }}>
            <SecondaryButton text="Pagar entrada" backColor="var(--color-green)" style={{ width: "200px", height: "50px", fontSize: "16px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket

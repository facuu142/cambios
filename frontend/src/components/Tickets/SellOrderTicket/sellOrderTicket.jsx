import { MercadoPagoIcon } from "../../Icons/SocialMedia/MercadoPagoIcon";
import "./sellOrderTicket.css"

const SellOrderTicket = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <div className="left-side" style={{boxShadow: "22px 22px 22px rgba(999, 0, 0, 0)"}}>
          <h2 style={{ marginTop: "7%" }}>Ticket</h2>
          <p style={{ marginTop: "10%" }}>Comprador:<br></br><br></br>traer card del comprador {}</p>
          <p style={{ marginTop: "10%",backgroundColor:"rgba(66, 66, 66, 4)" }} className="line"></p>
          <p>Entrada a transferir: {}</p>
          <p>traer card de ticket {}</p>
          <p style={{ marginTop: "27%" }}>Tips<br></br><br></br>
          Disfruta de tu entrada digital para ingresar a tus eventos favoritos,recorda no compartir tu Qr
           a ningun desconocido y llevar tu celular cargado al evento para poder ingresar con tu entrada digita.</p>
        </div>
        <div className="right-side">
        <button className="close-button" onClick={onClose}>X</button>
          <h2 style={{textAlign: "center"}}>Resumen de compra</h2>
          <p>Evento {}</p>
          <p>Oferta del comprador {}</p>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2%" }}>
           <p>Metodo de pago</p>
           <p style={{color:"rgb(76, 187, 224)"}}><MercadoPagoIcon /> Mercado Pago</p>
          </div>
          <p style={{ marginTop: "10%" }} className="line"></p>
          <p>Total del cobro {}</p>
          <p style={{ marginTop: "30%", textAlign: "center",fontSize:"14px"}}>Al finalizar la compra tu entrada sera entregada al comprador y no tendras mas acceso a la misma.</p>
          <div style={{ marginTop: "5%",display: "flex", justifyContent: "center" }}>
          <button style={{width:"300px",height:"50px",borderRadius:"15px", backgroundColor:"var(--color-red)",color:"white", borderBlock:"none",fontSize:"17px"}}>Vender entrada</button>

          </div>

        </div>
      </div>
    </div>
  );
};
{/* Renderizar el componente AddManualTicket si isPopupOpen es true */}


export default SellOrderTicket;

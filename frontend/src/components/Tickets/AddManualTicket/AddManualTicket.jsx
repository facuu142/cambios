import { MercadoPagoIcon } from "../../Icons/SocialMedia/MercadoPagoIcon";
import "./addManualTicket.css"
const AddManualTicket = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div style={{backgroundColor: "rgb(10, 10, 10)",maxHeight:"630px", maxWidth:"410px",padding:"30px"}}>
      <button className="close-button" style={{color:"white"}} onClick={onClose}>X</button>

          <h2 style={{marginTop:"2%"}}>Crear orferta de venta</h2>
          <p style={{marginTop:"8%"}}>Evento</p>
          <select style={{marginTop:"2%",width:"340px",height:"50px",borderRadius:"18px",backgroundColor: "rgba(255, 255, 255, 0.683)"}}></select>
          <p style={{marginTop:"8%"}}>Precio unitario</p>
          <input style={{marginTop:"2%",width:"340px",height:"50px",borderRadius:"18px",backgroundColor: "rgba(255, 255, 255, 0.683)"}} placeholder="      ARS$"></input>
          <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2%" }}>
            <p>Metodo de pago</p>
            <p style={{color:"rgb(76, 187, 224)"}}><MercadoPagoIcon /> Mercado Pago</p>
          </div>
          </div>
          <p style={{ marginTop: "15%" ,color:"white"}}>Recordatorio</p>
          <p style={{ marginBottom: "5%"}}>
          Al crear una orden de venta, su entrada sera 
          retenida por la plataforma para proporcionar
          una experiencia de compra y venta mas segura 
          y rapida. En caso de querer cancelar su orden
          de venta, puede administrarlo desde el
          apartado "Mis ordenes" y eliminar la orden de
          venta. Su entrada estara disponible en su 
          wallet.
           </p>

           <button style={{  cursor: "pointer",marginLeft: "15%", marginTop: "15%",width:"250px",height:"60px",borderRadius:"15px", backgroundColor:"rgb(93, 93, 93)",color:"white", borderBlock:"none",fontSize:"20px"}}>Vender tu entrada</button>

      </div>
    </div>
  );
};

export default AddManualTicket;

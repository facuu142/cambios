import "./footer.css";
import TrocaLogo from "../../../Icons/TrocaLogo/TrocaLogo";

const Footer = () => {
  return (
    <footer className="desktop-only">
     <div>
        <div className="troca-logo">
         <TrocaLogo/>
         <p style={{width:"400px"}}>2024-2024 TROCA.COM</p>
        </div>
        <div className="troca-info" style={{ display: "flex"}}>
  <div style={{ width: "200px" }}>
    <p style={{ fontSize: "24px", color: "white" }}>Mas sobre TROCA</p>
    <p style={{ marginTop: "8%" }}>Sobre Nosotros</p>
    <p>Contactanos</p>
    <p>Terminos del servicio</p>
    <p>Politicas de privacidad</p>
    <p>Preferencias de Cookies</p>
  </div>

  <div style={{ width: "200px", marginLeft:"4%" }}>
    <p style={{ fontSize: "24px", color: "white" }}>Soporte</p>
    <p style={{ marginTop: "8%" }}>Contactanos</p>
    <p>Anuncios</p>
  </div>

  <div style={{ width: "200px"}}>
    <p style={{ fontSize: "24px", color: "white" }}>Servicios</p>
    <p style={{ marginTop: "8%" }}>Mercado P2P</p>
    <p>Eventos</p>
    <p>Tu Perfil</p>
    <p>Wallet</p>
  </div>

  <div style={{ width: "200px"}}>
    <p style={{ fontSize: "24px", color: "white" }}>Compra & Venta</p>
    <p style={{ marginTop: "8%" }}>Busca ofertas de venta</p>
    <p>Busca ofertas de compra</p>
    <p>Crea una orden de venta</p>
    <p>Crea una orden de compra</p>
  </div>
</div>

        <div className="troca-contact" style={{ display: "flex", justifyContent: "space-between", marginTop:"0%"}}>
<p >Comunidad</p>
  <p>::</p>
  <p >::</p>
  <p>::</p>
  <p>::</p>

        </div>

      </div>
      <div className="troca-qr" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "17%" }}>
    <h2 style={{marginTop:"13%", fontSize:"24px"}}>Compra y vende<br></br> en la marcha</h2>

    <p style={{marginTop:"8%"}}>QR</p>


    <p style={{fontSize:"15px"}}>Usa TROCA desde tu celular</p>

    <h3 style={{marginTop:"33%", color: "white", fontSize:"20px"}}>No tenes cuenta?</h3>

    <button style={{marginTop:"3%",height:"70px", width:"170px",borderRadius:"30px",fontSize:"20px",}}>Registrate</button>

      </div>
    </footer>
  );
};

export default Footer;

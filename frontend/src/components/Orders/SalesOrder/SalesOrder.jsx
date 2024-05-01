import React from "react";
import TopBarMobile from "../../Layout/Mobile/TopBarMobile/TopBarMobile";
import { NavLink } from "react-router-dom";
import "../orders.css";
import { MercadoPagoIcon } from "../../Icons/SocialMedia/MercadoPagoIcon";
import PrimaryButton from './../../Buttons/PrimaryButton/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const SalesOrder = () => {
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/tickets/purchase");
    toast.success(`¡Orden de venta creada exitosamente!`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <>
      <TopBarMobile title="Crea una oferta" linkTo="/offers/active" />
      <div className="order-container">
        <section className="order-content">
          <div className="top">
            <small>Quiero</small>
            <ul>
              <li>
                <NavLink to="/order/purchase" className="purchase-order">
                  Comprar
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/sales" className="sales-order">
                  Vender
                </NavLink>
              </li>
            </ul>
            <h2>Detalles de su orden</h2>
            <form>
              <label htmlFor="eventName">Entrada</label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                placeholder="Seleccione un evento de su wallet"
                value="Recoleta Underground Experience"
              />
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="ARS$ 0"
              />
            </form>
            <div className="payment-method">
              <h3>Método de cobro</h3>
              <div>
                <MercadoPagoIcon width="14px" height="14px" />
                <span>Mercado Pago</span>
              </div>
            </div>
            <div className="payment-info">
              <h4>Recordatorio</h4>
              <p>
                Al crear una orden de venta, su entrada será retenida por la
                plataforma para proporcionar una experiencia de compra y venta
                mas segura y rápida. En caso de querer cancelar su orden de
                venta, puede administrarlo desde el apartado “Mis ordenes” y
                eliminar la orden de venta. Su entrada estará disponible en su
                wallet.
              </p>
            </div>
          </div>

          <div className="bottom">
            <PrimaryButton onClick={handleBuy} backColor="var(--color-red)" text="Crear orden de venta"/>
          </div>
        </section>
      </div>
    </>
  );
};

export default SalesOrder;

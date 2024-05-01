import { useState } from "react";
import "../tickets.css";
import { ThumbsUpIcon } from "./../../Icons/Basic/ThumbsUpIcon";
import { NavLink } from "react-router-dom";
import FloatingNavbarMobile from "./../../Layout/Mobile/FloatingNavbarMobile/FloatingNavbarMobile";
import Layout from "./../../Layout/Desktop/Layout";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";
import TopBarP2P from "../MenuTicketHeader/TopBarP2P";
import { MercadoPagoIcon } from "./../../Icons/SocialMedia/MercadoPagoIcon";
import SellOrderTicket from "../SellOrderTicket/sellOrderTicket";
import AddManualTicket from "../AddManualTicket/AddManualTicket";
import { PlusIcon } from "../../Icons/Basic/PlusIcon";

const SalesTickets = () => {
  const [isSellOpen, setIsPopupOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const openOfferPopup = () => {
    setIsOfferOpen(true);
  };

  const closeOfferPopup = () => {
    setIsOfferOpen(false);
  };
  const openSellPopup = () => {
    setIsPopupOpen(true);
  };

  const closeSellPopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Layout>
      <div className="background-ticket-navigator">
        <FloatingNavbarMobile />
      </div>
      <TopBarP2P />
      <div className="sale-purchase-navbar">
        <div className="content">
          <ul>
            <li>
              <NavLink to="/tickets/purchase">Compra</NavLink>
            </li>
            <li>
              <NavLink to="/tickets/sale">Venta</NavLink>
            </li>
            <li>
                <PlusIcon width="24px" height="24px"/>
              
            </li>
          </ul>
          <div className="desktop-only">
          <SecondaryButton text="Crear Oferta" onClick={openOfferPopup}/>
          </div>
        </div>
      </div>
      {/* Renderizar el componente AddManualTicket si isPopupOpen es true */}
      {isOfferOpen && (
        <AddManualTicket isOpen={isOfferOpen} onClose={closeOfferPopup}>
          {/* Contenido del popup */}
        </AddManualTicket>
      )}
      {isSellOpen && (
        <SellOrderTicket isOpen={isSellOpen} onClose={closeSellPopup}>
          {/* Contenido del popup */}
        </SellOrderTicket>
      )}
      <div className="tickets-container">
        <div className="tickets">
          <table>
            <thead>
              <tr className="desktop-only">
                <th>Comprador</th>
                <th>Evento</th>
                <th>Precio</th>
                <th>Método de pago</th>
                <th>Compra / Venta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="seller-info">
                  <p>Lucas</p>
                  <div>
                    <span className="mobile-only">-</span>
                    <ThumbsUpIcon width="10px" height="10px" className="icon" />
                    <span>99.99%</span>
                  </div>
                </td>
                <td className="event-name">Miss Monique</td>
                <td className="price">
                  <p>
                    <span>ARS$</span> 55,300
                  </p>
                  <div className="mobile-only">
                    <SecondaryButton
                      text="Vender"
                      backColor="var(--color-red)"
                    />
                  </div>
                </td>
                <td className="payment desktop-only">
                  <MercadoPagoIcon />
                  Mercado Pago
                </td>
                <td className="desktop-only">
                  <SecondaryButton text="Vender" backColor="var(--color-red)"  onClick={openSellPopup} />
                </td>
              </tr>
              <tr>
                <td className="seller-info">
                  <p>Joaquin</p>
                  <div>
                    <span className="mobile-only">-</span>
                    <ThumbsUpIcon width="10px" height="10px" className="icon" />
                    <span>99.86%</span>
                  </div>
                </td>
                <td className="event-name">
                  Juan Hansen (Live), transformation (Live)...
                </td>
                <td className="price">
                  <p>
                    <span>ARS$</span> 27,500
                  </p>
                  <div className="mobile-only">
                    <SecondaryButton
                      text="Vender"
                      backColor="var(--color-red)"
                    />
                  </div>
                </td>
                <td className="payment desktop-only">
                  <MercadoPagoIcon />
                  Mercado Pago
                </td>
                <td className="desktop-only">
                  <SecondaryButton text="Vender" backColor="var(--color-red)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default SalesTickets;

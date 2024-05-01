import { useEffect, useState } from "react";
import "../tickets.css";
import { NavLink } from "react-router-dom";
import FloatingNavbarMobile from "./../../Layout/Mobile/FloatingNavbarMobile/FloatingNavbarMobile";
import Layout from "./../../Layout/Desktop/Layout";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";
import TopBarP2P from "../MenuTicketHeader/TopBarP2P";
import axios from "axios";
import { Ticket } from "../Ticket/Ticket";
import { initMercadoPago } from "@mercadopago/sdk-react";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { PlusIcon } from "../../Icons/Basic/PlusIcon";
import AddManualTicket from "../AddManualTicket/AddManualTicket";
import BuyTicket from "../BuyTicket/BuyTicket";
initMercadoPago(import.meta.env.VITE_PUBLICKEY, { locale: "es-AR" });
const AllTickets = () => {
  const [isBuyOpen, setIsPopupOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const openOfferPopup = () => {
    setIsOfferOpen(true);
  };

  const closeOfferPopup = () => {
    setIsOfferOpen(false);
  };
  const openBuyPopup = () => {
    setIsPopupOpen(true);
  };

  const closeBuyPopup = () => {
    setIsPopupOpen(false);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const getTickets = async () => {
    try {
      const response = await axios.get(
        `https://troca-prod-main.onrender.com/ticket/all`
      );
      setTickets(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al obtener los tickets:", error);
    }
  };
  useEffect(() => {
    getTickets();
    setIsLoading(true);
  }, []);
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
                <PlusIcon width="24px" height="24px" onClick={openBuyPopup} />
              
            </li>
          </ul>
          <div className="desktop-only">
          <SecondaryButton text="Crear Oferta" onClick={openOfferPopup}/>
          </div>
        </div>
      </div>
      {isOfferOpen && (
        <AddManualTicket isOpen={isOfferOpen} onClose={closeOfferPopup}>
          {/* Contenido del popup */}
        </AddManualTicket>
      )}
      {isBuyOpen && (
        <BuyTicket isOpen={isBuyOpen} onClose={closeBuyPopup}>
          {/* Contenido del popup */}
        </BuyTicket>
      )}
      <>
        {isLoading ? (
          <SpinnerLoader />
        ) : (
          <div className="tickets-container">
            <div className="tickets">
              <table>
                <thead>
                  <tr className="desktop-only">
                    <th>Vendedor</th>
                    <th>Evento</th>
                    <th>Precio</th>
                    <th>Método de pago</th>
                    <th>Compra / Venta</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <Ticket ticket={ticket} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </>
    </Layout>
  );
};

export default AllTickets;

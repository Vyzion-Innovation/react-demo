import React from "react";
import "./index.css";
import RoutingPaths from "../../helper/routingPaths";

function Footer() {
  return (
    <>
      <div className="footer__div ps-3 pe-3">
        <div>
          <a
            href={RoutingPaths.home}
            rel="noopener noreferrer"
            className="text-black text-decoration-none"
          >
           React Demo 
          </a>
        </div>
        <div className="ms-auto d-flex">
          <span className="me-1 text-black">Powered by</span>
          <a
            href="https://vyzioninnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor__hover"
          >
            Vyzion &amp; Innovations
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

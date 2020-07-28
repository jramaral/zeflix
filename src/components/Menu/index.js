import React from "react";
import Logo from "../../assets/img/log-zeflix2.png";
import "./menu.css";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="ZeFlix Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

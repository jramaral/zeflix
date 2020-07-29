import React from "react";
import PageDefault from "./../../../components/PageDefault/index";
import { Link } from "react-router-dom";

export default function CadastroVideo() {
  return (
    <PageDefault>
      <h1> Cadastro de Vídeos</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

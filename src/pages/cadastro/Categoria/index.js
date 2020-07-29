import React from "react";
import PageDefault from "./../../../components/PageDefault/index";
import { Link } from "react-router-dom";

export default function CadastroCategoria() {
  return (
    <PageDefault>
      <h1> Cadastro de Categorias</h1>
      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

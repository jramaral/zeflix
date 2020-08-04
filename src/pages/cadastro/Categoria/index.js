import React, { useState, useEffect } from "react";
import PageDefault from "./../../../components/PageDefault/index";
import { Link } from "react-router-dom";
import FormField from "./../../../components/FormField/index";
import Button from "./../../../components/Button/index";

//custom hooks
function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute("name"),
            infosDoEvento.target.value
        );
    }
    function setValue(chave, valor) {
        //chave: nome, descricao, etc..
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function clearForm() {
        setValues(valoresIniciais)
    }

    return {
        values,
        handleChange,
        clearForm,
    }
}

export default function CadastroCategoria() {
  const valoresIniciais = {
    title: "",
    description: "",
    cor: "",
  };

  const {handleChange, values, clearForm} = useForm(valoresIniciais)

  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    //o que eu quero que aconteca
    const URL = "http://localhost:8080/categorias";
    fetch(URL).then(async (response) => {
      const res = await response.json();
      setCategorias([...res]);
    });

    //quando eu quero que aconteca
  }, []);

  return (
    <PageDefault>
      <h1> Cadastro de Categorias {values.nome}</h1>
      <form
        onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>
              {categoria.title} {categoria.cor}
            </li>
          );
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

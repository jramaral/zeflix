import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import PageDefault from "./../../../components/PageDefault/index";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

export default function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();
  const categoryTitles = categorias.map(({ title }) => title);

  const { values, handleChange } = useForm({
    title: "",
    url: "",
    category: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((response) => {
      setCategorias(response);
    });
  }, []);
  console.log(categorias);
  return (
    <PageDefault>
      <h1> Cadastro de Vídeos</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const categoriaId = categorias.find(
            (categoria) => categoria.title === values.categoria
          );

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaId.id,
            })
            .then(() => {
              console.log("Cadastrou com sucesso!");
              history.push("/");
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Button type="submit">Cadastrar</Button>
          {/* <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
                    Nova Categoria
                </Button> */}
        </div>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>

      {/*<Button as={Link} className="ButtonLink" to="/cadastro/categoria">*/}
      {/*    Nova Categoria*/}
      {/*</Button>*/}
    </PageDefault>
  );
}

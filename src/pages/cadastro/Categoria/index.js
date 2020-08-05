import React, {useState, useEffect} from "react";
import PageDefault from "./../../../components/PageDefault/index";
import {Link} from "react-router-dom";
import FormField from "./../../../components/FormField/index";
import Button from "./../../../components/Button/index";
import useForm from "../../../hooks/useForm";


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
                    name="title"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="description"
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

                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"10px"}}>
                    <Button>Cadastrar</Button>
                    <Button as={Link} className="ButtonLink" to="/">
                        Ir para Home
                    </Button>
                </div>

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

        </PageDefault>
    );
}

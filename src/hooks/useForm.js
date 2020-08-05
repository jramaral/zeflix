import {useState} from "react";

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

export default useForm

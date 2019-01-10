import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Cidade" />
        <input type="text" name="country" placeholder="País" />
        <button>Buscar</button>
        <p className="example">Exemplo: São Paulo BR</p>
    </form>
);

export default Form;
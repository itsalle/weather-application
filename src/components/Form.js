import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="Cidade"/>
            <input type="text" name="country" placeholder="Sigla do Pais (ex.: BR)"/>
            <button>Ver a Previsão</button>
            </form>
        )
    }
};

export default Form;
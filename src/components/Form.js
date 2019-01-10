import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="Cidade"/>
            <input type="text" name="country" placeholder="País"/>
            <p className="example">Exemplo: São Paulo BR</p>
            <button>Ver a Previsão</button>
            </form>
        )
    }
};

export default Form;
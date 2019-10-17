import React, { Component } from 'react';

class Formulario extends Component {
    state = {  
        cantidad: '',
        plazo: ''
    }

    calcularPrestamo = (e) => {
        e.preventDefault();
        
        //aplicar destructuring
        const { cantidad, plazo } = this.state;

        //pasarlo al componente padre
        this.props.datosPrestamo(cantidad, plazo);
    }

    actualizarState = (e) => {
        //leer los datos del formulario
        const { name, value } = e.target;

        //actualizar el state
        this.setState({
            [name] : Number(value)
        });
        
    }

    habilitarSubmit = () => {
        //aplicar destructuring
        const { cantidad, plazo } = this.state;

        //leer las variables
        const habilitado = !cantidad || !plazo;

        //retornar una respuesta
        return habilitado;   
    }

    render() { 
        const { cantidad } = this.state;
        
        return ( 
            <form onSubmit={this.calcularPrestamo}>
                <div>
                    <label>Cantidad préstamo:</label>
                    <input type="number" 
                           name="cantidad" 
                           className="u-full-width" 
                           placeholder="Ej: 3000" 
                           onChange={this.actualizarState}
                           />  
                </div>
                <div>
                    <label>Plazo para pagar:</label>
                    <select onChange={this.actualizarState} name="plazo" className="u-full-width">
                        <option value="">-- Seleccionar --</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input type="submit" 
                           value="Calcular" 
                           className="u-full-width button-primary" 
                           disabled={this.habilitarSubmit()}
                           />
                </div>
            </form>
        );
    }
}
 
export default Formulario;


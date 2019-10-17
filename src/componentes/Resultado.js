import React from 'react';

const Resultado = (props) => {
    return (  
        <div className="u-full-width resultado">
            <h2>Resultado</h2>
            <p><span>La cantidad solicitada fue:</span> ${props.cantidad}</p>
            <p><span>A pagar en:</span> {props.plazo} meses</p>
            <p><span>Total a pagar:</span> ${(props.total).toFixed(2)}</p>
            <p><span>Su pago mensual es de:</span> ${(props.cantidad / props.plazo).toFixed(2)}</p>
        </div>
    );
}
 
export default Resultado;
import {useState, useEffect, useRef} from "react";
import "./Cupcake.css"

const Cupcake = ({color ,sabor ,foto}) => {
    const fotoCupcake = useRef()

    const [vendido, setVendido] = useState(false)
    const vender = () => {
        setVendido(true)
        setReservado(true)
        const elemento=fotoCupcake.current;
        elemento.classList.add("vendido");

    }

    const [reservado, setReservado] = useState(false)
    const reservar = () =>{ setReservado(true)
        const elemento=fotoCupcake.current;
        elemento.classList.add("vendido");
    }

    useEffect(()=>{
        } ,[reservado])




    return (
        <div>
            <img ref={fotoCupcake} src={foto} alt={color}/>
            <p>{`Sabor : ${sabor}`}</p>
            <p>
                <b> Reservado: </b>
                {
                    reservado ? "Reservado" : "Libre"
                }
            </p>
            {
                !reservado && <button onClick={reservar}>Reservar</button>
            }
            <p>
            <b> Estado: </b>
            {
                vendido ? "Vendido" : "A la venta"
            }
        </p>
            {
                !vendido && <button onClick={vender}>Vender</button>
            }
        </div>
    )
}
export default Cupcake
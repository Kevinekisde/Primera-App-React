import {useState, useEffect} from "react";

const Cupcake = ({color ,sabor ,foto}) => {

    const [vendido, setVendido] = useState(false)
    const vender = () => {
        setVendido(true)
        setReservado(true)
    }

    const [reservado, setReservado] = useState(false)
    const reservar = () => setReservado(true)

    useEffect(()=>{
        console.log("Bienevenido", Date.now())
    },[vendido])


    return (
        <div>
            <img src={foto} alt={color}/>
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
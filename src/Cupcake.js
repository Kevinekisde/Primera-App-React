
// Transformacion Componente Clase a Funcion

const Cupcake = ({color ,sabor ,foto}) => {

    const vender = () => console.log("Vendido")

    return (
        <div>
            <img src={foto} alt={color}/>
            <p>{`Sabor : ${sabor}`}</p>
            <p>
                <b>
                    {
                        vendido ? "Vendido" : "A la venta"
                    }
                </b>
            </p>

            {
                !vendido && <button onClick={vender}>Vender</button>
            }
        </div>
    )

}


export default Cupcake
//Componente de Clase

// import {Component} from "react";

// class Cupcake extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             vendido:false,
//         }
//         this.vender=this.vender.bind(this)
//     }

//     vender(){
//         this.setState({ 
//             vendido:true
//         })
//     }


//     render() {
//         console.log(this.state.vendido)
//         return(
//             <div>
//             <img src={this.props.foto} alt={this.props.color}/>
//             <h2>{this.props.color}</h2> 
//             <p>{`Sabor : ${this.props.sabor}`}</p>
//             <p><b>{this.state.vendido ? "Vendido" : "A la venta"}</b></p>
//             {!this.state.vendido && <button onClick={this.vender}>Vender</button>}
//             </div>
//         )
//     }
// }


//export default Cupcake
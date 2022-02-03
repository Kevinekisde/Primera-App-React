import Cupcake from "./Cupcake";
import "./style.css";

const App = ()=> (
    <div className="container">
      <Cupcake id="cup1" color = "Rosa" sabor="Vainilla" foto="http://2.bp.blogspot.com/-S_cI62h1oFs/UUBPVdTAFwI/AAAAAAAAJkA/KIP9FgfF3Lo/s1600/cupcake-suave-de-chocolate-y-merengue-suizo.JPG"/>
      <Cupcake id="cup2" color = "Azul" sabor="Chocolate" foto="https://media.istockphoto.com/photos/blue-cupcake-with-stars-glitter-sprinkles-picture-id873286984"/>
      <Cupcake id="cup3" color = "Verde" sabor="Menta" foto = "https://i.pinimg.com/736x/40/5d/5b/405d5bdb9fc37d3b166372526ac77568.jpg"/>
    </div>
);

export default App;

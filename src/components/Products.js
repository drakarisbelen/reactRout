import { Link } from "react-router-dom";
const productList = [
  {
    id: 1,
    name: "Televisor",
    description: "Televisor 29' marca samsung",
  },
  {
    id: 2,
    name: "Computadora",
    price: 5222,
    description: "I7 16GB RAM 500SSD",
  },

  {
    id: 3,
    name: "Celular",
    price: 70,
    description: "Iphone 7",
  },

  {
    id: 4,
    name: "Teclado",
    price: 100,
    description: "GX Gaming",
  },
];

function Products(props) {
  let id = Number(props.match.params.id);
  let product = productList.find((oneProduct) => oneProduct.id === id);
  //console.log("id: ", id);
  return (
    <div>
      <h2> Soy el componente PRODUCTS</h2>
      <Link to="/products/1">Producto 1</Link>
      <br />
      <Link to="/products/2">Producto 2</Link>
      <br />
      <Link to="/products/3">Producto 3</Link>
      <br />
      {product && (
        <>
          <p>
            <b> ID: {product.id}</b>
          </p>
          <p>
            <b> Nombre: {product.name}</b>
          </p>
          <p>
            <b> Precio:{product.price} </b>
          </p>
          <p>
            <b> Descripción: {product.description}</b>
          </p>
        </>
      )}
      {!product && <p> No hay productos con ese ID </p>}
    </div>
  );
}
export default Products;

# REACT ROUTES

SPA Single web application: Es una aplicacion web donde solo existe un punto de entrada,
generalmente index.js, todo es cargado y renderizado dentro de ese componente.

1. Instalacion:
   npm install react-router-dom

2. Importación
   import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

3. Conceptos
   BrowserRouter: Anida toda mi aplicación
   Link: Enlace - ejemplo: <Link to="/" exact="true">Home</Link>
   Route: Componente a renderizar - ejemplo: <Route path="/" component={Home} />
   Switch: Chequea las rutas existentes, siempre dejar en último lugar y sin PATH la ruta not-found
   en caso de no matchear con ningún Link TO rendirzará por not-found
   <Switch>
   <Route path="/" component={Home} />
   <Route path="/about" component={About} />
   <Route path="/contact" component={Contact} />
   <Route component={Error404} />
   </Switch>

4. Obtener ID desde la ruta en react
   a) Debo definir la ruta
   <Route path="/products/:id" component={Products} />

   b) Recibo como props mi ID en los parametros de ruta utilizo para capturarlo props.match.params.id (este ultimo es el nombre de mi parametro en este caso id)
   function Products(props){
   const id = props.match.params.id;
   const product = productsAarray.find (product => product.id == id);

PROPS.MATCH.PARAMS

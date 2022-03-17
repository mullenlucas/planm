import data from './data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <BrowserRouter>
      <section className="grid-container">
        <header className="row">
          <div className="logobrand">
            <a href="/">planM!</a>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/product">Productos</a>
              </li>
              <li>
                <a href="/signin">Inciar sesión</a>
              </li>
              <li>
                <a href="/nice">NICE</a>
              </li>
            </ul>
          </nav>
          <a className="cta" href="/cart">
            <button>Carrito</button>
          </a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingScreen />}></Route>
          </Routes>
          <h1>Featured Prods:</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="row center">All rights reserved</footer>
      </section>
    </BrowserRouter>
  );
}

export default App;

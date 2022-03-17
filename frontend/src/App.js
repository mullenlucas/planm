import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LandingScreen from './screens/LandingScreen';
// Link is used instead of a in order to make pages NOT reaload, but the same one

function App() {
  return (
    <BrowserRouter>
      <section className="grid-container">
        <header className="row">
          <div className="logobrand">
            <Link to="/">planM!</Link>
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
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
          </Routes>
        </main>
        <footer className="row center">All rights reserved</footer>
      </section>
    </BrowserRouter>
  );
}

export default App;

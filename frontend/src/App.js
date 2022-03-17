import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LandingScreen from './screens/LandingScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
// Link is used instead of a in order to make pages NOT reaload, but the same one

function App() {
  return (
    <BrowserRouter>
      <section className="d-flex flex-column site-container">
        <header className="row">
          <Navbar className="color-nav" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="brand-style">planM!</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
          {/* <div className="logobrand"><Link to="/">planM!</Link></div> */}
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
          <Container>
            <Routes>
              <Route path="/" element={<LandingScreen />}></Route>
              <Route path="/product/:slug" element={<ProductScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <footer className="text-center footy-c">All rights reserved</footer>
      </section>
    </BrowserRouter>
  );
}

export default App;

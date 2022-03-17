
function App() {
  return (
    <section className="grid-container">
    <header className="row">
        <div className="logobrand">
            <a href="/">planM!</a>
        </div>
        <nav>
            <ul className="nav-links">
                <li><a href="/product">Productos</a></li>
                <li><a href="/signin">Inciar sesión</a></li>
                <li><a href="/nice">NICE</a></li>
            </ul>
        </nav>
        <a className="cta" href="/cart"><button>Carrito</button></a>
    </header>
    <main>

    </main>
    <footer className="row center">
        All rights reserved
    </footer>
    </section>
  );
}

export default App;

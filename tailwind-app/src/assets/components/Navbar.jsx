function Navbar() {
    return (
      <nav className="bg-orange-500 text-white p-4 flex justify-between">
        <div>Logo</div>
        <div className="space-x-4">
          <a href="#">Inicio</a>
          <a href="#">Acerca</a>
          <a href="#">Contacto</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  